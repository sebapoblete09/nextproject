import Link from "next/link";
import "./navbar.css"
function NavBar(){
    return (
        <nav className="navbar py-5 gap-10">
            <Link  href="/" className="navigation">
                <h1 className="text-3xl font-bold">CrunchyClon</h1>
            </Link>
            <ul>
                <li>
                    <Link className="navigation hover:bg-gray-700 p-7" href="/">Inicio</Link>
                </li>
                <li>
                    <Link className="navigation hover:bg-gray-700 p-7"  href="/Favoritos">Favorios</Link>
                </li>
                <li>
                    <Link  className="navigation hover:bg-gray-700 p-7"  href="/Listas">Listas</Link>
                </li>
            </ul>

        </nav>
        
    )
}

export default NavBar;