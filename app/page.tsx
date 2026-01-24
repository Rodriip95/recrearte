"use client";
import {
  Menu,
  X,
  Instagram,
  MessageCircle,
  Leaf,
  Sparkles,
  Heart,
} from "lucide-react";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Gallery from "./sections/Gallery";

export default function BotanicalLanding() {

  const galleryImages = [
    { type: "tall", alt: "Arreglo floral con palmas secas" },
    { type: "wide", alt: "Cúpula de cristal con rosas" },
    { type: "square", alt: "Rama natural preservada" },
    { type: "wide", alt: "Celebración Natural - Torta decorada" },
  ];

  return (
    <div className="min-h-screen bg-black-50">
      <Header />
      <Hero />
      <Services />
      <About />

      <Gallery/>

      {/* Values Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
              Preservamos la magia de lo efímero
            </h2>
            <p className="text-stone-600 text-xl max-w-3xl mx-auto leading-relaxed">
              Creemos que las flores deben sentirse vivas, incluso cuando están
              pausadas en el tiempo. Buscamos esa imperfección natural que las
              hace reales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mt-16">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-stone-900 mb-3">
                  Técnica Orgánica
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Trabajamos con métodos artesanales que respetan la esencia
                  natural de cada elemento botánico.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-stone-900 mb-3">
                  Diseño Natural
                </h3>
                <p className="text-stone-600 leading-relaxed">
                  Cada pieza es única, creada desde la observación y el diálogo
                  con las formas que nos regala la naturaleza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contacto"
        className="py-24 px-4 bg-gradient-to-br from-emerald-50 to-stone-50"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-6">
            Trae un jardín a casa
          </h2>
          <p className="text-stone-600 text-xl mb-12 leading-relaxed">
            Piezas únicas creadas respetando los ciclos de la naturaleza y el
            tiempo de creación artesanal.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group px-8 py-4 bg-emerald-700 text-white hover:bg-emerald-800 transition rounded-lg shadow-lg flex items-center justify-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm tracking-wide">
                Hablemos por WhatsApp
              </span>
            </button>
            <button className="group px-8 py-4 bg-white text-emerald-700 hover:bg-stone-50 transition rounded-lg shadow-lg flex items-center justify-center space-x-2">
              <Instagram className="w-5 h-5" />
              <span className="text-sm tracking-wide">Sigue nuestro viaje</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-white font-serif text-lg mb-4">Explora</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition text-sm">
                    Catálogo vivo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition text-sm">
                    Ceremonias orgánicas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition text-sm">
                    Sobre nosotros
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-serif text-lg mb-4">Info</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition text-sm">
                    Cuidado natural
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition text-sm">
                    Envíos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition text-sm">
                    Preguntas frecuentes
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-serif text-lg mb-4">Contacto</h4>
              <ul className="space-y-2">
                <li className="text-sm">hola@natura.com</li>
                <li className="text-sm">+54 9 11 0000-0000</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-serif text-lg mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white transition">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 text-center">
            <p className="text-sm">
              © 2026 Natura. Creado para respirar, creado para sentir.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
