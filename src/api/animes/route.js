//exporto la coneccion a la db y el modelo Anime
import {connectDB} from "@/libs/mongodb";
import Anime from "@/models/Anime";
import { request } from "express";

export default async function handler(req,res){
    await connectDB() //conexion a la base de datos

    //si la peticion es un GET,es decir, obtener los favoritos hace lo siguiente:
    if (req.method === "GET") {
        try {
            const animes = await Anime.find({});
            res.status(200).json(animes);
        } catch (error) {
            res.status(500).json({ error: "Error al obtener animes" });
        }
    }

    //si la peticion es un POST, es decir, guardarlo como favorito:
    if(req.method === "POST"){
        try{
            const newAnime = new Anime(request.body) // crea un registro de la coleccion anime, con la info pasada en el body y lo guarda en newAnime
            await newAnime.save()//espera que se guarde bien ?
            res.status(201).json(newAnime);
        }catch(errors){
            res.status(500).json({error:"Error al guardar el anime como favorito"})
        }
    }

    //Si la peticion es un DELETE, es decir, eliminarlo como favorio
    if(request.method === "DELETE"){
        try{
            const {id} = req.query;
            await Anime.deleteOne({id});
            res.status(200).json({message:"Anime eliminado de favoritos"});
        }catch(error){
            res.status(500).json({message:"Error al eliminar de favoritos"});
        }
    }
}
