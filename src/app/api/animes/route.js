import { NextResponse} from "next/server";
import { db } from "../../../lib/firebaseconfig";
import { collection, getDocs, doc,setDoc, deleteDoc } from "firebase/firestore"; //esto desde la documentacion de firebase


//Obtener Animes favoritos
export async function GET() {
  try {
    const querySnapchot = await getDocs(collection(db, "Favoritos")); // hace la peticion para traer todos los favoritos
    const favs = querySnapchot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })); //hago una map para guardos los datos de cada uno en una const
    return NextResponse.json(favs, { status: 200 }); // devuelves los fav como json, con un status 200 -> 'ok
  } catch (error) {
    return NextResponse.json(
      { error: "Error al obtener los animes favoritos" },
      { status: 500 }
    ); //si no se puede hacer la peticion, devuelve el error
  }
}

//Agregar un anime a favoritos
export async function POST(req){
  try{
    const data = await req.json();
        if (!data.id) {
          throw new Error("ID no válido en la solicitud");
      }

      const docRef = doc(db, "Favoritos", String(data.id)); // Asegurar que sea string
      await setDoc(docRef, {
          id: data.id,
          Estado: data.Estado,
          synopsis: data.synopsis,
          title: data.title,
          image_url: data.image_url
      });
      return NextResponse.json({ id: data.id }, { status: 200 })

  }catch(error){
    return NextResponse.json(
      {error: "Error al agregar a favorito"},
      { status: 500}
    )
  }
}


//Eliminar un anime de favoritos
export async function DELETE(req){
  try{
    const data = await req.json();
    if(!data.id){
      throw new Error("ID no valido en la solicitud")
    }

    const docRef = doc(db,"Favoritos",String(data.id));
    await deleteDoc(docRef);
    return NextResponse.json({ message: "Eliminado correctamente" }, { status: 200 });
  }catch(error){
    return NextResponse.json({error: "Error al eliminar de favoritos"},{status:500})
  }
}