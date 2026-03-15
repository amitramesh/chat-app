import express from 'express'

const authRoute = express.Router();

authRoute.get("/signup",(req,res)=>{
    res.status(200).json({message:"User has register"});
});

authRoute.post("/login",(req,res)=>{
     res.status(200).json({message:"user sign in"});
});

authRoute.get("/logout",(req,res)=>{
res.status(200).json({message:"User logout"})
});

export default authRoute;