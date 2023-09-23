"use client"
import ProdutoLinha from "./ProdutoLinha";
import { useState } from "react";
import getProdutos from "@/actions/getProdutos";

function Linha({ categoria }) {
  const [currentIndexes, setCurrentIndexes] = useState([0, 1, 2]);
  console.log(currentIndexes)
  const items = [
    { color: "red" },
    { color: "blue" },
    { color: "green" },
    { color: "purple" },
    { color: "black" },
    { color: "yellow" },
  ];

  const handleNext = () => {
    setCurrentIndexes((prevIndexes) => {
      let aux = [];
      aux[0] = prevIndexes[1];
      aux[1] = prevIndexes[2];
      aux[2] = (prevIndexes[2] + 1) % items.length;
      return aux;
    });
  };

  const handlePrev = () => {
    setCurrentIndexes((prevIndexes) => {
      let aux = [];
      aux[2] = prevIndexes[1];
      aux[1] = prevIndexes[0];
      aux[0] = (prevIndexes[0] - 1 + items.length) % items.length;
      return aux;
    });
  };

  return (
    <section className="section linha px-20">
      <h3>{categoria.nome}</h3>
      <p>{categoria.descricao}</p>

      <div className="carousel-container">
        <div className="flex gap-3">
          {items.map((item, index) => (
            <div key={index}
              className={`carousel-item carousel-slide ${
                currentIndexes[0] === index ? "active order-1" : ""
              } ${ currentIndexes[1] === index ? "active order-2" : ""
              } ${ currentIndexes[2] === index ? "active order-3" : "" } 
              ${((currentIndexes[0] - 1 + items.length) % items.length) === index ? "prev" : ""} ${
                  (currentIndexes[2] + 1) % items.length === index ? "next" : ""
              }`}
              style={{ backgroundColor: item.color }}
            ></div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button onClick={() => handlePrev()}>&lt; Prev</button>
        <button onClick={() => handleNext()}>Next &gt;</button>
      </div>
    </section>
  );
}

export default Linha;
