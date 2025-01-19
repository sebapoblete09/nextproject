"use client"
import { useEffect, useState } from "react";
import AnimeCard from "@/components/AnimeCard";

function FavPage(){

    const [misFav, setMisFav] = useState([]);

    useEffect(() => {
        // Filtrar los animes favoritos desde el localStorage
        const favoritos = catalogoList.filter(anime => {
            // Obtener el estado de favorito del localStorage
            const storedFav = localStorage.getItem(`anime_${anime.id}`);
            return storedFav !== null && JSON.parse(storedFav) === true; // Si es verdadero en localStorage
        });

        // Actualizar el estado con los animes favoritos
        setMisFav(favoritos);
    }, []); // Solo se ejecuta una vez cuando el componente se monta



    return (
            <div className="flex flex-wrap items-center justify-center  divide-y-2">
                {console.log(misFav)}
                <h1 className="text-5xl p-10 text-[#ff640a] font-bold">Mis favoritos</h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 p-6">
                    {}
                        {misFav.map((anime)=>(
                            <AnimeCard 
                            key={anime.id}
                            Anime={anime}
                            />
                        ))
                        }
                    </div>
            </div>
        
    )
}

export default FavPage;