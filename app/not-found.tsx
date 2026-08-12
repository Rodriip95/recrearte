import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "La página que buscás no existe o cambió de dirección.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="not-found-page">
        <Image
          className="not-found-decoration not-found-decoration--left"
          src="/assets/Vector-5.svg"
          alt=""
          width={460}
          height={460}
          aria-hidden="true"
        />
        <Image
          className="not-found-decoration not-found-decoration--right"
          src="/assets/Group-1.svg"
          alt=""
          width={190}
          height={190}
          aria-hidden="true"
        />

        <div className="container not-found-content">
          <p className="not-found-code" aria-hidden="true">404</p>
          <p className="eyebrow">ESTA PÁGINA NO FLORECIÓ</p>
          <h1>No encontramos lo que buscabas</h1>
          <p className="not-found-description">
            Puede que el enlace haya cambiado o que la página ya no esté disponible.
            Volvé al inicio para seguir descubriendo nuestras propuestas.
          </p>
          <div className="button-row not-found-actions">
            <Link href="/" className="button button--primary">
              <ArrowLeft size={17} aria-hidden="true" />
              Volver al inicio
            </Link>
            <Link href="/#contacto" className="button button--secondary">
              <MessageCircle size={17} aria-hidden="true" />
              Contactanos
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
