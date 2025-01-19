"use client"
import { useState, useEffect } from "react";
function AnimeCard({Anime}){

    const [fav, setIsFav] = useState(false)

    //Guardar los fav en localstargue para un poco de consistencia
    useEffect(()=>{
        const animesFav = localStorage.getItem(`anime_${Anime.id}`)
        if (animesFav !== null) {
            setIsFav(JSON.parse(animesFav));
        }else {
            setIsFav(Anime.IsFav); // Estado inicial basado en el objeto Anime
          }
    }, [Anime.id, Anime.IsFav])

    const tooglefav = ()=>{
        setIsFav(!fav)
        localStorage.setItem(`anime_${Anime.id}`, JSON.stringify(!fav))
        
    }

    return (

        <div className="hover:bg-gray-600 p-2 rounded ">
            <img src={Anime.images.webp.image_url} alt={Anime.title} height={500} loading="lazy"/>
            <div>
                <h3 className="py-2">{Anime.title}</h3>
                <p className="truncate">{Anime.aired.prop.from.year}</p>
                <span className="text-slate-500">{Anime.status}</span> 
            </div>
            <div className="flex justify-end">
                {fav ? (<button className="bg-[#ff640a] p-2 rounded-lg">Favorito</button>
            ):(
                <button className="bg-neutral-700 p-2 rounded-lg">Favorito</button>
            )}
                
            </div>
        </div>
            
    )
}

export default AnimeCard;