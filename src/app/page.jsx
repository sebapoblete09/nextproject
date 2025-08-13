import Link from "next/link";
function HomePage(){
    return(
    <div className="flex flex-col min-h-screen ">
      {/* Header con banner */}
<header className="relative h-[550px] w-full overflow-hidden">
  <img
    src="https://m.media-amazon.com/images/S/pv-target-images/d3acdaf66cb67fa38e19d5ccac442f720dd395db4ccaaef75af1ab800a744540._SX1080_FMjpg_.jpg"
    alt="Banner"
    className="w-full h-full object-cover block"
  />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-20">
  <div className="bg-black bg-opacity-70 rounded-xl p-8">
    <h1 className="text-orange-500 text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
      CrunchyClon
    </h1>
    <p className="text-lg max-w-2xl">
      Un clon inspirado en Crunchyroll para explorar y descubrir series de anime.
    </p>
  </div>
</div>
</header>

      {/* Contenido principal */}
      <main className="flex-1 px-6 py-12 max-w-5xl mx-auto text-center">
        <p className="text-lg mb-8">
          Desarrollado con <span className="font-semibold">Next.js</span>,{" "}
          <span className="font-semibold">TailwindCSS</span> y APIs de anime.
        </p>
        <Link
          href="/Catalogo"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold transition"
        >
          Ir al Catálogo
        </Link>

        {/* Sección de características */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Características</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-slate-500 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Agregar a favoritos</h3>
              <p>Guarda tus series de anime favoritas para acceder a ellas rápidamente.</p>
            </div>
            <div className="bg-slate-500 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Eliminar de favoritos</h3>
              <p>Gestiona tu lista de favoritos eliminando las que ya no sigues.</p>
            </div>
            <div className="bg-slate-500 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Próximamente: listas personalizadas</h3>
              <p>Crea colecciones propias para organizar tus animes como quieras.</p>
            </div>
          </div>
        </section>

        {/* Sección de tecnologías */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Tecnologías usadas</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <span className="bg-slate-500 px-4 py-2 rounded-lg font-medium">
              Next.js
            </span>
            <span className="bg-slate-500 px-4 py-2 rounded-lg font-medium">
              TailwindCSS
            </span>
            <span className="bg-slate-500 px-4 py-2 rounded-lg font-medium">
              MAL: API de anime
            </span>
            <span className="bg-slate-500 px-4 py-2 rounded-lg font-medium">
              Vercel
            </span><span className="bg-slate-500 px-4 py-2 rounded-lg font-medium">
              Firebase
            </span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 mt-12">
        <p>© {new Date().getFullYear()} CrunchyClon - Desarrollado por Sebastián Poblete</p>
      </footer>
    </div>
  );
}

export default HomePage;