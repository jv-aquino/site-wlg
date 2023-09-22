import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return ( 
    <nav className="flex items-center justify-between pt-3.5 pb-3 borderDot box-border 
    xl:px-44 lg:px-28 md:px-14 px-10 relative">
      <Link href='/' className="xl:pl-14">
        <Image src="/images/wlg_logo.png" alt="" width={87} height={66}/>
      </Link>
      
      <ul className="hidden min-[924px]:flex xl:gap-[30px] gap-6 
      font-semibold text-background tracking-[1px] text-[15px]">

        <li><Link href='/'>Início</Link></li>
        <li><Link href='/tratyvet'>Traty Vet</Link></li>
        <li><Link href='/propetz'>Propetz</Link></li>
        <li><Link href='/kbspk'>KBSPK</Link></li>
        <li><Link href='/minag'>Minag</Link></li>
        <li><Link href='/produtos'>Produtos</Link></li>
        <li><Link href='/sobre'>Sobre Nós</Link></li>
        <li><Link href='/contato'>Contato</Link></li>
      </ul>

      <button type="button" className="flex min-[924px]:hidden text-[2.6rem] font-thin"><span className="symbol">menu</span></button>
    </nav>
  );
}

export default Navbar;