import getProduto from "@/actions/getProduto";
import ImageCarousel from "./ImageCarousel";

import React from "react";
import Link from "next/link";
import linkHelper from "@/components/linkHelper";

async function IndividualProduto({ params }) {
  const produto = await getProduto(params.produtoId);
  return ( 
    <div className="IndividualProduto m-auto gap-8 flex flex-col lg:flex-row w-[90%] lg:w-[90%] xl:w-[80%]">
      {
        (produto.images.length === 1) ? 
        <div className="divImage full min-h-[95vh] images" style={{ backgroundImage: `url(${produto.images[0].url})`}}></div> :
        <ImageCarousel images={produto.images} />
      }
      <div>
        <h1 className="font-bold text-zinc-800 text-[26px] mb-4">{produto.nome}</h1>
        <pre className="whitespace-pre-wrap italic text-[14px] text-[#2a2a2a] font-medium tracking-[0.01em] leading-[26px] pr-[40px]">{produto.descricao}</pre>
        {produto.caracteristicas && <pre className="pt-6 whitespace-pre-wrap font-bold text-[20px] text-[#969494]">{produto.caracteristicas.split('|').map((seg, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span className="text-zinc-600">|</span>}
          {seg}
        </React.Fragment>
        ))}</pre>}
        <div className="flex items-center pt-8 gap-6 ">
          <p className="font-bold text-[22px] text-zinc-600">Comprar:</p>
          <Link className="botaoTransparente invertido" href={linkHelper(produto.nome, produto.categoria.nome)}>Eu quero!</Link>
        </div>
      </div>
    </div>
  );
}

export default IndividualProduto;