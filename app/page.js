import Linha from "@/components/Linha"

export default function Home() {
  return (
    <>
      <div className="main-banner" id="top">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 left-content">
                      <div className="thumb">
                          <div className="inner-content">
                              <h4>Nós Somos WLG</h4>
                              <span style={{paddingRight: '16px'}}>Somos a WLG Distribuidor Pet, venha nos conhecer!</span>
                              <div className="main-border-button">
                                  <a href="#explore">Sobre Nós</a>
                              </div>
                          </div>
                          <img src="/images/cachorro_index.jpeg" alt="" style={{height: '80%'}} />
                      </div>
                </div>
                <div className="col-lg-6">
                    <div className="right-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                      <div className="inner-content">
                                      </div>
                                      <div className="hover-content">
                                          <div className="inner">
                                              <h4>Traty Vet Pet Care</h4>
                                              <p>Os melhores produtos para seu Pet.</p>
                                              <div className="main-border-button">
                                                  <a href="sobretratyvet.html">Saiba Mais</a>
                                              </div>
                                          </div>
                                      </div>
                                      <img src="/images/tv_logo.jpeg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                      <div className="inner-content">
                                      </div>
                                      <div className="hover-content">
                                          <div className="inner">
                                              <h4>Propetz</h4>
                                              <p>Propetz, amor por pet, paixão por inovar.</p>
                                              <div className="main-border-button">
                                                  <a href="sobrepropetz.html">Saiba Mais</a>
                                              </div>
                                          </div>
                                      </div>
                                      <img src="/images/propetz_logo.jpg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                      <div className="inner-content">
                                      </div>
                                      <div className="hover-content">
                                          <div className="inner">
                                              <h4>Minag</h4>
                                              <p>Feito para durar.</p>
                                              <div className="main-border-button">
                                                  <a href="sobreminag.html">Saiba Mais</a>
                                              </div>
                                          </div>
                                      </div>
                                      <img src="/images/minag_logo.jpeg" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                  <div className="thumb">
                                      <div className="inner-content">
                                      </div>
                                      <div className="hover-content">
                                          <div className="inner">
                                              <h4 style={{ padding: '3px'}}>KBSPK Industries</h4>
                                              <p>Tesouras profissionais para tosa em aço japonês inox com classificação 440C.</p>
                                              <div className="main-border-button">
                                                  <a href="sobrekbspk.html">Saiba Mais</a>
                                              </div>
                                          </div>
                                      </div>
                                      <img src="/images/kbspk_logo.jpeg" />
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

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
