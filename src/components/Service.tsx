// src/components/Service.tsx
import { useState } from "react";
import { useTranslation } from "react-i18next"; // Importe useTranslation
import srvgd from "../assets/srvgd.jpg";
import bck from "../assets/bgservice.jpg";
import Sbms from "./Sbms";
import img from "../assets/imgsrvc.jpg";
import Entre from "./entctt";

function Service() {
  const { t } = useTranslation(); // Use o hook useTranslation

  const [expandedServiceId, setExpandedServiceId] = useState<string | null>(
    null
  );

  const handleToggleExpand = (id: string) => {
    setExpandedServiceId((prevId) => (prevId === id ? null : id));
  };

  // Os dados do serviço agora dependem da função t()
  const serviceItemsData = [
    {
      id: "engproj",
      title: t("service_eng_proj_title"),
      description: [
        t("service_eng_proj_desc1"),
        t("service_eng_proj_desc2"),
        t("service_eng_proj_desc3"),
      ],
      imageToShow: img,
      additionalContentComponent: <Entre isWhite={true} />,
    },
    {
      id: "suportemar",
      title: t("service_suporte_mar_title"),
      description: [
        t("service_suporte_mar_desc1"),
        t("service_suporte_mar_desc2"),
      ],
      imageToShow: null,
      additionalContentComponent: null,
    },
    {
      id: "sustentabilidade_service", // Renomeei para evitar conflito com id='sustentabilidade' da seção principal
      title: t("service_sustentabilidade_title"),
      description: [
        t("service_sustentabilidade_desc1"),
        t("service_sustentabilidade_desc2"),
        t("service_sustentabilidade_desc3"),
      ],
      imageToShow: null,
      additionalContentComponent: null,
    },
    {
      id: "consultoria",
      title: t("service_consultoria_title"),
      description: [
        t("service_consultoria_desc1"),
        t("service_consultoria_desc2"),
        t("service_consultoria_desc3"),
      ],
      imageToShow: null,
      additionalContentComponent: null,
    },
    {
      id: "construcao",
      title: t("service_construcao_title"),
      description: [
        t("service_construcao_desc1"),
        t("service_construcao_desc2"),
        t("service_construcao_desc3"),
      ],
      imageToShow: null,
      additionalContentComponent: null,
    },
    {
      id: "suportemarinho",
      title: t("service_suporte_marinho_title"),
      description: [
        t("service_suporte_marinho_desc1"),
        t("service_suporte_marinho_desc2"),
        t("service_suporte_marinho_desc3"),
      ],
      imageToShow: null,
      additionalContentComponent: null,
    },
  ];

  return (
    <div
      className="relative w-full min-h-screen py-16 px-4 md:px-8 lg:px-16 pt-[100px]"
      id="service"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bck})` }}
      >
        <div className="absolute inset-0 bg-[#092337] opacity-80"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full flex justify-center mb-12">
          <img
            src={srvgd}
            alt="Trabalhadores em uma construção"
            className="w-full max-w-5xl h-auto object-cover rounded-lg shadow-xl"
          />
        </div>

        <div className="w-full flex justify-start">
          <div className="w-full text-center md:text-left">
            <h3 className="text-[#43BAFF] text-sm md:text-3xl uppercase font-bold mb-2">
              {t("services_subtitle")}
            </h3>
            <p className="text-white text-3xl md:text-5xl leading-relaxed">
              {t("services_description")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 text-white w-full">
          {serviceItemsData.map((service, index) => (
            <div
              key={service.id}
              className={`bg-transparent p-6 flex flex-col justify-start
                          border-b border-white pb-6
                          ${index > 0 ? "pt-6" : ""}
                          `}
            >
              <h4 className="text-xl font-bold mb-4 uppercase">
                {service.title}
              </h4>

              {expandedServiceId === service.id && (
                <div
                  className={`mt-4 w-full ${
                    index === 0 ? "md:flex items-start gap-4" : ""
                  }`}
                >
                  {service.imageToShow && index === 0 && (
                    <div className="w-full md:w-1/3 md:max-w-[350px] mb-4 md:mb-0">
                      <img
                        src={service.imageToShow}
                        alt={`Detalhes de ${service.title}`}
                        className="w-full h-auto object-cover rounded-lg shadow-md"
                      />
                    </div>
                  )}

                  <div className="w-full md:w-2/3">
                    <ul className="list-none space-y-2 text-base mb-6">
                      {service.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    {service.additionalContentComponent && index === 0 && (
                      <div className="mt-4">
                        {service.additionalContentComponent}
                      </div>
                    )}
                  </div>

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
