import { Video } from "../models/video.model.js";
import { uploadOnCloudinary } from "../utils/uploadOnCloudinary.js";

const uploadVideo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const userId = req.user.id;

        if (!title || !description) {
            return res.status(400).json({ message: "Title and description are required" });
        }

        // Upload video file
        let videoUrl;
        if (req.files && req.files.video) {
            const videoFile = req.files.video[0];
            const cloudinaryResponse = await uploadOnCloudinary(videoFile.path, "videos");
            if (cloudinaryResponse) {
                videoUrl = cloudinaryResponse.secure_url;
            }
        }

        if (!videoUrl) {
            return res.status(400).json({ message: "Error uploading video" });
        }

        // Upload thumbnail if provided
        let thumbnailUrl;
        if (req.files && req.files.thumbnail) {
            const thumbnailFile = req.files.thumbnail[0];
            const cloudinaryResponse = await uploadOnCloudinary(thumbnailFile.path, "thumbnails");
            if (cloudinaryResponse) {
                thumbnailUrl = cloudinaryResponse.secure_url;
            }
        }

        // Create new video document
        const video = await Video.create({
            title,
            description,
            videoUrl,
            thumbnailUrl,
            owner: userId
        });

        return res.status(201).json({
            message: "Video uploaded successfully",
            video
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updateVideoThumbnail = async (req, res) => {
    try {
        const { videoId } = req.params;
        const userId = req.user.id;

        const video = await Video.findById(videoId);
        if (!video) {
            return res.status(404).json({ message: "Video not found" });
        }

        if (video.owner.toString() !== userId) {
            return res.status(403).json({ message: "Unauthorized to update this video" });
        }

        // Upload new thumbnail
        let thumbnailUrl;
        if (req.file) {
            const cloudinaryResponse = await uploadOnCloudinary(req.file.path, "thumbnails");
            if (cloudinaryResponse) {
                thumbnailUrl = cloudinaryResponse.secure_url;
            }
        }

        if (!thumbnailUrl) {
            return res.status(400).json({ message: "Error uploading thumbnail" });
        }

        // Update video document
        video.thumbnailUrl = thumbnailUrl;
        await video.save();

        return res.status(200).json({
            message: "Thumbnail updated successfully",
            video
        });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export {
    uploadVideo,
    updateVideoThumbnail
};