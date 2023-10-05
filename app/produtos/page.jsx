import Link from "next/link";
import getCategorias from "@/actions/getCategorias";
import getProdutos from "@/actions/getProdutos";

import PesquisarProduto from "@/components/PesquisarProduto";

export const metadata = {
  title: 'Produtos da Traty Vet, Propetz, Minag e KBSPK!',
}

async function ProdutosPage() {
  const categorias = await getCategorias();
  const images = ['https://res.cloudinary.com/dq0frc1aq/image/upload/v1695945265/njtaebgkd3vqnpszm6pl.jpg', 'https://res.cloudinary.com/dq0frc1aq/image/upload/v1695987651/njgw4dompooqy3k1cfym.jpg', 'https://res.cloudinary.com/dq0frc1aq/image/upload/v1696002464/w2ojfvbrvdifeewstb4x.jpg', 'https://res.cloudinary.com/dq0frc1aq/image/upload/v1696122015/sagcdjenhnre12tgtgbp.jpg', 'https://res.cloudinary.com/dq0frc1aq/image/upload/v1696167628/bimikku6bhzsy3egbhnx.png'];

  const produtos = await getProdutos();

  return ( 
    <>
    <div className="w-full h-[100px] relative top-[-45px] bg-[#0c1921]"></div>

      <h1 className="font-bold text-zinc-800 text-[35px] text-center mb-20">Nossos Produtos</h1>

      <div className="borderDot pb-14 responsiveGrid">
        {categorias.map((categoria, i) => {
          return (
            <div key={i}>
              <div className="EmpresaCard flex divImage full relative min-h-[60vw] sm:min-h-[55vw] lg:min-h-[26vw]" style={{ backgroundImage: `url(${images[i]})`}}>
                <div className="absolute inset-0 w-full h-full flex-1 text-white text-center px-3
                  flex flex-col gap-3.5 items-center justify-center">
                    <Link className="text-2xl botaoTransparente" href={'/produtos/' + categoria.empresa.nome.toLowerCase().replace(/ /g, '')}>
                      Clique Aqui
                    </Link>
                </div>
              </div>
              <h2 className="text-[24px] font-bold text-zinc-800 mt-8 tracking-wide">{categoria.nome}</h2>
            </div>
          )
        })}
      </div>
      
      <PesquisarProduto produtos={produtos} />
    </>
   );
}

export default ProdutosPage;