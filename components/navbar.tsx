"use client"
import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "@/constants"
import useDarkMode from "@/constants/useDarkMode"
import React, { useState } from 'react';
const Navbar = () => {
    const [colorTheme, setTheme] = useDarkMode();
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
            <nav className="relative bg-tranparent flex items-center justify-between dark:text-white px-10 py-5">
                <Link href="/" className="logo w-auto flex flex-row gap-2 items-center justify-center">
                    <Image src="/code.svg"
                    alt="Code Crafters Logo"
                    width={50}
                    height={50}/>
                    <h1 className="text-2xl text-white font-bold"> DEV<span className="text-yellow-500">PRO</span> <span className="text-orange-500">HUB</span></h1>
                </Link>
                <ul className={`navigation absolute md:relative top-24 md:top-0 bg-slate-800 md:bg-transparent w-[90%] md:w-auto h-fit md:h-full gap-12 md:flex p-5 rounded-md md:rounded-none md:p-0 ${menuOpen ? 'block md:flex' : 'hidden md:flex bg-transparent'}`}>
                    {NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.key} className="link text-white hover:text-yellow-500 font-bold flex items-center justify-center cursor-pointer p-5 md:p-3 rounded-md transition-all">
                            {link.label}
                        </Link>
                    ))}
                </ul>
                <div className="logo2 flex items-center justify-center">
                    <Image 
                        src="menu.svg"
                        alt="menu"
                        width={32}
                        height={32}
                        onClick={toggleMenu}
                        className="logo2 inline-block cursor-pointer md:hidden invert"
                    />
                </div>
            </nav>
        </>
    )
}
export default Navbar