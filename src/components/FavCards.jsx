"use client"
import { useState, useEffect } from "react";
function FavCard({Anime}){

    const [fav, setIsFav] = useState(false)

    const tooglefav = ()=>{
        setIsFav(!fav)
        localStorage.setItem(`anime_${Anime.id}`, JSON.stringify(!fav))
        
    }

    return (

        <div className="hover:bg-gray-600 p-2 rounded ">
            <img src={Anime.image} alt={Anime.title} height={500} loading="lazy"/>
            <div>
                <h3 className="py-2">{Anime.title}</h3>
                <p className="truncate">{Anime.estado}</p>
                <span className="text-slate-500">Anime.status</span> 
            </div>
            <div className="flex justify-end">
                {fav ? (<button className="bg-[#ff640a] p-2 rounded-lg">Favorito</button>
            ):(
                <button className="bg-neutral-700 p-2 rounded-lg" onClick={tooglefav}>Favorito</button>
            )}
                
            </div>
        </div>
            
    )
}

export default FavCard;