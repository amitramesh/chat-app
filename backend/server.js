import express from 'express';
import dotenv from 'dotenv';
import authRoute from './routes/auth.route.js';

dotenv.config();
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to Chat Application")
});

app.use("/api/auth/",authRoute);

app.listen(3000,()=>{
    console.log("Server is running PORT ",process.env.PORT);
});

