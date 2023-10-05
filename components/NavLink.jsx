"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'

function NavLink({ children, link, close }) {
  const path = usePathname();

  return ( 
    <li><Link href={link} className={(path === link) ? 'active' : ''} onClick={() => {
      setTimeout(close(), 100)
    }}>{children}</Link></li>
  );
}

export default NavLink;