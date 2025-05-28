import logo from "../assets/logo.svg"; // Seu logo da TRACTI
import bck from "../assets/bckfooter.jpg"; // Imagem dos guindastes para o fundo
import img from "../assets/imgfooter.svg";

function Footer() {
  return (
    <footer className="relative bg-[#500203] text-white py-16 px-4 md:px-8 lg:px-16 min-h-[400px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 z-0"
        style={{ backgroundImage: `url(${bck})` }}
      >
        <img
          src={img}
          alt=""
          className="absolute w-screen h-screen z-0 items-center object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        <div className="flex flex-col justify-center-safe  items-center md:items-start text-center md:text-left">
          <img
            src={logo}
            alt="Logo Tracti"
            className="w-full h-full object-contain max-w-[80%]"
          />
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="font-bold text-lg mb-4 uppercase">EXPLORE</h1>{" "}
          <nav className="flex flex-col space-y-2">
            <a
              href="#about"
              className="text-base hover:underline transition-colors"
            >
              QUEM SOMOS
            </a>
            <a
              href="#service"
              className="text-base hover:underline transition-colors"
            >
              SERVIÇOS
            </a>
            <a
              href="#contacto"
              className="text-base hover:underline transition-colors"
            >
              CONTACTO
            </a>
            <a
              href="#Sus"
              className="text-base hover:underline transition-colors"
            >
              SUSTENTABILIDADE
            </a>
          </nav>
          <button className="mt-6 border border-white px-4 py-2 rounded-md text-sm hover:bg-white hover:text-[#500203] transition-all duration-300">
            ENTRE EM CONTACTO
          </button>
        </div>

        {/* Coluna 3: CONTACTOS */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="font-bold text-lg mb-4 uppercase">CONTACTOS</h1>{" "}
          {/* Título */}
          <div className="flex flex-col space-y-2 text-base">
            {" "}
            {/* space-y-2 para espaçamento entre itens */}
            <h2 className="break-all">M.FERREIRA@TRACTI.CO</h2>{" "}
            {/* break-all para quebras de linha em emails longos */}
            <h2>244 999 999 999</h2>
            <h2>ENDEREÇO XXXXXXXXXX LUANDA</h2>
          </div>
        </div>
      </div>
      {/* Removido o <img src={bck} alt="" className="" /> extra aqui, pois a imagem já é o background do footer */}
    </footer>
  );
}

export default Footer;
