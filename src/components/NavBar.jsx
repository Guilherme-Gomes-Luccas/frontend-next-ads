'use client'

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavBar() {
    const Pathname = usePathname();
    
    return (
    <nav>
        <ul className="text-neutral-200 flex gap-8">
            <li><Link href="/" className={` ${Pathname === '/' ? "bg-sky-800" : "bg-blue-500"}  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`}>Home</Link></li>
            <li><Link href="/dashboard" className={` ${Pathname === '/dashboard' ? "bg-cyan-800" : "bg-blue-500"}  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`}>Dashboard</Link></li>
            <li><Link href="/tickers" className={` ${Pathname === '/tickers' ? "bg-cyan-800" : "bg-blue-500"}  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`}>Cards</Link></li>
            <li><Link href="/cadastro" className={` ${Pathname === '/cadastro' ? "bg-cyan-800" : "bg-blue-500"}  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full`}>cadastra-se</Link></li>
        </ul>
    </nav>
  )
}