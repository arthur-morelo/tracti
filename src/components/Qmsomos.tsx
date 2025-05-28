import img2 from "../assets/imgdir.jpg";
import Arrow from "./entctt";

function Qmsomos() {
  return (
    // Container principal: em mobile flex-col, em md (desktop) flex-row
    // min-h-screen para ocupar a altura total da viewport
    <div className="flex flex-col md:flex-row min-h-screen bg-[#F3F3F3] relative overflow-hidden">
      {" "}
      {/* Adicionei bg-white e relative overflow-hidden para o container principal */}
      {/* Seção de Texto: em mobile ocupa toda a largura (w-full), em md 2/5 */}
      {/* Ajustei o padding e alinhamento do texto para melhor leitura e responsividade */}
      <div className="flex flex-col w-full md:w-2/5 p-4 md:p-12 justify-center order-2 md:order-1">
        {" "}
        {/* order-2/order-1 para a ordem em mobile/desktop */}
        {/* Ajustei os tamanhos de texto para serem responsivos */}
        <h3 className="text-xl md:text-3xl font-extralight text-blue-300 mb-2 uppercase">
          quem somos
        </h3>{" "}
        {/* Usei h3 para semântica */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
          Diversificação e Visão Estratégica
        </h2>{" "}
        {/* Usei h2 e adicionei cor */}
        <p className="text-base md:text-xl text-gray-700 leading-relaxed mb-8">
          {" "}
          {/* Ajustei o tamanho da fonte e cor */}
          Além do sector de energia, actuamos em áreas como tecnologia,
          logística e infraestruturas, sempre com o objectivo de oferecer
          soluções que gerem valor a longo prazo. A nossa presença em Angola
          reflecte não apenas a nossa capacidade de adaptação, mas também o
          nosso compromisso com o desenvolvimento económico e social da região.
        </p>
        <Arrow />
      </div>
      {/* Seção da Imagem e do Fundo Vermelho */}
      {/* Em mobile, ocupa toda a largura; em md, 3/5. order-1/order-2 para a ordem */}
      <div className="relative flex flex-col w-full md:w-3/5 items-center justify-center p-4 md:p-8 order-1 md:order-2">
        {" "}
        {/* Adicionei relative ao container da imagem para posicionamento dos filhos */}
        {/* Imagem: Agora com w-full (do seu container) e max-w-sm em mobile, e ajustada em md. */}
        {/* Adicionei rounded-lg e shadow-lg para um visual mais polido. */}
        <img
          src={img2}
          alt="Pessoa trabalhando em um notebook" // Adicionei um alt significativo
          className="relative z-10 left-1/10 w-full max-w-sm md:max-w-full md:w-4/5 h-auto object-cover shadow-lg"
          // O object-cover garante que a imagem não distorça e preencha o espaço
        />
        {/* Caixa Vermelha (Background): */}
        {/* absolute: Posicionada em relação ao seu pai (o div da imagem). */}
        {/* Ajustei top, right, e as larguras/alturas para que apareça atrás da imagem e seja responsiva. */}
        {/* Transform scale-x para dar um "recorte" visual. */}
        {/* z-0: Para que fique atrás da imagem. */}
        <div
          className="max-w-screen absolute bg-[#500203] z-0
                      w-full h-1/4 md:w-full md:h-10/12
                      top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                      md:top-1/2 md:right-0 md:left-auto md:translate-x-1/4 md:-translate-y-1/2"
        >
          {/* As classes rounded-tr e rounded-bl tentam simular um corte, mas a forma da imagem é complexa */}
          {/* Você pode ajustar os valores [] para um controle mais fino. */}
        </div>
      </div>
    </div>
  );
}

export default Qmsomos;
