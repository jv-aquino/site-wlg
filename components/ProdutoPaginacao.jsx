"use client"

import { useState, useEffect } from "react";
import ProdutoCard from "./ProdutoCard";

function ProdutoPaginacao({ produtos }) {
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedProdutos = produtos.slice(startIndex, endIndex);

  const totalPages = Math.ceil(produtos.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div className="mx-auto grid grid-cols-1 lg:gap-10 lg:grid-cols-3">
        {paginatedProdutos.map((produto, index) => (
          <div key={index}>
            <ProdutoCard produto={produto} self textSize={"22"}>
              <p className="botaoTransparente invertido">Saiba Mais</p>
            </ProdutoCard>
          </div>
        ))}
      </div>

      <div className="pagination pt-8 pb-1 flex gap-3">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={"border border-zinc-800 w-[45px] h-[45px] text-lg " + ((currentPage === index + 1) ? "bg-zinc-800 text-white" : "hover:bg-zinc-800 hover:text-white")}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </>
  );
}

export default ProdutoPaginacao;
