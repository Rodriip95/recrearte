import Image from "next/image";

const Services = () => {
  return (
    <section id="proceso" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-emerald-700 text-sm tracking-[0.3em] mb-3 uppercase">
            Flores & Mariposas
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
            Detalles que enamoran
          </h2>
          <br />
          <p className="text-stone-400 text-md md:text-lg max-w-4xl mx-auto leading-relaxed font-main">
            Estas son algunas de nuestras creaciones, totalmente personalizadas
            al gusto de cada cliente. Cada pieza es única, creada con dedicación
            y pasión para capturar la esencia de la naturaleza en su forma más
            hermosa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 items-center">
          <div className="overflow-hidden">
            <Image
              src="/services2.png"
              alt="Cupula de mariposas"
              width={1920 / 4}
              height={1080 / 4}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
              priority
            />
          </div>
          <div className="overflow-hidden">
            <Image
              src="/services1.png"
              alt="Cupula de mariposas"
              width={1920 / 4}
              height={1080 / 4}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
              priority
            />
          </div>
          <div className="overflow-hidden">
            <Image
              src="/services3.png"
              alt="Cupula de mariposas"
              width={1920 / 4}
              height={1080 / 4}
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
