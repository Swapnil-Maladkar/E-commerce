import mongoose from 'mongoose'
import dotenv from'dotenv';
dotenv.config();

const connectDB=async ()=>{
    try {
        // const conn=await mongoose.connect('mongodb+srv://swapnilmaladkar70:Swapnil%402003@cluster0.uvbuh.mongodb.net/');
        const conn=await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected To MongoDB ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error Connecting MongoDB ${error}`);
    }
}




export default connectDB;