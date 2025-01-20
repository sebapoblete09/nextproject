import mongoose, { mongo } from "mongoose";

//defino la coleccion o tablba de los animes favoritos
const AnimeScheme = new mongoose.Scheme({
    id: {type: Number, required: true},
    tittle: {type: String,required:true},
    synopsis: {type: String,required:true},
    image: String,
    isFav: {type: Boolean, default:true},
    estado: {type: Boolean,default: "Pendiente"}
});

export default mongoose.models.Anime || mongoose.model("Anime",AnimeScheme);