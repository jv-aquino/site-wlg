"use client"

import { useState } from "react";
import ProdutoCard from "./ProdutoCard";

function PesquisarProduto({ produtos }) {
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState([]);

  const handleQueryChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const resultadosDaPesquisa = produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(query.toLowerCase())
    );
    setResultados(resultadosDaPesquisa);
  };

  return (
    <>
      <form className="mx-auto w-[400px] pb-6 flex flex-col items-center justify-center" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="font-bold text-[33px] text-zinc-800 pb-4">Pesquisar Produto <span className="symbol translate-y-[2px]">search</span></h2>

        <label htmlFor="nome" className="font-medium text-zinc-800 text-[18px]">Nome do produto:</label>
        <input
          type="text" id="nome" className="border border-zinc-500 rounded-sm p-2"
          value={query}
          onChange={handleQueryChange}
          placeholder="Dry Fast"
        />

        <button className="botaoTransparente invertido mt-7">Pesquisar</button>
      </form>

      <div className="responsiveGrid">
        {resultados.map((produto, i) => (
          <ProdutoCard key={i} produto={produto} self textSize={"22"} redirectImage>
            <p className="bg-white text-black px-[16px] py-3.5"><span className="symbol">visibility</span></p>
          </ProdutoCard>
        ))}
      </div>
    </>
  );
}

export default PesquisarProduto;
