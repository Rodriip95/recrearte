"use client";

import { useState } from "react";
import Image from "next/image";
import { Baby, CakeSlice, Flower2, Gift, PartyPopper } from "lucide-react";
import { GALLERY_ITEMS, SITE_CONTENT } from "../constants/content";
import type { GalleryCategory } from "../types/content";
import SectionHeading from "../components/ui/SectionHeading";
import Reveal from "../components/ui/Reveal";
import DecorativeAsset from "../components/ui/DecorativeAsset";

export default function Gallery() {
  const content = SITE_CONTENT.gallery;
  type VisibleCategory = Exclude<GalleryCategory, "Todos">;
  const categories = content.categories.filter(
    (category): category is VisibleCategory => category !== "Todos",
  );
  const [activeCategory, setActiveCategory] =
    useState<VisibleCategory>("Centros de mesa");
  const [mobileCategoryIndex, setMobileCategoryIndex] = useState(0);
  const [mobileImageIndex, setMobileImageIndex] = useState(0);
  const items = GALLERY_ITEMS.filter(
    (item) => item.category === activeCategory,
  );
  const mobileCategory = categories[mobileCategoryIndex];
  const mobileItems = GALLERY_ITEMS.filter(
    (item) => item.category === mobileCategory,
  );
  const mobileItem = mobileItems[mobileImageIndex];
  const categoryIcons = [Flower2, Gift, Baby, CakeSlice, PartyPopper];

  const moveMobileGallery = (direction: 1 | -1) => {
    setMobileImageIndex(
      (current) => (current + direction + mobileItems.length) % mobileItems.length,
    );
  };

  const selectMobileCategory = (index: number) => {
    setMobileCategoryIndex(index);
    setMobileImageIndex(0);
  };

  return (
    <section id="galeria" className="section gallery">
      <DecorativeAsset src="/assets/Group.svg" className="asset-gallery" />
      <div className="container">
        <Reveal><SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.description} /></Reveal>
        <div className="gallery-filters" role="group" aria-label="Filtrar galería">
          {categories.map((category) => (
            <button key={category} className={activeCategory === category ? "is-active" : ""} onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category}>{category}</button>
          ))}
        </div>
        {items.length ? (
          <div className="gallery-grid" aria-live="polite">
            {items.map((item, index) => (
              <article key={item.id} className={`gallery-item gallery-item--${item.size}`}>
                <Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 31vw" priority={index === 0} />
                <div className="gallery-overlay"><span>{item.category}</span><h3>{item.title}</h3></div>
              </article>
            ))}
          </div>
        ) : <p className="empty-state">{content.emptyState}</p>}

        {mobileItem && <div className="mobile-gallery" aria-live="polite">
          <div className="mobile-category-buttons" role="group" aria-label="Categorías de la galería">
            {categories.map((category, index) => {
              const Icon = categoryIcons[index];
              return (
                <button
                  key={category}
                  type="button"
                  className={index === mobileCategoryIndex ? "is-active" : ""}
                  onClick={() => selectMobileCategory(index)}
                  aria-label={category}
                  aria-pressed={index === mobileCategoryIndex}
                  title={category}
                >
                  <Icon aria-hidden="true" />
                </button>
              );
            })}
          </div>
          <div className="mobile-gallery-stage">
            <article
              className="mobile-gallery-item"
              key={`${mobileCategory}-${mobileItem.id}`}
            >
              <Image
                src={mobileItem.src}
                alt={mobileItem.alt}
                fill
                sizes="calc(100vw - 32px)"
              />
              <div className="mobile-gallery-caption">
                <span>Categoría</span>
                <h3>{mobileCategory}</h3>
                <p>{mobileItem.title}</p>
              </div>
            </article>
            <button
              className="mobile-gallery-arrow mobile-gallery-arrow--previous"
              type="button"
              onClick={() => moveMobileGallery(-1)}
              aria-label="Ver imagen anterior"
            >
              ←
            </button>
            <button
              className="mobile-gallery-arrow mobile-gallery-arrow--next"
              type="button"
              onClick={() => moveMobileGallery(1)}
              aria-label="Ver imagen siguiente"
            >
              →
            </button>
          </div>
          <div className="mobile-gallery-meta">
            <span>{mobileImageIndex + 1} / {mobileItems.length}</span>
            <span className="mobile-gallery-category-name">{mobileCategory}</span>
          </div>
        </div>}
      </div>
    </section>
  );
}
