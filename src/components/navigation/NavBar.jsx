"use client";
import { useState } from "react";
import Link from "next/link";
import "./navbar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar py-5">
      {/* Logo */}
      <Link href="/" className="navigation">
        <h1 className="text-3xl font-bold">CrunchyClon</h1>
      </Link>

      {/* Botón hamburguesa (solo visible en móvil) */}
      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Menú */}
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <button onClick={() => setIsOpen(false)}>X</button>
        <li>
          <Link className="navigation" href="/">Inicio</Link>
        </li>
        <li>
          <Link className="navigation" href="/Catalogo">Catalogo</Link>
        </li>
        <li>
          <Link className="navigation" href="/Favoritos">Favoritos</Link>
        </li>
        <li>
          <Link className="navigation" href="/Listas">Listas</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
