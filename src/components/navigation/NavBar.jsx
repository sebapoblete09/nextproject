"use client"
import Link from "next/link";
import { useState } from "react";
import "./navbar.css"
function NavBar(){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar py-5 gap-10">

            {/* Logo */}
            <Link  href="/" className="navigation">
                <h1 className="text-3xl font-bold">CrunchyClon</h1>
            </Link>

            {/* Boton version movil */}
            <button className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu">
                ☰
            </button>
            
            {/*Menu*/}
            <ul className={`menu ${isOpen ? "open" : ""}`}>
                <li>
                    <Link className="navigation hover:bg-gray-700 p-7" href="/">Inicio</Link>
                </li>
                <li>
                    <Link className="navigation hover:bg-gray-700 p-7"  href="/Catalogo">Catalogo</Link>
                </li>
                <li>
                    <Link className="navigation hover:bg-gray-700 p-7"  href="/Favoritos">Favoritos</Link>
                </li>
                <li>
                    <Link  className="navigation hover:bg-gray-700 p-7"  href="/Listas">Listas</Link>
                </li>
            </ul>

        </nav>
        
    )
}

export default NavBar;