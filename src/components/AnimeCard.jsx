"use client"
import { useState } from "react";
function AnimeCard({Anime}){

    const [fav, setIsFav] = useState(Anime.IsFav)

    const tooglefav = ()=>{
        setIsFav(!fav)
    }
    return (

        <div className="hover:bg-gray-800 p-2 rounded ">
            <img src={Anime.Portada} alt={Anime.Nombre} height={500} />
            <div>
                <h3 className="py-2">{Anime.Nombre}</h3>
                <p>{Anime.Descripcion}</p>
                <span className="text-slate-500">{Anime.Estado}</span> 
            </div>
            {fav ? (
                <div className="flex  justify-end">
                    <button className="bg-[#ff640a] rounded-sm p-2 mt-4"
                    onClick={tooglefav}>Favorito</button>
                </div>

            ):(
                <div className="flex justify-end">
                    <button className="bg-slate-600 rounded-sm p-2 mt-4"
                    onClick={tooglefav}>Favorito</button>
                </div>
            )}
            
        </div>
            
    )
}

export default AnimeCard;