"use client"
import { useRef } from "react";
import { useState, useEffect } from "react";
import NewFavState from "./NewFavState";

export default  function AnimeCard({Anime}){

    const [fav, setIsFav] = useState(false)
    const favDialogRef = useRef();

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

    const tooglefav = async () => {
        // Mostrar el diálogo
        favDialogRef.current?.showModal();
    };

    const handleConfirm = async ()=>{
        
        const estado = favDialogRef.current.querySelector("select").value;

        setIsFav(!fav)

        //Agrega el anime a favoritos
        const animeData =  {
            id: Anime.mal_id,
            title: Anime.title,
            synopsis: Anime.synopsis,
            Estado: estado,// por defecto sera viendo, por el momento+
            image_url: Anime.images.webp.image_url
        }


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

        <div className=" hover:bg-gray-600 p-2 rounded flex flex-col justify-between h-[550px]">
            <img src={Anime.images.webp.image_url} 
            alt={Anime.title} 
            className="h-[350px] w-full object-cover rounded"
            loading="lazy"/>
            <div className="min-h-[100px]">
                <h3 className="py-2">{Anime.title}</h3>
                <span className="text-slate-300">{Anime.aired.prop.from.year}</span>
            </div>
            <div className="flex justify-end">
                {fav ? (<button className="bg-[#ff640a] p-2 rounded-lg" onClick={tooglefav}>Favorito</button>
            ):(
                <button className="bg-neutral-700 p-2 rounded-lg" onClick={tooglefav}>Favorito</button>
            )}

            {/* Aquí se monta el componente del diálogo */}
            <NewFavState name={Anime.title} ref={favDialogRef} onConfirm={handleConfirm} />
                
            </div>
        </div>
            
    )
}

