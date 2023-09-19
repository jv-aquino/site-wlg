import Link from "next/link";

function Footer() {
  return ( 
    <footer>
        <div class="w-full">
            <div class="row">
                <div class="col-lg-3">
                    <div className="first-item">
                        <div className="logo">
                            <img src="/images/wlg_logo.png" alt="" style={{objectFit: 'cover', height: '190px', width: '100%', objectPosition: 'bottom'}} />
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <h4>Catálogos Online</h4>
                    <ul>
                        <li><Link href="https://drive.google.com/file/d/1v5wvf7w_DdWYy4PQeDMtO2DpVZ23PsSC/view?usp=drive_link">Traty Vet</Link></li>
                        <li><Link href="https://drive.google.com/file/d/1CHFXgbKk0voN5uKfCBVfVD3VpYm14bPn/view?usp=drive_link">Propetz</Link></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h4>Links</h4>
                    <ul>
                        <li><Link href="/">Início</Link></li>
                        <li><Link href="/Linkbout">Sobre Nós</Link></li>
                        <li><Link href="https://wa.me/12987024097">Fale Conosco</Link></li>
                        <li><Link href="https://linktr.ee/wlgdistribuidor">Linktr.ee</Link></li>
                    </ul>
                </div>
                <div class="col-lg-3">
                    <h4>Empresas</h4>
                    <ul>
                        <li><Link href="https://tratyvet.com/pt-br">Traty Vet</Link></li>
                        <li><Link href="https://www.propetz.com.br/">Propetz</Link></li>
                        <li><Link href="https://kbspk.com">KBSPK</Link></li>
                        <li><Link href="https://www.minag.com.br">Minag</Link></li>
                    </ul>
                </div>
                <div class="col-lg-12">
                    <div class="under-footer">
                        <p>Copyright © 2023 WLG Distribuidor Pet. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
   );
}

export default Footer;