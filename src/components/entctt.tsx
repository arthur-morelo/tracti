import arrow from "../assets/Arrow.svg";

// Definindo a interface para as props
interface EntreProps {
  isWhite?: boolean; // Prop opcional para indicar se a cor deve ser branca
}

function Entre({ isWhite = false }: EntreProps) {
  // Definindo um valor padrão para isWhite
  const textColorClass = isWhite ? "text-white" : "text-[#500203]";

  // Para mudar a cor de um SVG inline ou usando filtro CSS
  // A abordagem com filtro é mais flexível para SVGs importados
  const arrowFilterStyle = isWhite
    ? {
        filter:
          "invert(100%) sepia(100%) saturate(0%) hue-rotate(0deg) brightness(200%) contrast(100%)",
      }
    : {}; // Remove o filtro se não for branco

  return (
    <div className="">
      <a
        href="#contacto"
        className={`text-2xl flex items-center p-2 ${textColorClass}`}
      >
        entre em contacto
        <img
          src={arrow}
          alt="Seta"
          className="ml-2 w-10 h-10"
          style={arrowFilterStyle} // Aplicando o estilo do filtro
        />
      </a>
    </div>
  );
}

export default Entre;
