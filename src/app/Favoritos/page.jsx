"use client"
import { useEffect, useState } from "react";
import FavCard from "@/components/FavCards";

function FavPage(){
    const [animes, setAnimes] = useState([])

    //primero traer todos los animes
    useEffect(()=>{
        //llamar a la api, que trae mis animes favoritos
        const fetchAnimes = async ()=>{
            const response = await fetch("/api/animes");
            const data = await response.json();
            setAnimes(data);
            console.log(data)
        };

        fetchAnimes();
    },[])



    return (
            <div className="flex flex-wrap items-center justify-center  divide-y-2">
                {console.log(animes)}
                <h1 className="text-5xl p-10 text-[#ff640a] font-bold">Mis favoritos</h1>

                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-5 p-6">
                
                        {animes.map((anime)=>(
                            <FavCard 
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