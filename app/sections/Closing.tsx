import { SITE_CONTENT, SOCIAL_LINKS } from "../constants/content";
import ButtonLink from "../components/ui/ButtonLink";
import DecorativeAsset from "../components/ui/DecorativeAsset";
import Reveal from "../components/ui/Reveal";

export default function Closing() {
  return (
    <section className="closing">
      <DecorativeAsset
        src="/assets/Vector-5-closing.svg"
        className="closing-decoration closing-decoration--left"
      />
      <Reveal>
        <p className="closing-text">{SITE_CONTENT.contact.closing}</p>
        <ButtonLink href={SOCIAL_LINKS.whatsapp} variant="light">Escribime</ButtonLink>
      </Reveal>
      <DecorativeAsset
        src="/assets/Vector-2.svg"
        className="closing-decoration closing-decoration--right"
        delay={900}
      />
    </section>
  );
}
