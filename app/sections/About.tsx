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
                Soy Flor, florista de corazón y creadora de decoraciones
                florales desde hace más de 6 años. Mi camino en este mundo
                empezó con una pasión simple: transformar momentos importantes
                en recuerdos llenos de color, aroma y emoción. Además de
                emprendedora, soy mamá, y este trabajo me regaló algo
                invaluable: la posibilidad de crecer profesionalmente sin dejar
                de estar presente en lo más importante de mi vida. Ser florista
                me permite crear, organizar mis tiempos y poner amor en cada
                detalle, tanto en mi familia como en cada evento que acompaño.
                Cada arreglo, cada centro de mesa y cada ambientación está
                pensada con dedicación, sensibilidad y compromiso. Creo
                profundamente que las flores hablan, y mi trabajo es ayudarlas a
                contar historias únicas, auténticas y llenas de vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
