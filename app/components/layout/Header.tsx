"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NAVIGATION } from "../../constants/content";
import ButtonLink from "../ui/ButtonLink";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled || menuOpen ? "is-scrolled" : ""}`}>
      <div className="container header-inner">
        <Link href="/#inicio" className="brand" aria-label="Flora Eventos Florales, ir al inicio">
          <Image src="/assets/Logo.svg" alt="Flora Eventos Florales" width={150} height={64} priority />
        </Link>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {NAVIGATION.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink href="/#contacto" className="header-cta button--sm" analyticsEvent="contact_cta_clicked" analyticsProperties={{ location: "desktop_header" }}>Quiero crear mi evento</ButtonLink>
        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label="Navegación móvil">
          {NAVIGATION.map((item, index) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/#contacto" analyticsEvent="contact_cta_clicked" analyticsProperties={{ location: "mobile_menu" }}>Quiero crear mi evento</ButtonLink>
        </nav>
      </div>
    </header>
  );
}
