//exporto la coneccion a la db y el modelo Anime
import { NextResponse } from 'next/server';
import {connectDB} from "@/libs/mongodb";
import Anime from "@/models/Anime";

// Conectar a la base de datos
connectDB();


// Manejar el método GET
export async function GET(request) {
    try {
      const animes = await Anime.find();
      return NextResponse.json(animes);
    } catch (error) {
      return NextResponse.json(
        { error: 'Error al obtener los animes.' },
        { status: 500 }
      );
    }
  }
