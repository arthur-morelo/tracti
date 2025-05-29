import React, { useState } from "react";
import seta from "../assets/Sbms.svg";

interface SbmsProps {
  href: string;
  text?: string;
  isRotatedInitially?: boolean;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const Sbms: React.FC<SbmsProps> = ({
  href,
  text = "SAIBA MAIS", // Mantém o texto padrão aqui ou poderia vir do t() se fosse fixo
  isRotatedInitially = false,
  onClick,
}) => {
  const [isRotated, setIsRotated] = useState(isRotatedInitially);

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    setIsRotated((prev) => !prev);
    if (onClick) {
      onClick(event);
    }
  };

  const rotationClass = isRotated ? "rotate-180" : "rotate-0";

  const arrowSvgContent = (
    <img
      src={seta}
      alt="Seta"
      className="ml-2 w-6 h-6 transition-transform duration-300 ease-in-out"
    />
  );

  return (
    <a
      href={href}
      className="inline-flex items-center text-white font-semibold text-lg hover:underline transition-colors"
      onClick={handleClick}
    >
      {text}
      {React.cloneElement(arrowSvgContent, {
        className: `${arrowSvgContent.props.className} ${rotationClass}`,
      })}
    </a>
  );
};

export default Sbms;
