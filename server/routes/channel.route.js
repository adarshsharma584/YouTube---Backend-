import {Router} from "express";
import {authMiddleware} from "../middlewares/auth.middleware.js";
import {roleMiddleware} from "../middlewares/role.middleware.js";
import {createChannel,updateChannel,deleteChannel,getChannelById,getAllChannels,getChannelsByUserId} from "../controllers/channel.controllers.js";

const router = Router();

router.post("/create",authMiddleware,roleMiddleware( ["creator"]),createChannel);
router.put("/update/:channelId",authMiddleware,roleMiddleware(["creator"]),updateChannel);
router.delete("/delete/:channelId",authMiddleware,roleMiddleware(["creator"]),deleteChannel);
router.get("/get/:channelId",authMiddleware,roleMiddleware(["creator"]),getChannelById);
router.get("/get-all",authMiddleware,roleMiddleware(["creator"]),getAllChannels);
router.get("/get-all-by-user-id",authMiddleware,roleMiddleware(["creator"]),getChannelsByUserId);

export default router;
