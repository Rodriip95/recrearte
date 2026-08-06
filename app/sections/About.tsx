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
        <Reveal className="about-visual">
          <div className="about-image">
            <Image src="/images/FR-Ramo para regalos.JPG" alt="Ramo floral armado para regalar, creación de Flora Eventos Florales" fill sizes="(max-width: 768px) 92vw, 40vw" />
          </div>
          <div className="about-seal" aria-hidden="true">
            <Image src="/assets/Lg.svg" alt="" width={84} height={84} />
          </div>
        </Reveal>
        <Reveal className="about-content" delay={100}>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} />
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
