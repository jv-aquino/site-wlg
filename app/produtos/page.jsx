import Link from "next/link";
import getCategorias from "@/actions/getCategorias";

export const metadata = {
  title: 'Produtos da Traty Vet, Propetz, Minag e KBSPK!',
}

async function ProdutosPage() {
  const categorias = await getCategorias();
  const images = ['https://res.cloudinary.com/dq0frc1aq/image/upload/v1695945265/njtaebgkd3vqnpszm6pl.jpg', 'https://res.cloudinary.com/dq0frc1aq/image/upload/v1695987651/njgw4dompooqy3k1cfym.jpg', 'https://res.cloudinary.com/dq0frc1aq/image/upload/v1696002464/w2ojfvbrvdifeewstb4x.jpg', 'https://res.cloudinary.com/dq0frc1aq/image/upload/v1696122015/sagcdjenhnre12tgtgbp.jpg', 'https://res.cloudinary.com/dq0frc1aq/image/upload/v1696167628/bimikku6bhzsy3egbhnx.png']

  return ( 
    <>
      <h1 className="font-bold text-zinc-800 text-[35px] text-center mb-8">Nossos Produtos</h1>

      <div className="mx-auto w-[90%] startGap grid grid-cols-1 xl:grid-cols-3">
        {categorias.map((categoria, i) => {
          return (
            <div key={i}>
              <div className="EmpresaCard flex divImage full relative min-h-[70vw] lg:min-h-[24vw]" style={{ backgroundImage: `url(${images[i]})`}}>
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
    </>
   );
}

export default ProdutosPage;