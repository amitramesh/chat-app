import express from 'express'
import { Login, Logout, SignUp, UpdateProfile} from '../controller/auth.controller.js';
import protectRoute from '../middleware/auth.middleware.js';

const authRoute = express.Router();

authRoute.post("/signup",SignUp);

authRoute.post("/login",Login);

authRoute.get("/logout",Logout);

authRoute.get('/profileUpdate', protectRoute, UpdateProfile)

export default authRoute;