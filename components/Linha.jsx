"use client"

import { useState, useEffect } from "react";
import ProdutoCard from "./ProdutoCard";

function Linha({ categoria, produtos }) {
  const [currentProdutos, setCurrentProdutos] = useState([0, 1, 2]);
  const [mobile, setMobile] = useState(false);

  const handleChange = () => {
    if (window.screen.width < 1024) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    handleChange();
    window.addEventListener('resize', handleChange);
    return () => {
      window.removeEventListener('resize', handleChange);
    };
  }, []);

  const nextItem = (carouselProdutos) => {
    setCurrentProdutos(prev => {
      if (prev[carouselProdutos - 1] + 1 >= ((mobile) ? produtos.length + 2 : produtos.length)) { return prev }
      return ([prev[1], prev[2], prev[2] + 1]);
    })
  }
  const prevItem = () => {
    setCurrentProdutos(prev => {
      if (prev[0] - 1 <= -1) { return prev }
      return ([prev[0] - 1, prev[0], prev[1]]);
    })
  }


  return (
    <section className="linha borderDot py-16">
      <div className="pl-10 sm:pl-24 lg:pl-48 pb-10">
        <h2 className="font-bold text-zinc-900 text-4xl">{categoria?.nome}</h2>
        <p className="text-neutral-400 text-[15px] italic pt-1 font-normal">{categoria?.descricao}</p>
      </div>

      <div className="carouselContainer">
        <div className="carousel">
          <div className="flex gap-[40px]"
          style={{ transform: `translateX(calc(-${currentProdutos[0] * (mobile ? 100 : 33.333)}% - ${currentProdutos[0] * 13}px))` }}>
            {produtos.map((prod, i) => {
              return (
                <ProdutoCard key={i} produto={prod} link={'/produtos/' + prod.categoria.nome.replace(/ /g, '').replace(/ô/g, 'o').toLowerCase()}>
                  <p className="bg-white text-black px-[16px] py-3.5"><span className="symbol">visibility</span></p>
                </ProdutoCard>
              )
            })}
          </div>
        </div>
          <button type="button" onClick={() => prevItem()}  className={"left-[4%] lg:left-[6%] " + ((currentProdutos[0] === 0) ? 'inactive' : '')}>&lt;</button>
          <button type="button" onClick={() => nextItem(3)} className={"right-[4%] lg:right-[6%] " + ((currentProdutos[2] === ((!mobile) ? produtos.length - 1 : produtos.length + 1)) ? 'inactive' : '')}>&gt;</button>
      </div>
    </section>
  );
}

export default Linha;
