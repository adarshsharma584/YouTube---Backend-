import {Router} from "express";
import {authMiddleware} from "../middlewares/auth.middleware.js";
import {getLikedVideos,addVideoToLikedVideos,removeVideoFromLikedVideos} from "../controllers/likedVideos.controller.js";

const router = Router();

router.get("/liked-videos",authMiddleware,getLikedVideos);
router.post("/liked-videos/:videoId",authMiddleware,addVideoToLikedVideos);
router.delete("/liked-videos/:videoId",authMiddleware,removeVideoFromLikedVideos);

export default router;

