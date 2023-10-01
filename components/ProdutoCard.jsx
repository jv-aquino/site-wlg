import Link from "next/link";

function ProdutoCard({ produto, self, link, children }) {
  return ( 
    <div>
      <div className="ProdutoCard divImage full relative min-h-[70vw] lg:min-h-[24vw]" style={{ backgroundImage: `url(${produto.images[0]?.url})`}}>
        <Link className="text-2xl" href={(self) ? ('/produtos/' + produto.id) : link}>
          {children}
        </Link>
      </div>
      <p className="text-[24px] font-bold text-zinc-800 mt-8 tracking-wide">{produto.nome}</p>
    </div>
   );
}

export default ProdutoCard;