"use client"

import { useState } from "react";

function Linha({ categoria }) {
  const [currentItems, setCurrentItems] = useState([0, 1, 2]);
  
  const items = [
    { color: "red" },
    { color: "blue" },
    { color: "green" },
    { color: "purple" },
    { color: "black" },
    { color: "yellow" },
  ];

  const nextItem = (carouselItems) => {
    setCurrentItems(prev => {
      if (prev[carouselItems - 1] + 1 >= items.length) { return prev }
      return ([prev[1], prev[2], prev[2] + 1]);
    })
  }
  const prevItem = () => {
    setCurrentItems(prev => {
      if (prev[0] - 1 <= -1) { return prev }
      return ([prev[0] - 1, prev[0], prev[1]]);
    })
  }


  return (
    <section className="section linha borderDot">
      <h3 className="font-bold">{categoria?.nome}</h3>
      <p>{categoria?.descricao}</p>

      <div className="carousel relative overflow-hidden">
        <div className="flex gap-10"
        style={{ transform: `translateX(calc(-${currentItems[0] * 33.333}% - ${currentItems[0] * 40}px))` }}>
          {items.map((item, i) => {
            return (
              <div key={i} style={{ backgroundColor: item.color }} className="p-20"></div>
            )
          })}
        </div>
        <button type="button" onClick={() => prevItem()}  className={"left-0"}>&lt;</button>
        <button type="button" onClick={() => nextItem(3)} className={"right"}>&gt;</button>
      </div>
    </section>
  );
}

export default Linha;
