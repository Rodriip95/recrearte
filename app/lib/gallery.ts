import { readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import type { GalleryItem } from "../types/content";

const CATEGORY_BY_CODE = {
  CM: "Centros de mesa",
  S: "Souvenirs",
  VP: "Velas y pergaminos",
  FR: "Arreglos florales y ramos",
  CF: "Cuadros de firmas",
} as const satisfies Record<string, GalleryItem["category"]>;

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);
const SIZE_PATTERN: GalleryItem["size"][] = [
  "tall",
  "standard",
  "wide",
  "standard",
  "standard",
  "tall",
  "standard",
  "wide",
];

const WORD_REPLACEMENTS: Record<string, string> = {
  clasica: "clásica",
  clasicas: "clásicas",
  clasico: "clásico",
  clasicos: "clásicos",
  copon: "copón",
  cupula: "cúpula",
  cupulas: "cúpulas",
  lamparas: "lámparas",
  platiadas: "plateadas",
  varrillas: "varillas",
};

export function getGalleryItems(): GalleryItem[] {
  const imagesDirectory = path.join(process.cwd(), "public", "images");
  const categoryCounts = new Map<GalleryItem["category"], number>();

  return readdirSync(imagesDirectory, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "es", { sensitivity: "base" }))
    .map((file) => {
      const item = parseGalleryFile(file);
      if (!item) return null;

      const categoryIndex = categoryCounts.get(item.category) ?? 0;
      categoryCounts.set(item.category, categoryIndex + 1);

      return {
        ...item,
        ...getImageDimensions(path.join(imagesDirectory, file)),
        size: SIZE_PATTERN[categoryIndex % SIZE_PATTERN.length],
      };
    })
    .filter((item): item is GalleryItem => item !== null);
}

function parseGalleryFile(file: string): Omit<GalleryItem, "size"> | null {
  const match = file.match(/^([A-Za-z]{1,2})-(.+)\.[^.]+$/);
  if (!match) return null;

  const code = match[1].toUpperCase();
  const category = CATEGORY_BY_CODE[code as keyof typeof CATEGORY_BY_CODE];
  if (!category) return null;

  const title = formatTitle(match[2]);

  return {
    id: file,
    src: `/images/${file}`,
    alt: `${title}, diseño de Flora Eventos Florales`,
    category,
    title,
    width: 1200,
    height: 1500,
  };
}

function getImageDimensions(filePath: string) {
  const buffer = readFileSync(filePath);
  const extension = path.extname(filePath).toLowerCase();

  if (extension === ".png" && buffer.toString("ascii", 1, 4) === "PNG") {
    return {
      width: buffer.readUInt32BE(16),
      height: buffer.readUInt32BE(20),
    };
  }

  if ((extension === ".jpg" || extension === ".jpeg") && buffer[0] === 0xff && buffer[1] === 0xd8) {
    const dimensions = getJpegDimensions(buffer);
    if (dimensions) return dimensions;
  }

  if (extension === ".webp" && buffer.toString("ascii", 0, 4) === "RIFF") {
    const dimensions = getWebpDimensions(buffer);
    if (dimensions) return dimensions;
  }

  return { width: 1200, height: 1500 };
}

function getJpegDimensions(buffer: Buffer) {
  let offset = 2;

  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) return null;

    const marker = buffer[offset + 1];
    const length = buffer.readUInt16BE(offset + 2);
    const isStartOfFrame =
      (marker >= 0xc0 && marker <= 0xc3) ||
      (marker >= 0xc5 && marker <= 0xc7) ||
      (marker >= 0xc9 && marker <= 0xcb) ||
      (marker >= 0xcd && marker <= 0xcf);

    if (isStartOfFrame) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }

    offset += 2 + length;
  }

  return null;
}

function getWebpDimensions(buffer: Buffer) {
  const format = buffer.toString("ascii", 12, 16);

  if (format === "VP8X") {
    return {
      width: 1 + buffer.readUIntLE(24, 3),
      height: 1 + buffer.readUIntLE(27, 3),
    };
  }

  if (format === "VP8 ") {
    return {
      width: buffer.readUInt16LE(26) & 0x3fff,
      height: buffer.readUInt16LE(28) & 0x3fff,
    };
  }

  if (format === "VP8L") {
    const bits = buffer.readUInt32LE(21);
    return {
      width: (bits & 0x3fff) + 1,
      height: ((bits >> 14) & 0x3fff) + 1,
    };
  }

  return null;
}

function formatTitle(value: string) {
  const normalized = value
    .replace(/[_-]+/g, " ")
    .replace(/\s*\(\d+\)\s*/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return normalized
    .split(" ")
    .map((word, index) => formatWord(word, index))
    .join(" ");
}

function formatWord(word: string, index: number) {
  if (/^[IVX]+$/i.test(word)) return word.toUpperCase();
  if (/^\d+$/.test(word)) return word;

  const lower = word.toLowerCase();
  const corrected = WORD_REPLACEMENTS[lower] ?? lower;
  if (corrected === "cm") return corrected;

  if (
    index > 0 &&
    ["a", "con", "de", "del", "e", "el", "la", "las", "los", "y"].includes(corrected)
  ) {
    return corrected;
  }

  return corrected.charAt(0).toUpperCase() + corrected.slice(1);
}
