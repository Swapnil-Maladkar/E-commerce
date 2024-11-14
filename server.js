import express from 'express';
import dotenv from'dotenv';
import morgan from 'morgan';

import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';
import cors from 'cors';
//config dotenv
dotenv.config();

//database config;


connectDB();




const app=express();

//middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use("/api/v1/auth",authRoute);
app.get('/',(req,res)=>{
    res.send('<h1>Hello World</HI>');
})

const PORT=process.env.PORT || 8080;

app.listen(PORT,()=>{
    console.log(`server running on  ${PORT} on ${process.env.DEV_MODE} MODE`)
}) 