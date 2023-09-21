import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return ( 
    <nav className="flex items-center justify-between pt-3 pb-2.5 borderDot box-border 
    xl:px-44 lg:px-28 md:px-14 px-10 sticky">
      <Link href='/' className="xl:pl-5">
        <Image src="/images/wlg_logo.png" alt="" width={87} height={64}/>
      </Link>
      
      <ul className="flex xl:pr-4 gap-6 xl:gap-[30px] 
      font-semibold text-zinc-800 tracking-[1px] text-[15px]">

        <li><Link href='/'>Início</Link></li>
        <li><Link href='/tratyvet'>Traty Vet</Link></li>
        <li><Link href='/propetz'>Propetz</Link></li>
        <li><Link href='/kbspk'>KBSPK</Link></li>
        <li><Link href='/minag'>Minag</Link></li>
        <li><Link href='/produtos'>Produtos</Link></li>
        <li><Link href='/sobre'>Sobre Nós</Link></li>
        <li><Link href='/contato'>Contato</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;