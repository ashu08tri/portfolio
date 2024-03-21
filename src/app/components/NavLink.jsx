"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function NavLink({link}) {
    const path = usePathname();
  return (
    <Link href={link.url} className={`rounded p-1 text-black ${path === link.url && 'bg-black text-white'}`}>{link.title}</Link>
  )
}

export default NavLink;