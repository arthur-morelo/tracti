# MasterOcean Angola Landing Page

![image](https://github.com/user-attachments/assets/7cace352-efb8-4abd-8ae5-477673e26c29)


Este é um projeto de landing page construído com React, TypeScript e estilizado com Tailwind CSS. Ele apresenta um design moderno, responsivo e inclui funcionalidade de troca de idioma (Português/Inglês) com um modo de teste dedicado.

## 🚀 Funcionalidades

* **Design Responsivo:** O site é totalmente responsivo, adaptando-se a diferentes tamanhos de tela (desktop, tablet, mobile).
* **Navegação Suave:** Links de navegação com rolagem suave para as seções da página.
* **Troca de Idioma (Português/Inglês):** Permite que o usuário alterne entre os idiomas Português e Inglês, atualizando o conteúdo de várias seções da página.
* **Modo de Teste de Idioma:** Um botão específico para desenvolvedores ou testadores que, ao ser clicado, força o idioma para Inglês e registra uma mensagem no console, útil para depuração e testes rápidos.
* **Componentes Reutilizáveis:** Estrutura de componentes bem organizada para facilitar a manutenção e escalabilidade.
* **Formulário de Contato:** Uma seção de contato funcional para que os usuários possam enviar mensagens.

## 🛠️ Tecnologias Utilizadas

* **React:** Biblioteca JavaScript para construção de interfaces de usuário.
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática, melhorando a robustez e manutenibilidade do código.
* **Tailwind CSS:** Framework CSS utilitário para estilização rápida e responsiva.
* **Lucide React:** Biblioteca de ícones (utilizada para os ícones de menu no `Header`).

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local.

### Pré-requisitos

Certifique-se de ter o Node.js e o npm (ou Yarn) instalados em sua máquina.

* **Node.js**: [https://nodejs.org/](https://nodejs.org/)
* **npm**: Vem com o Node.js
* **Yarn**: [https://yarnpkg.com/](https://yarnpkg.com/)

### Instalação

1.  **Clone o repositório:**

    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    cd <nome-do-seu-repositorio>
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    # ou
    yarn install
    ```

### Rodando o Servidor de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm start
# ou
yarn start
```

O aplicativo estará disponível em `http://localhost:3000` (ou outra porta disponível).

## 📂 Estrutura do Projeto
.
├── public/
│   ├── index.html
│   └── ... (arquivos estáticos, logo, etc.)
├── src/
│   ├── assets/
│   │   ├── gifs/
│   │   │   ├── gif1.gif
│   │   │   ├── gif3.gif
│   │   │   └── gif4.gif
│   │   ├── Arrow.svg
│   │   ├── bckfooter.jpg
│   │   ├── bckgnd.png
│   │   ├── bgservice.jpg
│   │   ├── imgdir.jpg
│   │   ├── imgesq.jpg
│   │   ├── imgfooter.svg
│   │   ├── imgfndqm.svg
│   │   ├── imgsrvc.jpg
│   │   ├── logo.svg
│   │   ├── logo2.svg
│   │   ├── Sbms.svg
│   │   └── srvgd.jpg
│   ├── components/
│   │   ├── About.tsx
│   │   ├── BackgroundGif.tsx
│   │   ├── Card.tsx
│   │   ├── Commitment.tsx
│   │   ├── Contacto.tsx
│   │   ├── Contact.tsx
│   │   ├── entctt.tsx (anteriormente Arrow)
│   │   ├── Footer.tsx
│   │   ├── Gif1.tsx
│   │   ├── Growth.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Qmsomos.tsx
│   │   ├── Sbms.tsx
│   │   └── Sus.tsx
│   ├── contexts/
│   │   └── LanguageContext.tsx
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx (ou index.tsx)
├── tailwind.config.js
├── tsconfig.json
├── package.json
└── README.md

## 🌐 Troca de Idioma

O projeto utiliza um `Context API` simples para gerenciar o estado do idioma (`pt` para Português, `en` para Inglês).

* **`src/contexts/LanguageContext.tsx`**: Define o `LanguageContext` e o `LanguageProvider`. Ele exporta um hook `useLanguage` que permite a qualquer componente filho acessar o idioma atual e a função `toggleLanguage`.
* **`src/App.tsx`**: Envolve toda a árvore de componentes com o `LanguageProvider` para que todos os componentes tenham acesso ao contexto de idioma.
* **`src/components/Header.tsx`**: Contém dois botões de idioma:
    * Um botão "EN/PT" que alterna entre Português e Inglês normalmente.
    * Um botão "TESTE" que força o idioma para Inglês, útil para depuração e teste rápido de layouts em inglês.

## 📝 Contribuição

Contribuições são bem-vindas! Se você tiver sugestões, melhorias ou encontrar bugs, por favor, abra uma *issue* ou envie um *pull request*.

## 📄 Licença

Este projeto é de código aberto e está licenciado sob a [Nome da Licença, ex: MIT License].


