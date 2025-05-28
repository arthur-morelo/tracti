import React, { useState } from "react";
// O import 'seta' agora é apenas para referência, pois o SVG será inline.
// Se você não o usa para nada, pode até removê-lo para evitar confusão.
import seta from "../assets/Sbms.svg";

interface SbmsProps {
  href: string;
  text?: string;
  // showDownloadIcon NÃO será mais uma prop, pois não haverá ícone de download
  isRotatedInitially?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Sbms: React.FC<SbmsProps> = ({
  href,
  text = "SAIBA MAIS",
  // showDownloadIcon não é mais desestruturado
  isRotatedInitially = false,
  onClick,
}) => {
  const [isRotated, setIsRotated] = useState(isRotatedInitially);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // A rotação SEMPRE ocorrerá ao clicar, pois não há mais ícone de download para verificar
    setIsRotated((prev) => !prev);
    if (onClick) {
      onClick(event);
    }
  };

  const rotationClass = isRotated ? "rotate-180" : "rotate-0";

  // Conteúdo DO SEU SVG (Sbms.svg) COLADO AQUI DIRETAMENTE
  // Esta é a maneira mais robusta de garantir que o SVG apareça e seja animável sem problemas de importação
  const arrowSvgContent = // Renomeado para 'arrowSvgContent' para clareza
    <img src={seta} alt="" />;

  return (
    <a
      href={href}
      className="inline-flex items-center text-white font-semibold text-lg hover:underline transition-colors" // Cor do texto azul-300 aqui
      onClick={handleClick}
    >
      {text}
      {/* Renderiza APENAS a seta, sem nenhuma condição para download */}
      {/* Usando React.cloneElement para aplicar classes no SVG inline */}
      {React.cloneElement(arrowSvgContent, {
        className: `ml-2 w-6 h-6 transition-transform duration-300 ease-in-out ${rotationClass}`,
        // O fill="currentColor" já está no SVG content, então não precisa aqui
      })}
    </a>
  );
};

export default Sbms;
