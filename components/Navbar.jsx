import Image from "next/image";
import Link from "next/link";

import NavLink from "./NavLink";

function Navbar() {
  return ( 
    <nav className="flex items-center justify-between pt-3.5 pb-3 borderDot box-border 
    xl:px-44 lg:px-28 md:px-14 px-10 relative">
      <Link href='/' className="xl:pl-14">
        <Image src="/images/wlg_logo.png" alt="" width={87} height={66}/>
      </Link>
      
      <ul className="hidden min-[924px]:flex xl:gap-[30px] gap-6 
      font-semibold text-background tracking-[1px] text-[15px]">

        <NavLink link='/'>Início</NavLink>
        <NavLink link='/tratyvet'>Traty Vet</NavLink>
        <NavLink link='/propetz'>Propetz</NavLink>
        <NavLink link='/kbspk'>KBSPK</NavLink>
        <NavLink link='/minag'>Minag</NavLink>
        <NavLink link='/produtos'>Produtos</NavLink>
        <NavLink link='/sobre'>Sobre Nós</NavLink>
        <NavLink link='/contato'>Contato</NavLink>
      </ul>

      <button type="button" className="flex min-[924px]:hidden text-[2.6rem] font-thin"><span className="symbol">menu</span></button>
    </nav>
  );
}

export default Navbar;