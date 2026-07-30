import Image from "next/image";
import { SITE_CONTENT } from "../constants/content";
import SectionHeading from "../components/ui/SectionHeading";
import FloralDecoration from "../components/ui/FloralDecoration";
import Reveal from "../components/ui/Reveal";
import DecorativeAsset from "../components/ui/DecorativeAsset";

export default function About() {
  const content = SITE_CONTENT.about;
  //const styleLogo = { position: "absolute", z-index: 2, right: -28, top: 12%, width: "clamp(105px, 14vw, 180px)", height: "auto", pointerEvents: "none", animation: "gentle-float 6s ease-in-out infinite" };
  return (
    <section id="sobre-flora" className="section about">
      <div className="container about-grid">
        <Reveal className="about-visual">
          <div className="about-image"><Image src="/images/61c340ba-42f9-4c02-b9a1-134415de547c.JPG" alt="Composición floral celeste creada por Flora" fill sizes="(max-width: 768px) 92vw, 40vw" /></div>
          <div className="absolute z-10 right-4 bottom-4 bg-amber-100 rounded-full p-4 w-24 h-24 flex items-center justify-center shadow-lg -rotate-20">
          <Image src="/assets/Lg.svg" alt="" aria-hidden="true" width={80} height={80} />
          </div>
        </Reveal>
        <Reveal className="about-content" delay={100}>
          <SectionHeading eyebrow={content.eyebrow} title={content.title} />
          <p className="about-intro">{content.intro}</p>
          <div className="about-paragraphs">{content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          <blockquote>{content.highlight}</blockquote>
          <p className="signature">{content.signature}</p>
        </Reveal>
      </div>
      <FloralDecoration className="about-botanical" />
      <DecorativeAsset src="/assets/Vector-1.svg" className="asset-about" delay={600} />
    </section>
  );
}
