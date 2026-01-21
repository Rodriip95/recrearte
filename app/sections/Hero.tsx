const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center overflow-hidden mt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/40 to-emerald-700/30 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/recrefondo.png')",
        }}
      ></div>

      <div className="relative z-20 text-center px-4 max-w-4xl">
        <p className="text-amber-100 text-sm tracking-[0.3em] mb-4 uppercase">
          Hecho a mano con amor
        </p>
        <h1 className="font-main text-5xl md:text-7xl text-white mb-6 leading-tight">
          RECREARTE
          <br />
          <span className="italic font-serif">siempre flores</span>
        </h1>
        <p className="text-stone-100 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed font-main">
          Creemos en la magia de los detalles y en el poder de las flores. Por
          eso transformamos tu día en una experiencia inolvidable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-white text-emerald-900 hover:bg-stone-100 transition text-sm tracking-wide">
            EXPLORAR GALERÍA
          </button>
          <button className="px-8 py-3 border-2 border-white text-white hover:bg-white/10 transition text-sm tracking-wide">
            NUESTRA FILOSOFÍA
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
