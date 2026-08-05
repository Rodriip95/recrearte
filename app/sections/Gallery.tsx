import { getGalleryItems } from "../lib/gallery";
import GalleryClient from "./GalleryClient";

export default function Gallery() {
  return <GalleryClient galleryItems={getGalleryItems()} />;
}
