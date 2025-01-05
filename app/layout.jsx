import NavBar from "../Components/NavBar";

export const metadata = {
    title: "Primera Pagina Nextjs",
    descripcion: "Primera Pagina funcional con nextjs, se probara diferentes componentes y funcionalidades"
}
export default function RootLayout({children}){
    return (
        <html lang="es">
            <body>
                <NavBar/>
                <main>{children}</main>

            </body>
        </html>
    )
}