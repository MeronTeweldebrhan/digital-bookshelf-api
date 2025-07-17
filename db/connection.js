import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const uri = process.env.MONGO_URI; 

const db =async ()=>{
    mongoose.connect(uri)
    try {
       console.log("Connected successfully to MongoDB!");
    } catch (error) {
      console.error("Error connecting to MongoDB:", err);
    }
      
}

export default db