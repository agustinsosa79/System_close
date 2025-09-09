import mongoose from "mongoose";



export const connectMongoDB = async () => {
    const MONGO_URL = process.env.MONGODB_URI
     try {
        await mongoose.connect(MONGO_URL)
    console.log('Connecting database');
    
     } catch (err) {
        console.error('Error to connect database',err)
     }
}