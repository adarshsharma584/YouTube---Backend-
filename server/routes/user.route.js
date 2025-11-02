import { Router } from "express";
import { getUserProfile, updateUserProfile, changePassword, deleteUser } from "../controllers/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { uploadAvatar } from "../middlewares/multer.middleware.js";

const router = Router();

router.get("/profile", authMiddleware, getUserProfile);
router.patch("/profile", authMiddleware, uploadAvatar, updateUserProfile);
router.patch("/change-password", authMiddleware, changePassword);
router.delete("/delete-account", authMiddleware, deleteUser);

export default router;
