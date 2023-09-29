import Link from "next/link";

function Footer() {
  return ( 
    <footer className="bg-background text-slate-50 flex flex-col items-center mt-[60px] pt-8 text-center lg:text-start">
          <div className="flex flex-col justify-center items-center gap-10 lg:gap-6
          lg:flex-row lg:justify-between lg:items-start">
            <img src="/images/wlg_logo.png" alt="" className="footerLogo" />
            <div>
              <h3>Catálogos Online</h3>
              <ul>
                  <li><Link href="https://drive.google.com/file/d/1v5wvf7w_DdWYy4PQeDMtO2DpVZ23PsSC/view?usp=drive_link">Traty Vet</Link></li>
                  <li><Link href="https://drive.google.com/file/d/1CHFXgbKk0voN5uKfCBVfVD3VpYm14bPn/view?usp=drive_link">Propetz</Link></li>
              </ul>
            </div>
            <div>
              <h3>Links</h3>
              <ul>
                  <li><Link href="/">Início</Link></li>
                  <li><Link href="/sobre">Sobre Nós</Link></li>
                  <li><Link href="https://wa.me/12987024097">Fale Conosco</Link></li>
                  <li><Link href="https://linktr.ee/wlgdistribuidor">Linktr.ee</Link></li>
              </ul>
            </div>
            <div>
              <h3>Empresas</h3>
              <ul>
                  <li><Link href="https://tratyvet.com/pt-br">Traty Vet</Link></li>
                  <li><Link href="https://www.propetz.com.br/">Propetz</Link></li>
                  <li><Link href="https://kbspk.com">KBSPK</Link></li>
                  <li><Link href="https://www.minag.com.br">Minag</Link></li>
              </ul>
            </div>
          </div>
        <p className="border-t py-[30px] text-center text-white borderFooter">Copyright © 2023 WLG Distribuidor Pet. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;