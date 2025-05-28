function Hero() {
  return (
    <div
      className="relative z-20 
                  -mt-32 md:-mt-48 lg:-mt-16 
                  bg-[#500203] text-white
                  w-full md:w-4/5 lg:w-3/5 xl:w-1/2 
                  mx-auto 
                  md:ml-[25%] 
                  p-6 md:p-8 lg:p-12 
                  max-w-screen-xl 
                  flex flex-col justify-center"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 uppercase">
        Nossa Filosofia
      </h1>
      <p className="text-sm md:text-base lg:text-lg leading-relaxed">
        Acreditamos que o verdadeiro valor está na capacidade de transformar
        ideias em realidade. Guiados pela excelência e pela inovação,
        trabalhamos lado a lado com os nossos clientes para superar desafios,
        criar oportunidades e promover um impacto positivo nas comunidades onde
        actuamos. A nossa abordagem é baseada na colaboração, na transparência e
        num compromisso inabalável com a sustentabilidade.
      </p>
    </div>
  );
}

export default Hero;
