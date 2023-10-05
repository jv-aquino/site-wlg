import Link from "next/link";

export const metadata = {
  title: 'Produtos da Traty Vet - WLG',
}

function ProdutosPage() {
  const images = ['https://res.cloudinary.com/dq0frc1aq/image/upload/v1695945265/njtaebgkd3vqnpszm6pl.jpg', 'https://res.cloudinary.com/dq0frc1aq/image/upload/v1695987651/njgw4dompooqy3k1cfym.jpg'];

  return ( 
    <>
    <div className="w-full h-[120px] relative top-[-45px] bg-[#45b8a9]"></div>

      <h1 className="font-bold text-zinc-800 text-[35px] text-center mb-8">Produtos Traty Vet</h1>

      <div className="mx-auto w-[85%] sm:w-[75%] lg:w-[80%] mb-8 gap-x-16 gap-y-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        <div>
          <div className="EmpresaCard flex divImage full relative min-h-[60vw] sm:min-h-[55vw] lg:min-h-[26vw]" style={{ backgroundImage: `url(${images[0]})`}}>
            <div className="absolute inset-0 w-full h-full flex-1 text-white text-center px-3
              flex flex-col gap-3.5 items-center justify-center">
                <Link className="text-2xl botaoTransparente" href={'/produtos/linhatratyvet'}>
                  Clique Aqui
                </Link>
            </div>
          </div>
          <h2 className="text-[24px] font-bold text-zinc-800 mt-8 tracking-wide">Linha Traty Vet</h2>
        </div>
        <div>
          <div className="EmpresaCard flex divImage full relative min-h-[60vw] sm:min-h-[55vw] lg:min-h-[26vw]" style={{ backgroundImage: `url(${images[1]})`}}>
            <div className="absolute inset-0 w-full h-full flex-1 text-white text-center px-3
              flex flex-col gap-3.5 items-center justify-center">
                <Link className="text-2xl botaoTransparente" href={'/produtos/coloniastratyvet'}>
                  Clique Aqui
                </Link>
            </div>
          </div>
          <h2 className="text-[24px] font-bold text-zinc-800 mt-8 tracking-wide">Colônias Traty Vet</h2>
        </div>
      </div>
    </>
   );
}

export default ProdutosPage;