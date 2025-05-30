"use client"
import { useState, useEffect } from "react";
export default  function AnimeCard({Anime}){

    const [fav, setIsFav] = useState(false)
    const [data, setData] = useState({})


    //ver si el anime ya esta como favorito
    useEffect(()=>{
        const fetchAnimeData = async () => {
            try{
                const response = await fetch(`/api/animes/${Anime.mal_id}`);
                if(response.ok){
                    setIsFav(true)
                }

                
            }catch(error){
                console.error("Error al buscar el anime", error);
                return 0;
            };
        };
        fetchAnimeData();
    }, [Anime.mal_id]);

    const tooglefav = async ()=>{
        
        setIsFav(!fav)
        //Agrega el anime a favoritos
        const animeData =  {
            id: Anime.mal_id,
            title: Anime.title,
            synopsis: Anime.synopsis,
            Estado: "Viendo",// por defecto sera viendo, por el momento+
            image_url: Anime.images.webp.image_url
        }
        setData(animeData)

        try{
             const response = await fetch("/api/animes",{
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(animeData)
            })

                    const result =  await response.json()
                    console.log("Anime añadido a favorito: " + animeData.title)

                }catch(error){
                    console.log(error)
                }
        
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
                {fav ? (<button className="bg-[#ff640a] p-2 rounded-lg" onClick={tooglefav}>Favorito</button>
            ):(
                <button className="bg-neutral-700 p-2 rounded-lg" onClick={tooglefav}>Favorito</button>
            )}
                
            </div>
        </div>
            
    )
}

