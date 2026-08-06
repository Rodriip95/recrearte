import Image from "next/image";
import { SITE_CONTENT } from "../constants/content";
import SectionHeading from "../components/ui/SectionHeading";
import FloralDecoration from "../components/ui/FloralDecoration";
import Reveal from "../components/ui/Reveal";
import DecorativeAsset from "../components/ui/DecorativeAsset";

export default function About() {
  const content = SITE_CONTENT.about;
  return (
    <section id="sobre-flora" className="section about">
      <div className="container about-grid">
        <Reveal className="about-heading" delay={100}>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} />
        </Reveal>
        <Reveal className="about-visual">
          <div className="about-image about-image--main border-8 border-amber-50">
            <Image src="/images/about1.JPG" alt="Creación floral de Flora Eventos Florales" fill sizes="(max-width: 720px) 68vw, 31vw" />
          </div>
          <div className="about-image about-image--left absolute z-10">
            <Image src="/images/about2.JPG" alt="Detalle del trabajo artesanal de Flora Eventos Florales" fill sizes="(max-width: 720px) 31vw, 14vw" />
          </div>
          <div className="about-image about-image--right absolute z-10">
            <Image src="/images/about3.JPG" alt="Ambientación creada por Flora Eventos Florales" fill sizes="(max-width: 720px) 29vw, 13vw" />
          </div>
          <div className="about-seal z-30" aria-hidden="true">
            <Image src="/assets/Lg.svg" alt="" width={84} height={84} />
          </div>
        </Reveal>
        <Reveal className="about-content" delay={100}>
          <p className="about-intro">{content.intro}</p>
          <div className="about-narrative">
            {content.chapters.map((chapter, index) => (
              <div className="about-chapter" key={chapter.marker}>
                <p className="about-chapter-marker">
                  <span className="about-chapter-index">0{index + 1}</span>
                  {chapter.marker}
                </p>
                {chapter.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            ))}
            <blockquote className="about-pullquote">{content.quote}</blockquote>
            <blockquote className="about-highlight">{content.highlight}</blockquote>
            <p className="signature">{content.signature}</p>
          </div>
        </Reveal>
      </div>
      <FloralDecoration className="about-botanical" />
      <DecorativeAsset src="/assets/Vector-1.svg" className="asset-about" delay={600} />
    </section>
  );
}
