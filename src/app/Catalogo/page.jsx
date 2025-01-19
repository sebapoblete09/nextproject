import catalogoList from "@/app/Animes/Catalogo"
import AnimeCard from "@/components/AnimeCard";

function CatPage(){

    const Agregados = catalogoList

    return (
            <div className="flex flex-wrap items-center justify-center  divide-y-2">
                <h1 className="text-5xl p-10 text-[#ff640a] font-bold">Catalogo</h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 p-6">
                        {Agregados.map((agregado)=>(
                            <AnimeCard 
                            key={agregado.id}
                            Anime={agregado}
                            />
                        ))
                        }
                    </div>
            </div>
        
    )
}

export default CatPage;