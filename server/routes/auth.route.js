import {Router} from "express";
import { register, login, logout, refreshToken } from "../controllers/auth.controller.js";  
import {authMiddleware} from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", authMiddleware, logout);
router.post("/refresh-token", authMiddleware, refreshToken);

export default router;
