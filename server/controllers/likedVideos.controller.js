import { LikedVideos } from "../models/likedVideos.model.js";

const getLikedVideos = async (req, res) => {
    try {
        const userId = req.user.id;
        if (!userId) {
            return res.status(400).json({ message: "Unauthorized User" });
        }
        const likedVideos = await LikedVideos.findOne({ userId }).populate("videoId");
        if (!likedVideos) {
            return res.status(200).json({
                message: "Liked videos fetched successfully",
                likedVideos: []
            });
        }
        return res.status(200).json({
            message: "Liked videos fetched successfully",
            likedVideos: likedVideos.videoId
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const addVideoToLikedVideos = async (req, res) => {
    try {
        const userId = req.user.id;
        const videoId = req.params.videoId;

        if (!userId || !videoId) {
            return res.status(400).json({ message: "Unauthorized User" });
        }
        let likedVideos = await LikedVideos.findOne({ userId });
        if (!likedVideos) {
            likedVideos = await LikedVideos.create({ userId, videoId: [videoId] });
            return res.status(201).json({ message: "Video added to liked videos" });
        }
        // prevent duplicates
        if (!likedVideos.videoId.includes(videoId)) {
            likedVideos.videoId.push(videoId);
            await likedVideos.save();
        }
        return res.status(200).json({ message: "Video added to liked videos" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const removeVideoFromLikedVideos = async (req, res) => {
    try {
        const userId = req.user.id;
        const videoId = req.params.videoId;

        if (!userId || !videoId) {
            return res.status(400).json({ message: "Unauthorized User" });
        }
        const likedVideos = await LikedVideos.findOne({ userId });
        if (!likedVideos) {
            return res.status(404).json({ message: "Liked videos not found" });
        }
        likedVideos.videoId.pull(videoId);
        await likedVideos.save();
        return res.status(200).json({ message: "Video removed from liked videos" });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export {
    getLikedVideos,
    addVideoToLikedVideos,
    removeVideoFromLikedVideos
}

