"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'

function NavLink({ children, link}) {
  const path = usePathname();

  return ( 
    <li><Link href={link} className={(path === link) ? 'active' : ''}>{children}</Link></li>
  );
}

export default NavLink;