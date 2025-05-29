import { useState } from "react";
import srvgd from "../assets/srvgd.jpg";
import bck from "../assets/bgservice.jpg";
import Sbms from "./Sbms";
import img from "../assets/imgsrvc.jpg";
import Entre from "./entctt"; // Importando o componente Entre (que você chamou de Arrow antes)

// Removida a prop 'isDownload' dos objetos de serviço
const serviceItemsData = [
  {
    id: "engproj",
    title: "ENGENHARIA E GESTÃO DE PROJETOS",
    description: [
      "Projetos EPCI (Engenharia, Procura, Construção e Instalação);",
      "Serviços de engenharia para infraestruturas energéticas;",
      "Inspeções técnicas com drones e tecnologias avançadas;",
    ],
    imageToShow: img,
    additionalContentComponent: <Entre isWhite={true} />, // Passando a prop isWhite
  },
  {
    id: "suportemar",
    title: "SERVIÇOS INTEGRADOS DE SUPORTE MARÍTIMO",
    description: [
      "Fornecemos barcaças de acomodação offshore;",
      "AHTS; Sufers; PSVs; Cargo Barges, movimento de passageiros offshore;",
    ],
    imageToShow: null, // Definir como null para serviços sem imagem
    additionalContentComponent: null, // Definir como null para serviços sem componente
  },
  {
    id: "sustentabilidade",
    title: "SUSTENTABILIDADE E EFICIÊNCIA OPERACIONAL",
    description: [
      "Implementação de práticas sustentáveis e tecnologias inovadoras;",
      "Redução de emissões de carbono e impacto ambiental;",
      "Gestão de proteção catódica e revestimentos",
    ],
    imageToShow: null,
    additionalContentComponent: null,
  },
  {
    id: "consultoria",
    title: "CONSULTORIA ESTRATÉGICA",
    description: [
      "Análises de mercado e identificação de oportunidades;",
      "Desenvolvimento de planos estratégicos personalizados;",
      "Consultoria em tecnologia e inovação;",
    ],
    imageToShow: null,
    additionalContentComponent: null,
  },
  {
    id: "construcao",
    title:
      "SERVIÇOS INTEGRADOS DE CONSTRUÇÃO, INSTALAÇÃO, MANUTENÇÃO E REPARAÇÃO",
    description: [
      "Serviços de revestimento e pintura - onshore e offshore;",
      "Serviços de limpeza de tanques;",
      "Serviços de Fabricação metalomecânica - onshore e offshore.",
    ],
    imageToShow: null,
    additionalContentComponent: null,
  },
  {
    id: "suportemarinho",
    title: "SERVIÇOS INTEGRADOS DE SUPORTE MARINHO",
    description: [
      "Fornecemos suporte especializado para operações marítimas costeiras;",
      "Serviços de dragagem e batimetria;",
      "Manutenção de infraestruturas portuárias.",
    ],
    imageToShow: null,
    additionalContentComponent: null,
  },
];

function Service() {
  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(
    null
  );

  const handleToggleExpand = (id: string) => {
    setExpandedServiceId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div
      className="relative w-full min-h-screen py-16 px-4 md:px-8 lg:px-16 pt-[100px]"
      id="service"
    >
      {/* Background Azul com Imagem sutil */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bck})` }}
      >
        <div className="absolute inset-0 bg-[#092337] opacity-80"></div>
      </div>

      {/* Conteúdo da Seção de Serviços (acima do background azul) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        {/* Imagem srvgd.jpg: No topo, centralizada e maior */}
        <div className="w-full flex justify-center mb-12">
          <img
            src={srvgd}
            alt="Trabalhadores em uma construção"
            className="w-full max-w-5xl h-auto object-cover rounded-lg shadow-xl"
          />
        </div>

        {/* Bloco de Texto Introdutório (Alinhado à direita) */}
        <div className="w-full flex justify-start">
          <div className="w-full text-center md:text-left">
            <h3 className="text-[#43BAFF] text-sm md:text-3xl uppercase font-bold mb-2">
              SERVIÇOS
            </h3>
            <p className="text-white text-3xl md:text-5xl leading-relaxed">
              A Tracti é reconhecida pela sua capacidade de fornecer soluções
              personalizadas e de alto impacto para os desafios mais complexos
              dos mais diversos sectores
            </p>
          </div>
        </div>

        {/* Grid de Detalhes dos Serviços (Cartões) */}
        <div className="grid grid-cols-1 gap-8 text-white w-full">
          {serviceItemsData.map((service, index) => (
            <div
              key={service.id}
              className={`bg-transparent p-6 flex flex-col justify-start
                          border-b border-white pb-6
                          ${index > 0 ? "pt-6" : ""}
                          `}
            >
              {/* Título do Serviço */}
              <h4 className="text-xl font-bold mb-4 uppercase">
                {service.title}
              </h4>

              {/* Conteúdo Expandido (Descrição, Imagem e Componente Adicional) */}
              {expandedServiceId === service.id && (
                <div
                  className={`mt-4 w-full ${
                    index === 0 ? "md:flex items-start gap-4" : ""
                  }`}
                >
                  {/* Container para a IMAGEM (para o primeiro item, aparecerá à esquerda em telas médias e maiores) */}
                  {service.imageToShow && index === 0 && (
                    <div className="w-full md:w-1/3 md:max-w-[350px] mb-4 md:mb-0">
                      <img
                        src={service.imageToShow}
                        alt={`Detalhes de ${service.title}`}
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                      />
                    </div>
                  )}

                  {/* Container para o TEXTO da descrição e o COMPONENTE ADICIONAL */}
                  <div className="w-full md:w-2/3">
                    <ul className="list-none space-y-2 text-base mb-6">
                      {service.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    {/* Renderizar o componente adicional ABAIXO do texto */}
                    {service.additionalContentComponent && index === 0 && (
                      <div className="mt-4">
                        {service.additionalContentComponent}
                      </div>
                    )}
                  </div>

                  {/* Renderizar a IMAGEM para OUTROS SERVIÇOS (abaixo do texto, centralizada) */}
                  {service.imageToShow && index > 0 && (
                    <img
                      src={service.imageToShow}
                      alt={`Detalhes de ${service.title}`}
                      className="w-full h-auto object-cover rounded-lg shadow-md mt-4
                                     max-w-[250px] mx-auto md:max-w-[300px] lg:max-w-[350px]"
                    />
                  )}
                </div>
              )}

              {/* Componente Sbms para expandir/colapsar */}
              <Sbms
                href={`#${service.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleToggleExpand(service.id);
                }}
                isRotatedInitially={expandedServiceId === service.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
