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

        <div className="hover:bg-gray-600 p-2 rounded flex flex-col justify-between h-[550px]">
            <img src={Anime.image_url} 
            alt={Anime.title} 
            className="h-[350px] w-full object-cover rounded"
            loading="lazy"/>
            <div className="min-h-[100px]">
                <h3 className="py-2 font-bold">{Anime.title}</h3>
                <span className="text-slate-300">{Anime.Estado}</span> 
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