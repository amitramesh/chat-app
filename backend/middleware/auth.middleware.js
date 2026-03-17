import jwt from 'jsonwebtoken';
import User from '../models/user.model.js'

const protectRoute = async (req,res,next) =>{
    console.log("Cookies", req.cookies)
    const token = req.cookies.jwt;
    
    if(!token){
        res.status(401).json({message:"Invalid token"});
    }

    const decode = jwt.verify(token,process.env.JWT_SECRET);

    console.log("Decode ", typeof decode);
    if(!decode){
        res.status(401).json({message: "Invalid token"});
    }

    const user = await User.findById(decode).select("-password");

    if(!user){
        res.status(400).json({message: "User does not found"});
    }

    req.user = user;
    next();
}

export default protectRoute;