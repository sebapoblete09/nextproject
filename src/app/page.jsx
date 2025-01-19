function HomePage(){
    return (
            <div >
                <div className="hero-recomend divide-y divide-blue-200 " >

                    <div >
                        <h2>Titulo anime</h2>
                        <span>Genero 1, genero 2</span>
                        <p>Descrpicion del anime</p>
                        <br />
                    </div>

                    <div>
                        <h2>Tus ultimos agregadps!</h2>
                    </div>
                </div>

                <div className="catalog">
                    <h2>Catalogo</h2>
                    <button>Ver Catalogo.</button>
                </div>
                
            </div>
        
    )
}

export default HomePage;