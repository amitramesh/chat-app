import express from 'express'
import { Login, Logout, SignUp, UpdateProfile ,CheckAuth} from '../controller/auth.controller.js';
import protectRoute from '../middleware/auth.middleware.js';
import multerUpload from '../lib/multerUpload.js';

const authRoute = express.Router();

authRoute.post("/signup",SignUp);

authRoute.post("/login",Login);

authRoute.get("/logout",Logout);

authRoute.post('/profileUpdate', protectRoute,multerUpload.single('profilePic'), UpdateProfile)

authRoute.get('/checkUser',protectRoute, CheckAuth)

export default authRoute;