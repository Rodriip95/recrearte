"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { track } from "@vercel/analytics";
import { SITE_CONTENT } from "../constants/content";
import type { GalleryCategory, GalleryItem } from "../types/content";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import DecorativeAsset from "../components/ui/DecorativeAsset";

export default function GalleryClient({ galleryItems }: { galleryItems: GalleryItem[] }) {
  const content = SITE_CONTENT.gallery;
  type VisibleCategory = Exclude<GalleryCategory, "Todos">;
  const categories = content.categories.filter(
    (category): category is VisibleCategory => category !== "Todos",
  );

  return (
    <section id="galeria" className="section gallery gallery-preview">
      <DecorativeAsset src="/assets/Group.svg" className="asset-gallery" />
      <div className="container">
        <Reveal>
          <div className="gallery-preview-header">
            <SectionHeading
              eyebrow={content.eyebrow}
              title={content.title}
              description={content.description}
            />
            <Link className="button button--light gallery-preview-cta" href="/catalogo" onClick={() => track("catalog_opened", { category: "all", location: "gallery_header" })}>
              Ver catálogo completo
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <div className="gallery-preview-groups">
          {categories.map((category) => {
            const items = galleryItems
              .filter((item) => item.category === category)
              .slice(0, 4);

            return (
              <Reveal key={category} className="gallery-preview-group">
                <div className="gallery-preview-title-row">
                  <div>
                    <p className="gallery-preview-count">
                      {items.length ? `${items.length} muestras` : "Próximamente"}
                    </p>
                    <h3>{category}</h3>
                  </div>
                  <Link href={`/catalogo#${getCategoryId(category)}`} onClick={() => track("catalog_opened", { category, location: "gallery_category" })}>
                    Ver más
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>

                {items.length ? (
                  <div className="gallery-preview-grid">
                    {items.map((item, index) => (
                      <article key={item.id} className="gallery-preview-card">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={item.width}
                          height={item.height}
                          sizes="(max-width: 720px) 46vw, (max-width: 1024px) 22vw, 18vw"
                          priority={index === 0 && category === "Centros de mesa"}
                        />
                        <div className="gallery-preview-card-caption">
                          <span>{item.title}</span>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <p className="gallery-preview-empty">{content.emptyState}</p>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function getCategoryId(category: string) {
  return category
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
