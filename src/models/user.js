import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: String,
    lastname: String,
    age: Number
})

export default mongoose.model.User ||  mongoose.model('User',schema)