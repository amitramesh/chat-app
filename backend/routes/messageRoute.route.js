import express from 'express';
import protectRoute from '../middleware/auth.middleware.js';
import { getUsersSidebar, getMessage } from '../controller/message.controller.js';

const messageRoute = express.Router();

messageRoute.get("/users", protectRoute, getUsersSidebar)

messageRoute.get("/:id", protectRoute, getMessage);

export default messageRoute;