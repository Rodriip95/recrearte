export type GalleryCategory =
  | "Todos"
  | "Centros de mesa"
  | "Souvenirs"
  | "Comuniones y bautismos"
  | "Quince años"
  | "Eventos especiales";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: Exclude<GalleryCategory, "Todos">;
  title: string;
  size: "tall" | "wide" | "standard";
}
