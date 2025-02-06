"use client"
import { useState, useEffect } from "react";
function FavCard({Anime}){

    const tooglefav = ()=>{
    }

    return (

        <div className="hover:bg-gray-600 p-2 rounded ">
            <img src={Anime.image_url} alt={Anime.title} height={500} loading="lazy"/>
            <div>
                <h3 className="py-2">{Anime.title}</h3>
                <p className="truncate">{Anime.Estado}</p>
                <span className="text-slate-500">Anime.status</span> 
            </div>
            <div className="flex justify-end">
            <button className="bg-[#ff640a] p-2 rounded-lg">Favorito</button>
            </div>
        </div>
            
    )
}

export default FavCard;