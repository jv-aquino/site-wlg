import Link from "next/link";

function Navbar() {
  return ( 
    <header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-11">
                <nav class="main-nav">
                    <Link href="/" class="logo">
                        <img src="/images/wlg_logo.png" alt="" style={{objectFit: 'cover', width: '100%', height: '110px', objectPosition: 'bottom', paddingBottom: '6px'}} />
                    </Link>
                    <ul class="nav">
                        <li class="scroll-to-section"><Link href="/">Início</Link></li>
                        <li class="scroll-to-section"><Link href="/tratyvet/sobre">Traty Vet</Link></li>
                        <li class="scroll-to-section"><Link href="/propetz/sobre">Propetz</Link></li>
                        <li class="scroll-to-section"><Link href="/kbspk/sobre">KBSPK</Link></li>
                        <li class="scroll-to-section"><Link href="/minag/sobre">Minag</Link></li>
                        <li class="scroll-to-section"><Link href="/produtos">Produtos</Link></li>
                        <li class="scroll-to-section"><Link href="/about">Sobre Nós</Link></li>
                        <li class="scroll-to-section"><Link href="/contact">Contato</Link></li>
                    </ul>        
                    <Link class='menu-trigger' href=''>
                        <span>Menu</span>
                    </Link>
                </nav>
                </div>
            </div>
        </div>
    </header>
   );
}

export default Navbar;