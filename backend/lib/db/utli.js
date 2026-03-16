import jwt from 'jsonwebtoken';

export const generateToken = async (userId, res)=>{
    console.log("User Id ", userId)
const token = jwt.sign(userId,process.env.JWT_SECRET);
console.log("Token: ", token)
res.cookie("jwt",token,{
    maxAge:7*24*60*60*1000, //MS
    httpOnly:true, //prevent XSS cross site scripting
    sameSite:"strict", //CSRF attacks cross-site request forgery attacks
    secure:process.env.NODE_ENV !== "development",
})
console.log("Token ", token)
return token;

}

