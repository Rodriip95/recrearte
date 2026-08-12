import Image from "next/image";
import { SITE_CONTENT } from "../constants/content";
import ButtonLink from "../components/ui/ButtonLink";
import DecorativeAsset from "../components/ui/DecorativeAsset";
import Reveal from "../components/ui/Reveal";

export default function Hero() {
  const content = SITE_CONTENT.hero;
  return (
    <section id="inicio" className="hero">
      <DecorativeAsset src="/assets/Vector-5.svg" className="asset-hero-botanical" />
      <DecorativeAsset src="/assets/Vector.svg" className="asset-hero-flower" />
      <DecorativeAsset src="/assets/Vector-2.svg" className="asset-hero-butterfly" delay={900} />
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.title}</h1>
          <p className="hero-subtitle">{content.subtitle}</p>
          <p className="hero-description">{content.description}</p>
          <div className="button-row">
            <ButtonLink href="#contacto">{content.primaryCta}</ButtonLink>
            <ButtonLink href="#galeria" variant="secondary">{content.secondaryCta}</ButtonLink>
          </div>
        </Reveal>
        <Reveal className="hero-collage" delay={120}>
          <div className="hero-image hero-image--main">
            {[
              {
                src: "/images/FR-Bouquet floral.JPG",
                alt: "Ramo floral creado por Flora para una celebración",
              },
              {
                src: "/images/CM-Farol premium.jpg",
                alt: "Farol floral premium con detalles en tonos cálidos",
              },
              {
                src: "/images/CM-Faroles clasicos.jpg",
                alt: "Faroles clásicos con arreglo floral",
              },
            ].map((image, index) => (
              <span className="hero-image-slide" key={image.src}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 88vw, 34vw"
                />
              </span>
            ))}
          </div>
          <div className="hero-image hero-image--secondary"><Image src="/images/CM-Argolla floral vela.JPG" alt="Centro de mesa floral con vela" fill sizes="(max-width: 768px) 38vw, 14vw" /></div>
          <div className="hero-image hero-image--small"><Image src="/images/CM-Linterna Rapunzel.jpg" alt="Cúpula con mariposas creada por Flora" fill sizes="(max-width: 768px) 32vw, 11vw" /></div>
        </Reveal>
      </div>
    </section>
  );
}
