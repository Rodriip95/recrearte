import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { NAVIGATION, SITE_CONTENT } from "../../constants/content";

export default function Footer() {
  const content = SITE_CONTENT.footer;
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Image src="/assets/Logo.svg" alt="Flora Eventos Florales" width={180} height={80} />
          <p className="footer-tagline">{content.tagline}</p>
          <p>{content.description}</p>
        </div>
        <nav aria-label="Navegación del pie">
          <p className="footer-title">Explorá</p>
          {NAVIGATION.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Flora Eventos Florales. Todos los derechos reservados.</p>
        <Link href="/#inicio" className="back-to-top">
          <ArrowUp size={14} aria-hidden="true" />
          Volver arriba
        </Link>
      </div>
    </footer>
  );
}
