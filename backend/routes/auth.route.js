import express from 'express'
import { Login, Logout, SignUp } from 
'../controller/auth.controller.js';

const authRoute = express.Router();

authRoute.post("/signup",SignUp);

authRoute.post("/login",Login);

authRoute.get("/logout",Logout);

export default authRoute;