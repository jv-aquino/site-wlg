"use client"

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import NavLink from "./NavLink";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 600) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return ( 
    <nav className={"flex items-center justify-between pt-[15px] pb-3 borderDot box-border xl:px-44 lg:px-28 md:px-14 px-10 bg-white z-10 w-full " + ((scrolled || open) ? 'fixed' : 'absolute')}>
      <Link href='/' className="xl:pl-14">
        <Image src="/images/wlg_logo.png" alt="" width={87} height={66}/>
      </Link>
      
      <ul className={(open ? 'open text-[17px]' : "close") + 
      " gap-6 min-[930px]:flex xl:gap-[30px] items-center font-semibold text-background tracking-[1px] text-[15px]"}>

        <NavLink close={() => setOpen(false)} link='/'>Início</NavLink>
        <NavLink close={() => setOpen(false)} link='/tratyvet'>Traty Vet</NavLink>
        <NavLink close={() => setOpen(false)} link='/propetz'>Propetz</NavLink>
        <NavLink close={() => setOpen(false)} link='/kbspk'>KBSPK</NavLink>
        <NavLink close={() => setOpen(false)} link='/minag'>Minag</NavLink>
        <NavLink close={() => setOpen(false)} link='/produtos'>Produtos</NavLink>
        <NavLink close={() => setOpen(false)} link='/sobre'>Sobre Nós</NavLink>
        <NavLink close={() => setOpen(false)} link='/contato'>Contato</NavLink>
        <NavLink close={() => setOpen(false)} link='/pesquisar'><span className="symbol text-[18px]">search</span></NavLink>
      </ul>

      <button type="button" className="flex min-[924px]:hidden text-[2.6rem] font-thin z-10"
      onClick={() => setOpen(!open)}><span className="symbol">{open ? 'close' : 'menu'}</span></button>
    </nav>
  );
}

export default Navbar;