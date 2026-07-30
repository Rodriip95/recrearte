import Image from "next/image";
import { SITE_CONTENT } from "../constants/content";
import ButtonLink from "../components/ui/ButtonLink";
import FloralDecoration from "../components/ui/FloralDecoration";
import DecorativeAsset from "../components/ui/DecorativeAsset";
import Reveal from "../components/ui/Reveal";

export default function Hero() {
  const content = SITE_CONTENT.hero;
  return (
    <section id="inicio" className="hero">
      <FloralDecoration className="hero-botanical" />
      <DecorativeAsset src="/assets/Vector.svg" className="asset-hero-flower" />
      <DecorativeAsset src="/assets/Vector-2.svg" className="asset-hero-butterfly" delay={900} />
      <div className="container hero-grid">
        <Reveal className="hero-copy">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1 className="font-display">{content.title}</h1>
          <p className="hero-subtitle font-secondary font-bold">{content.subtitle}</p>
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
                src: "/images/5130ca3e-8853-4b81-b1d9-499dd624fa29.JPG",
                alt: "Ambientación floral en blanco para una celebración especial",
              },
              {
                src: "/images/61c340ba-42f9-4c02-b9a1-134415de547c.JPG",
                alt: "Centro de mesa floral en tonos celestes",
              },
              {
                src: "/images/f6558e46-890e-42d8-9e9c-c431a53cb7fb.JPG",
                alt: "Centro de mesa floral en tonos rosa",
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
          <div className="hero-image hero-image--secondary"><Image src="/images/007bd6cd-e92d-4458-91a3-e5ba32d81040.JPG" alt="Centro de mesa floral en tonos rosa" fill sizes="(max-width: 768px) 38vw, 14vw" /></div>
          <div className="hero-image hero-image--small"><Image src="/images/42a989c6-772a-4ddc-825b-12ec8501f136.JPG" alt="Cúpulas con mariposas creadas por Flora" fill sizes="(max-width: 768px) 32vw, 11vw" /></div>
          <span className="hero-note">hecho con sensibilidad</span>
        </Reveal>
      </div>
    </section>
  );
}
