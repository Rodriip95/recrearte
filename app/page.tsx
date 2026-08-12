import type { Metadata } from "next";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Closing from "./sections/Closing";

export const metadata: Metadata = {
  title: { absolute: "Decoración floral para eventos | Flora Eventos Florales" },
  description:
    "Centros de mesa, souvenirs, arreglos florales y decoración personalizada para comuniones, bautismos, quince años y celebraciones especiales.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
