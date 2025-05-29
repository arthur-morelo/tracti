import React from "react";

const ContactSection: React.FC = () => {
  return (
    // Container principal da seção de contato
    // flex-col em mobile, md:flex-row em desktop.
    // min-h-screen para ocupar a altura total da viewport, se desejar que a seção seja grande.
    // p-8 para um padding geral na seção.
    <section
      className="flex flex-col md:flex-row min-h-screen bg-white items-center justify-center py-16 px-4 md:px-8"
      id="contacto"
    >
      {/* Coluna do Texto (Esquerda) */}
      {/* w-full em mobile, md:w-1/2 em desktop. */}
      {/* md:pr-12 para um espaçamento entre o texto e o formulário em desktop. */}
      <div className="flex flex-col w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0 md:pr-12">
        {/* Título "CONTATO" */}
        <h3 className="text-sm md:text-base font-bold uppercase text-blue-600 mb-2">
          CONTATO
        </h3>
        {/* Título Principal */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          COMEÇE HOJE A TRATAR <br className="hidden md:inline" /> DE SOLUÇÕES
          EFICIENTES
        </h2>
        {/* Parágrafo de descrição */}
        <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-md md:max-w-none mx-auto md:mx-0">
          Sua mensagem é importante para nós. Entre em contato e juntos, daremos
          início a transformação da sua empresa
        </p>
      </div>

      {/* Coluna do Formulário (Direita) */}
      {/* w-full em mobile, md:w-1/2 em desktop. */}
      {/* flex flex-col para empilhar os campos de input. */}
      <form
        action="https://submit-form.com/N9mLMAemn"
        className="flex flex-col w-full md:w-1/2 max-w-lg md:max-w-md lg:max-w-lg"
      >
        {/* Campo de Input - Nome */}
        <input
          name="name"
          type="text"
          placeholder="Nome"
          className="bg-gray-700 text-white p-4 rounded-md mb-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Campo de Input - Contato */}
        <input
          name="email"
          type="text" // Pode ser 'tel' ou 'email' dependendo do que "Contato" significa
          placeholder="Contato"
          className="bg-gray-700 text-white p-4 rounded-md mb-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Campo de Textarea - Breve descrição */}
        <textarea
          name="message"
          placeholder="Breve descrição"
          rows={6} // Ajuste o número de linhas para controlar a altura
          className="bg-gray-700 text-white p-4 rounded-md mb-6 placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        {/* Botão ENVIAR */}
        <button
          type="submit" // Importante para formulários
          className="bg-[#500203] text-white font-bold py-3 px-8 rounded-md self-end hover:bg-red-800 transition duration-300 cursor-pointer"
        >
          ENVIAR
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
