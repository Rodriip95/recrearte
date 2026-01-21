import { useState } from "react";
import {
  Menu,
  X,
  Instagram,
  MessageCircle,
  Leaf,
  Sparkles,
  Heart,
} from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{ backgroundColor: "#FEFEE6" }}
      className="fixed top-0 w-full backdrop-blur-sm z-50 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
            <a href="#inicio">
          <div className="flex items-center space-x-2">
            <img src="/logoVerde.svg" alt="Mi Logo" width={36} height={36} />
            <div>
              <span className="text-xl font-main text-emerald-900">
                RECREARTE
              </span>
            </div>
          </div>
            </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#proceso"
              className="text-stone-700 hover:text-emerald-700 transition text-sm tracking-wide"
            >
              ¿QUE HACEMOS?
            </a>
            <a
              href="#coleccion"
              className="text-stone-700 hover:text-emerald-700 transition text-sm tracking-wide"
            >
              COLECCIÓN VIVA
            </a>
            
            <a
              href="#contacto"
              className="text-stone-700 hover:text-emerald-700 transition text-sm tracking-wide"
            >
              CONTACTO
            </a>
          </nav>

          <button className="hidden md:block px-6 py-2 bg-emerald-700 text-white text-sm tracking-wide hover:bg-emerald-800 transition">
            AGENDAR CITA
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? (
              <X className="w-6 h-6 text-stone-700" />
            ) : (
              <Menu className="w-6 h-6 text-stone-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-200">
          <div className="px-4 py-4 space-y-4">
            <a
              href="#inicio"
              className="block text-stone-700 hover:text-emerald-700 transition"
            >
              Inicio
            </a>
            <a
              href="#coleccion"
              className="block text-stone-700 hover:text-emerald-700 transition"
            >
              Colección Viva
            </a>
            <a
              href="#proceso"
              className="block text-stone-700 hover:text-emerald-700 transition"
            >
              El Proceso
            </a>
            <a
              href="#contacto"
              className="block text-stone-700 hover:text-emerald-700 transition"
            >
              Contacto
            </a>
            <button className="w-full px-6 py-2 bg-emerald-700 text-white text-sm tracking-wide">
              AGENDAR CITA
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
