import express from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';
import connectDB from './db/db.js';


dotenv.config();
const app = express();
connectDB();

app.get('/',(req,res)=>{
    res.send("Welcome to Chat Application")
});

app.use("/api/auth/",authRoute);

app.listen(3000,()=>{
    console.log("Server is running PORT ",process.env.PORT);
});

