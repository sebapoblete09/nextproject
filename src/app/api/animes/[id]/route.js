import { NextResponse } from "next/server";
import { db } from "../../../../lib/firebaseconfig";
import { doc, getDoc } from "firebase/firestore";

export async function GET(_, context) {
  const id = await context.params.id;

  if (!id) {
    return NextResponse.json({ error: "ID no proporcionado" }, { status: 400 });
  }

  try {
    const docRef = doc(db, "Favoritos", id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return NextResponse.json({ error: "Anime no encontrado" }, { status: 404 });
    }

    return NextResponse.json(docSnap.data(), { status: 200 });
  } catch (error) {
    console.error("Error al buscar el anime por ID:", error);
    return NextResponse.json({ error: "Error al buscar el anime" }, { status: 500 });
  }
}
