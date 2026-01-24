import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="about-section px-4">
        <div className="md:max-w-3xl lg:max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-emerald-700 text-sm tracking-[0.3em] mb-3 uppercase">
            Conócenos
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
            Sobre Nosotros
          </h2>
          <br />
          <div className="border border-stone-200 overflow-hidden rounded-lg shadow-lg bg-white grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/hero.png"
                alt="About Flowers"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-6 md:p-10">  
              <p className="text-stone-400 text-md md:text-lg max-w-4xl mx-auto leading-relaxed font-main">
                  Estas son algunas de nuestras creaciones, totalmente personalizadas
                  al gusto de cada cliente. Cada pieza es única, creada con dedicación
                  y pasión para capturar la esencia de la naturaleza en su forma más
                  hermosa.
              </p>
            </div>
          </div>
        </div>
        </div>
    </section>
  );
}

export default About;