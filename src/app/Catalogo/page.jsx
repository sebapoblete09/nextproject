"use client"
import { useEffect, useState } from "react";
import AnimeCard from "@/components/AnimeCard";
function CatPage(){

    const [AnimesList, setAnimesList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const fetchAnimeData = async () =>{
            setLoading(true);
            try{
                const response = await fetch("https://api.jikan.moe/v4/anime")//hace el llamado a la api para traer la info de todo
                const data = await response.json();// transforma la info a json
                setAnimesList(data.data)//le paso la data del json
            }catch(error){
                console.error("Error al traer el catalogo de anime: ",error);
            }finally{
                setLoading(false);
            }
        }

        fetchAnimeData();
    },[]);//ejecuta solo al mostrar el componente, o la pagina

    if(loading){
        return <h2 className="p-10 text-3xl flex items-center justify-center">Cargando catalgo de anime</h2>
    }

    return (
            <div className="flex flex-wrap items-center justify-center  divide-y-2">
                <h1 className="text-5xl p-10 text-[#ff640a] font-bold">Catalogo</h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 p-6">
                        {AnimesList.map((anime)=>(
                            <AnimeCard 
                            key={anime.mal_id}
                            Anime={anime}
                            />
                        ))
                        }
                    </div>
            </div>
        
    )
}

export default CatPage;