import Link from "next/link";

function ProdutoCard({ produto, self, link, children, textSize, redirectImage }) {
  return ( 
    <div>
      <div className="ProdutoCard divImage full relative min-h-[70vw] lg:min-h-[24vw]" style={{ backgroundImage: `url(${produto.images[0]?.url})`}} onClick={() => {
        if (redirectImage) {
          window.location.assign((self) ? ('/produtos/' + produto.id) : link);
        }
      }}>
        <Link className="text-2xl" href={(self) ? ('/produtos/' + produto.id) : link}>
          {children}
        </Link>
      </div>
      <p className={"font-bold text-zinc-800 mt-8 tracking-wide leading-[1.3]"} style={{ fontSize: (textSize) ? `${textSize}px` : "24px"}}>{produto.nome}</p>
    </div>
   );
}

export default ProdutoCard;