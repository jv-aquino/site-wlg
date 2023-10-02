import getCategorias from "@/actions/getCategorias";
import getProdutos from "@/actions/getProdutos";

import EmpresaCard from "@/components/EmpresaCard"
import Linha from "@/components/Linha"
import Link from "next/link";

export default async function Home() {
  const categorias = await getCategorias();
  const produtos = getProdutos({ isFeatured: true });

  return (
    <>
      <main className="lg:flex-row lg:flex justify-center pb-14 px-5 lg:min-h-[49vw] w-full startGap borderDot">
        <div className="cachorro flex flex-col flex-1 text-white justify-center items-start gap-2.5 
        pl-16 pr-[14px] w-[97%] aspect-square mx-auto lg:h-auto xl:pl-[105px]">
            <h1 className="font-bold text-[52px] pr-2 pt-12">Nós Somos WLG</h1>
            <p className="text-[25px] font-normal"><i>Somos a <b className="font-normal">WLG Distribuidor Pet</b>, venha nos conhecer!</i></p>
            <Link href='#saibaMais'><button type="button" className="botaoTransparente mt-5">Sobre Nós</button></Link>
        </div>
        <div className="lg:flex flex-col flex-1 flex-grow-[1.19] startGap lg:h-auto">
          <div className="lg:flex flex-1 startGap">
            <EmpresaCard empresa='Traty Vet Pet Care' descricao='Os melhores produtos para seu Pet.' img='/images/tv_logo.png' link='/tratyvet' />
            <EmpresaCard empresa='Propetz' descricao='Propetz, amor por pet, paixão por inovar.' img='/images/propetz_logo.jpg' link='/propetz' />
          </div>
          <div className="lg:flex flex-1 startGap">
            <EmpresaCard empresa='Minag' descricao='Feito para durar.' img='/images/minag_logo.jpeg' link='/minag' />
            <EmpresaCard empresa='KBSPK Industries' descricao='Tesouras profissionais para tosa em aço japonês inox com classificação 440C.' img='/images/kbspk_logo.jpeg' link='/kbspk' />
          </div>
        </div>
      </main>

      {produtos.then((r) => (categorias.map((categoria) => {
        return <Linha categoria={categoria} produtos={r.filter((produto) => produto.categoriaId === categoria.id)} />
      })))}

      <section className="flex flex-col w-[82%] lg:flex-row startGap xl:w-[77%] lg:w-[87%] mx-auto pt-20 pb-12 items-center saibaMais" id="saibaMais">
          <div>
              <h2 className="font-bold text-[30px] lg:text-[36px] text-zinc-800 pb-3 lg:pb-6">Saiba mais sobre nós</h2>
              <div className="flex flex-col gap-7 leading-[23px] text-zinc-400 opacity-90">
                <p className="font-medium">A WLG Distribuidor Pet é uma empresa de distribuição de <b>produtos para pets e donos de petshops</b> com 12 anos de atuação no mercado, prestando atendimento com pronta-entrega para o melhor conforto aos nossos clientes e amigos. </p>
                <p className="font-medium">Somos originalmente de Guaratinguetá, porém atuamos em todo o Vale do Paraíba e Litoral Norte.</p>
                <p className="font-medium">Atualmente trabalhamos com os produtos para pets das marcas <b>Traty Vet</b>, <b>Propetz</b>, <b>KBSPK</b> e <b>Minag</b>.</p>
                <p className="font-medium">Estamos sempre à disposição para o que você precisar!</p>
              </div>
              <Link href="https://linktr.ee/wlgdistribuidor"><button className="botaoTransparente invertido mt-6 lg:mt-8">Contato</button></Link>
          </div>
          
          <div className="flex flex-col startGap pt-2 lg:pt-0">
            <div className="flex flex-col lg:flex-row startGap">
                <div><img src="/images/foto_warlei.jpeg" alt="Foto do Dono da WLG" /></div>
                <div><img src="/images/tv_logo_2.jpeg" alt="Logo da vendedora de produtos para pets Traty Vet" /></div>
            </div>
            <div className="flex flex-col lg:flex-row startGap">
                <div><img src="/images/propetz_logo.jpg" alt="Logo da empresa de produtos para pets Propetz" /></div>
                <div className="bg-zinc-100 flex flex-col items-center justify-center gap-2.5 text-center px-4 py-40 lg:py-0">
                    <p className="text-zinc-800 font-bold text-[25px] leading-[1.14]">Diferentes tipos de produtos</p>
                    <p className="text-gray-500 opacity-80 font-medium px-1"><i>Todos para o banho e tosa do seu pet!</i></p>
                </div>
            </div>
          </div>
      </section>
    </>
  )
}