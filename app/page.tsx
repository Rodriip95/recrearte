import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Closing from "./sections/Closing";

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
