import React from "react";
import '../../app.css';

const Sobre = () => {
  return (
    <div className="sobre-container">
      <div className="card-container">
        {/* Imagem da empresa */}
        <div className="image-container">
          <img
            src="/src/assets/logo.svg"
            alt="Logo da empresa"
            className="logo-image"
          />
        </div>

        {/* Título da página */}
        <h2 className="titulo-sobre">
          Sobre a nossa Empresa
        </h2>

        {/* Descrição sobre a empresa */}
        <p className="descricao">
          Somos uma petshop apaixonada por animais, oferecendo os melhores
          produtos e serviços para seus pets. Nosso objetivo é garantir a
          felicidade e o bem-estar dos seus amigos de quatro patas.
        </p>

        {/* Missão */}
        <div className="missao-container">
          <h3 className="subtitulo">Missão</h3>
          <p className="texto-missao">
            Oferecer produtos de qualidade e serviços personalizados, criando
            experiências inesquecíveis para os animais e seus tutores.
          </p>
        </div>

        {/* Visão */}
        <div className="visao-container">
          <h3 className="subtitulo">Visão</h3>
          <p className="texto-visao">
            Ser referência no mercado de petshops, reconhecida pelo cuidado,
            inovação e compromisso com o bem-estar dos animais.
          </p>
        </div>

        {/* Botão de contato */}
        <div className="button-container">
          <button className="custom-button">Fale Conosco</button>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
