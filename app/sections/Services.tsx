import { Flower2, Gift, PartyPopper, Sprout, WandSparkles } from "lucide-react";
import { SITE_CONTENT } from "../constants/content";
import SectionHeading from "../components/ui/SectionHeading";
import ButtonLink from "../components/ui/ButtonLink";
import Reveal from "../components/ui/Reveal";
import DecorativeAsset from "../components/ui/DecorativeAsset";

const icons = [Flower2, Gift, PartyPopper, Sprout, WandSparkles];

export default function Services() {
  const content = SITE_CONTENT.services;
  return (
    <section id="servicios" className="section services">
      <DecorativeAsset src="/assets/Vector-3.svg" className="asset-services" />
      <div className="container">
        <Reveal><SectionHeading eyebrow={content.eyebrow} title={content.title} description={content.intro} align="center" /></Reveal>
        <div className="services-grid">
          {content.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={service.title} className={`service-card service-card--${index + 1}`} delay={index * 60}>
                <div className="service-number">0{index + 1}</div>
                <Icon aria-hidden="true" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </Reveal>
            );
          })}
        </div>
        <div className="centered-cta"><ButtonLink href="#contacto">{content.cta}</ButtonLink></div>
      </div>
    </section>
  );
}
