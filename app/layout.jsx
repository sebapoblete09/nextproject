import NavBar from "@/navigation/NavBar";
import './globals.css'

export const metadata = {
    title: "CrunchyClon",
    descripcion: "Clon personal de crunchyroll"
}
export default function RootLayout({children}){
    return (
        <html lang="es">
            <body>
                <NavBar/>
                <main>{children}</main>
                <footer>Footer</footer>

            </body>
        </html>
    )
}