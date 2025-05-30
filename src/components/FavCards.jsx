"use client"
function FavCard({Anime, onDelete}){

    const tooglefav = async()=>{
        let confirmacion = confirm("Estas seguro que deseas eliminarlo de favoritos?");

       if(!confirmacion){
        return;
       }

        try{
            const response = await fetch("/api/animes",{
                method: "DELETE",
                headers:{
                    'content-type': 'application/json'
                },
                body: JSON.stringify({id: Anime.id})
            })
            if(response.ok){
                alert("Eliminado de favoritos")
                onDelete(Anime.id);
            }else{
                alert("Error al eliminar de favoritos");
            }
        }catch(error){
            console.error("Error al eliminar de favoritos", error)
        }     
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
            <button className="bg-[#ff640a] p-2 rounded-lg" onClick={tooglefav}>
                Favorito
            </button>
            </div>
        </div>
            
    )
}

export default FavCard;