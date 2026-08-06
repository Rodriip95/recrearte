export type GalleryCategory =
  | "Todos"
  | "Centros de mesa"
  | "Souvenirs"
  | "Velas y pergaminos"
  | "Arreglos florales y ramos"
  | "Cuadros de firmas";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "Todos">;
  title: string;
  width: number;
  height: number;
  size: "tall" | "wide" | "standard";
}
