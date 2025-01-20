import mongoose from "mongoose";

const MONGO_uri = process.env.MONGODB_URI;

if(!MONGO_uri) {
    throw new Error("Por favor, define la variable MONGO_URI en tu archivo .env.local")
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

//coneccion a la db
export async function connectDB(){
    if (cached.conn) {
        return cached.conn;
    }

   if(!cached.promise){
    cached.promise = mongoose.connect(MONGO_uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then((mongoose)=>mongoose);
   }
   cached.conn = await cached.promise;
   return cached.conn
}