// Header.tsx (ou Navbar.tsx)
import React from "react";
import logo from "../assets/logo.svg"; // Seu logo da TRACTI
import bck from "../assets/bckgnd.png";
// Removido: import IdiomaToggle from "./IdiomaToggle";
// Removido: import { useTranslation } from '../translations';

const Header: React.FC = () => {
  // Removido: const t = useTranslation();

  return (
    <header
      className="relative w-full min-h-screen"
      style={{
        backgroundImage: `url(${bck})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay de fundo preto */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Navegação (Logo e Links) - Fixa no topo */}
      <div className="absolute inset-0 bg-black opacity-50 z-0 p-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <img src={logo} alt="Logo Tracti" className="h-10 md:h-12" />

          {/* Navegação (visível apenas em desktop) */}
          <nav className="hidden md:flex items-center space-x-4 md:space-x-6 text-white text-sm md:text-base font-semibold">
            <a href="#about" className="hover:text-blue-300 transition-colors">
              QUEM SOMOS
            </a>
            <a
              href="#service"
              className="hover:text-blue-300 transition-colors"
            >
              SERVIÇOS
            </a>
            <a
              href="#contacto"
              className="hover:text-blue-300 transition-colors"
            >
              CONTACTO
            </a>
            <a href="#Sus" className="hover:text-blue-300 transition-colors">
              SUSTENTABILIDADE
            </a>
            <button className="border border-white px-3 py-1 md:px-4 md:py-1 rounded-md hover:bg-white hover:text-blue-600 transition-all duration-300">
              <a href="#contacto">ENTRE EM CONTACTO</a>
            </button>
            {/* Botão de idioma (temporariamente de volta como texto simples) */}
            <button className="hover:text-blue-300 transition-colors">
              PT/EN
            </button>
          </nav>
        </div>
      </div>

      {/* Conteúdo "EXTRACTING VALUE" */}
      <div className="absolute bottom-0 left-0 z-10 w-full flex flex-col justify-start items-start pb-[15vh] px-4 md:px-18 lg:px-124">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          EXTRACTING VALUE
        </h1>
        <p className="text-white text-base md:text-lg lg:text-xl max-w-xl">
          SOMOS ESPECIALISTAS EM TRANSFORMAR DESAFIOS COMPLEXOS EM OPORTUNIDADES
          DE CRESCIMENTO E INOVAÇÃO
        </p>
      </div>
    </header>
  );
};

export default Header;
