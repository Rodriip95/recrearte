import { useEffect, useState } from "react";

const imagesByCategory: Record<string, string[]> = {
  "Centros de mesa": [
    "https://images.unsplash.com/photo-1487070183336-b863922373d4?w=800&q=80",
    "https://images.unsplash.com/photo-1502977249166-824b3a8a4d6d?w=800&q=80",
    "https://images.unsplash.com/photo-1477554193778-9562c28588c0?w=800&q=80",
    "https://images.unsplash.com/photo-1464347744102-11db6282f854?w=800&q=80",
  ],
  Souvenirs: [
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
    "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&q=80",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
    "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=80",
  ],
  "Ceremonia de velas": [
    "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=80",
    "https://images.unsplash.com/photo-1504198458649-3128b932f49b?w=800&q=80",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80",
  ],
  Pergaminos: [
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80",
    "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=800&q=80",
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=800&q=80",
    "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80",
  ],
  "Numeradores de mesa": [
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&q=80",
    "https://images.unsplash.com/photo-1526045478516-99145907023c?w=800&q=80",
    "https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=800&q=80",
  ],
  "Rosas de 15": [
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=800&q=80",
    "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&q=80",
    "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?w=800&q=80",
    "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&q=80",
  ],
  "Arreglos florales": [
    "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=800&q=80",
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
    "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&q=80",
    "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800&q=80",
  ],
  "Cuadro de firmas": [
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    "https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=800&q=80",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80",
    "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&q=80",
  ],
  "Ramos y tocados": [
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=800&q=80",
    "https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=800&q=80",
    "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=800&q=80",
    "https://images.unsplash.com/photo-1504198458649-3128b932f49b?w=800&q=80",
  ],
};

const categories = Object.keys(imagesByCategory);

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("Centros de mesa");
  const [visibleCategory, setVisibleCategory] = useState(activeCategory);
  const [isFading, setIsFading] = useState(false);

  const handleChangeCategory = (category: string) => {
    if (category === activeCategory) return;

    setIsFading(true);

    setTimeout(() => {
      setVisibleCategory(category);
      setActiveCategory(category);
      setIsFading(false);
    }, 300);
  };

  const images = imagesByCategory[visibleCategory];

  return (
    <section id="coleccion" className="py-24 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          {" "}
          <p className="text-emerald-700 text-sm tracking-[0.3em] mb-3 uppercase">
            {" "}
            Colección{" "}
          </p>{" "}
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900">
            {" "}
            Piezas que cuentan historias{" "}
          </h2>{" "}
        </div>

        {/* BOTONES */}
        <div className="flex gap-3 mb-10 overflow-x-auto scrollbar-hide py-2">
          {categories.map((type) => (
            <button
              key={type}
              onClick={() => handleChangeCategory(type)}
              className={`whitespace-nowrap rounded-full px-5 py-2 text-sm transition-all
                ${
                  activeCategory === type
                    ? "bg-emerald-700 text-white shadow"
                    : "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 fade ${
            isFading ? "fade-out" : ""
          }`}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className={`bg-stone-200 rounded-lg overflow-hidden shadow-lg
                ${index === 0 ? "md:row-span-2" : "h-80"}`}
            >
              <img
                src={src}
                alt={visibleCategory}
                className="w-full h-full object-cover hover:scale-105 transition duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
