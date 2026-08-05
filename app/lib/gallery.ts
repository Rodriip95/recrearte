import { readdirSync } from "node:fs";
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
  copon: "copón",
  cupula: "cúpula",
  cupulas: "cúpulas",
  lamparas: "lámparas",
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
  };
}

function formatTitle(value: string) {
  const normalized = value
    .replace(/[_-]+/g, " ")
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

  if (
    index > 0 &&
    ["a", "con", "de", "del", "e", "el", "la", "las", "los", "y"].includes(corrected)
  ) {
    return corrected;
  }

  return corrected.charAt(0).toUpperCase() + corrected.slice(1);
}
