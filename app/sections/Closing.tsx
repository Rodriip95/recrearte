import { SITE_CONTENT } from "../constants/content";
import ButtonLink from "../components/ui/ButtonLink";
import FloralDecoration from "../components/ui/FloralDecoration";
import Reveal from "../components/ui/Reveal";

export default function Closing() {
  return (
    <section className="closing">
      <FloralDecoration className="closing-decoration closing-decoration--left" />
      <Reveal>
        <p>{SITE_CONTENT.contact.closing}</p>
        <ButtonLink href="#contacto" variant="light">Quiero crear mi evento</ButtonLink>
      </Reveal>
      <FloralDecoration className="closing-decoration closing-decoration--right" />
    </section>
  );
}
