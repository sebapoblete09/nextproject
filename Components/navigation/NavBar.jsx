import Link from "next/link";
function NavBar(){


    return (
        <nav >
            <h1>CrunchyClon</h1>
            <ul>
                <li>
                    <Link href="/">Inicio</Link>
                </li>
                <li>
                    <Link href="/Favoritos">Favorios</Link>
                </li>
                <li>
                    <Link href="/Listas">Listas</Link>
                </li>
            </ul>

        </nav>
        
    )
}

export default NavBar;