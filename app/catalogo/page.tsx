import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { SITE_CONTENT } from "../constants/content";
import { getGalleryItems } from "../lib/gallery";
import type { GalleryCategory, GalleryItem } from "../types/content";

export const metadata: Metadata = {
  title: "Catálogo de decoración para eventos",
  description:
    "Explorá el catálogo de Flora: centros de mesa, souvenirs, velas, pergaminos, arreglos florales, ramos y cuadros de firmas personalizados.",
  alternates: { canonical: "/catalogo" },
  openGraph: {
    type: "website",
    url: "/catalogo",
    title: "Catálogo de diseños para eventos | Flora Eventos Florales",
    description:
      "Centros de mesa, souvenirs, velas, pergaminos, arreglos florales, ramos y cuadros de firmas personalizados.",
    images: [
      {
        url: "/images/CM-Farol premium.jpg",
        width: 1024,
        height: 1536,
        alt: "Centro de mesa floral de Flora Eventos Florales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catálogo de diseños para eventos | Flora Eventos Florales",
    description:
      "Centros de mesa, souvenirs y decoración floral personalizada para celebraciones.",
    images: ["/images/CM-Farol premium.jpg"],
  },
};

type VisibleCategory = Exclude<GalleryCategory, "Todos">;

export default function CatalogPage() {
  const galleryItems = getGalleryItems();
  const categories = SITE_CONTENT.gallery.categories.filter(
    (category): category is VisibleCategory => category !== "Todos",
  );
  const heroItems = getCatalogHeroItems(galleryItems);

  return (
    <>
      <Header />
      <main id="top" className="catalog-page">
        <section className="catalog-hero">
          {heroItems.length ? (
            <div className="catalog-hero-background" aria-hidden="true">
              {heroItems.map((item, index) => (
                <div className={`catalog-hero-photo catalog-hero-photo--${index + 1}`} key={item.id}>
                  <Image
                    src={item.src}
                    alt=""
                    width={item.width}
                    height={item.height}
                    priority={index === 0}
                    sizes="(max-width: 720px) 72vw, 32vw"
                  />
                </div>
              ))}
            </div>
          ) : null}

          <div className="container">
            <div className="catalog-hero-copy catalog-hero-copy--center">
              <p className="eyebrow">CATÁLOGO FLORA</p>
              <h1 className="font-display">Detalles que marcan la diferencia</h1>
              <p>
                <strong>Explorá el catálogo y encontrá el detalle perfecto para tu evento.</strong> Reunimos centros de mesa, souvenirs, velas, pergaminos, arreglos florales, ramos y cuadros de firmas para que puedas imaginar tu celebración con más claridad.
              </p>
              <div className="catalog-hero-links" aria-label="Categorías del catálogo">
                {categories.map((category) => (
                  <a key={category} href={`#${getCategoryId(category)}`}>
                    {category}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="catalog-sections">
          <div className="container">
            {categories.map((category) => {
              const items = galleryItems.filter((item) => item.category === category);

              return (
                <section
                  className="catalog-category"
                  id={getCategoryId(category)}
                  key={category}
                >
                  <div className="catalog-category-header">
                    <div>
                      <p className="eyebrow">Flora · {items.length} diseños</p>
                      <h2>{category}</h2>
                    </div>
                    <a href="#top" className="catalog-top-link">
                      Arriba
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  </div>

                  {items.length ? (
                    <div className="catalog-masonry">
                      {items.map((item) => (
                        <article className="catalog-card" key={item.id}>
                          <Image
                            src={item.src}
                            alt={item.alt}
                            width={item.width}
                            height={item.height}
                            sizes="(max-width: 720px) 100vw, (max-width: 1180px) 45vw, 30vw"
                          />
                          <div className="catalog-card-caption">
                            <span>{item.title}</span>
                          </div>
                        </article>
                      ))}
                    </div>
                  ) : (
                    <p className="catalog-empty">{SITE_CONTENT.gallery.emptyState}</p>
                  )}
                </section>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function getCatalogHeroItems(items: GalleryItem[]) {
  return [
    items.find((item) => item.category === "Centros de mesa"),
    items.find((item) => item.category === "Velas y pergaminos"),
    items.find((item) => item.category === "Souvenirs"),
  ].filter((item): item is GalleryItem => Boolean(item));
}

function getCategoryId(category: string) {
  return category
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
