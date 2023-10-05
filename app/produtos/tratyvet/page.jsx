import Link from "next/link";
import getCategorias from "@/actions/getCategorias";

export const metadata = {
  title: 'Produtos da Traty Vet - WLG',
}

async function ProdutosPage() {
  const categorias = await getCategorias();
  const images = ['https://res.cloudinary.com/dq0frc1aq/image/upload/v1695945265/njtaebgkd3vqnpszm6pl.jpg', 'https://res.cloudinary.com/dq0frc1aq/image/upload/v1695987651/njgw4dompooqy3k1cfym.jpg'];

  return ( 
    <>
    <div className="w-full h-[100px] relative top-[-45px] bg-[#0c1921]"></div>

      <h1 className="font-bold text-zinc-800 text-[35px] text-center mb-8">Nossos Produtos</h1>

      <div className="mx-auto w-[85%] sm:w-[75%] lg:w-[80%] mb-8 gap-x-16 gap-y-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
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
    </>
   );
}

export default ProdutosPage;