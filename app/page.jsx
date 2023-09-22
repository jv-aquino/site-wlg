import EmpresaCard from "@/components/EmpresaCard"
import Linha from "@/components/Linha"

export default function Home() {
  return (
    <>
      <main className="lg:flex-row lg:flex justify-center pt-12 px-5 lg:min-h-[49vw] w-full startGap">
        <div className="cachorro flex flex-col flex-1 text-white justify-center items-start gap-2.5 
        pl-16 pr-[14px] w-[97%] aspect-square mx-auto lg:h-auto xl:pl-[105px]">
            <h2 className="font-bold text-[52px] pr-2 pt-12">Nós Somos WLG</h2>
            <p className="text-[25px] font-normal"><i>Somos a <b className="font-normal">WLG Distribuidor Pet</b>, venha nos conhecer!</i></p>
            <button type="button" className="botaoTransparente mt-5">Sobre Nós</button>
        </div>
        <div className="lg:flex flex-col flex-1 flex-grow-[1.19] startGap lg:h-auto">
          <div className="lg:flex flex-1 startGap">
            <EmpresaCard empresa='Traty Vet Pet Care' descricao='Os melhores produtos para seu Pet.' img='/images/tv_logo.png' link='' />
            <EmpresaCard empresa='Propetz' descricao='Propetz, amor por pet, paixão por inovar.' img='/images/propetz_logo.jpg' link='' />
          </div>
          <div className="lg:flex flex-1 startGap">
            <EmpresaCard empresa='Minag' descricao='Feito para durar.' img='/images/minag_logo.jpeg' link='' />
            <EmpresaCard empresa='KBSPK Industries' descricao='Tesouras profissionais para tosa em aço japonês inox com classificação 440C.' img='/images/kbspk_logo.jpeg' link='' />
          </div>
        </div>
      </main>

    <Linha />

      <section className="section" id="explore">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="left-content">
                        <h2>Saiba mais sobre nós</h2>
                        <span>A WLG Distribuidor Pet é uma empresa de distribuição de <b>produtos para pets e donos de petshops</b> com 12 anos de atuação no mercado, prestando atendimento com pronta-entrega para o melhor conforto aos nossos clientes e amigos. </span>
                        <p>Somos originalmente de Guaratinguetá, porém atuamos em todo o Vale do Paraíba e Litoral Norte.</p>
                        <p>Atualmente trabalhamos com os produtos para pets das marcas <b>Traty Vet</b>, <b>Propetz</b>, <b>KBSPK</b> e <b>Minag</b>.</p>
                        <p>Estamos sempre à disposição para o que você precisar!</p>
                        <div className="main-border-button">
                            <a href="https://linktr.ee/wlgdistribuidor">Contato</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right-content">
                        <div className="row">
                            <div className="col-lg-6 first-image">
                                <img src="/images/foto_warlei.jpeg" alt="Foto do Dono da WLG" />
                            </div>
                            <div className="col-lg-6 first-image">
                                <img src="/images/tv_logo_2.jpeg" alt="" />
                            </div>
                            <div className="col-lg-6">
                                <div className="second-image">
                                    <img src="/images/propetz_logo.jpg" alt="Logo da Propetz" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="types">
                                    <h4>Diferentes tipos de produtos</h4>
                                    <span>Todos para o seu banho e tosa!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
