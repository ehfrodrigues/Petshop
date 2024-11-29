import React, { useState } from "react";
import "../../inicio.css"; // Certifique-se de que este caminho está correto para o arquivo CSS

const Inicio = () => {
  // Estado para manter qual cartão foi selecionado
  const [selectedCard, setSelectedCard] = useState(null);

  // Função para selecionar o cartão
  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="inicio-container">
      <div className="cards-container">
        {/* Card 1 */}
        <div
          className={`card ${selectedCard === "teste" ? "selected" : ""}`}
          onClick={() => handleCardClick("teste")}
        >
          <h3>Teste</h3>
        </div>

        {/* Card 2 */}
        <div
          className={`card ${selectedCard === "teste2" ? "selected" : ""}`}
          onClick={() => handleCardClick("teste2")}
        >
          <h3>Teste2</h3>
        </div>

        {/* Card 3 */}
        <div
          className={`card ${selectedCard === "teste3" ? "selected" : ""}`}
          onClick={() => handleCardClick("teste3")}
        >
          <h3>Teste3</h3>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
