import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to Chat Application")
});

app.get('/api/auth/login',(req,res)=>{

    res.status(200).json({message:"user sign in"});
});

app.get("/api/auth/logout",(req,res)=>{
    res.status(200).json({message:"User logout"})
});

app.post('/api/auth/signup',(req,res)=>{
    res.status(200).json({message:"User has register"});
});

app.listen(3000,()=>{
    console.log("Server is running PORT ",process.env.PORT);
});

