import {Router} from "express";
import {authMiddleware} from "../middlewares/auth.middleware.js";
import {getWatchLater,addVideoToWatchLater,removeVideoFromWatchLater} from "../controllers/watchLater.controller.js";
const router = Router();

router.get("/watch-later",authMiddleware,getWatchLater);
router.post("/watch-later/:videoId",authMiddleware,addVideoToWatchLater);
router.delete("/watch-later/:videoId",authMiddleware,removeVideoFromWatchLater);

export default router;
