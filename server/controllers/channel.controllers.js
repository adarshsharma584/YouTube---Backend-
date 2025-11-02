import { Channel } from "../models/channel.model.js";
import { uploadOnCloudinary } from "../utils/uploadOnCloudinary.js";

const createChannel = async (req, res) => {
    try {
        const { name, description } = req.body;
        const userId = req.user.id;
        if (!userId) {
            return res.status(400).json({ message: "Unauthorized User" });
        }
        if (!name || !description) {
            return res.status(400).json({ message: "Name and description are required" });
        }

        let avatarUrl;
        if (req.file) {
            const avatarResponse = await uploadOnCloudinary(req.file.path, "channel-avatars");
            if (avatarResponse) {
                avatarUrl = avatarResponse.secure_url;
            }
        }

        const channel = await Channel.create({
            name,
            description,
            avatar: avatarUrl,
            owner: userId
        });

        return res.status(201).json({ message: "Channel created successfully", channel });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const updateChannel = async (req, res) => {
    try {
        const { name, description } = req.body;
        const userId = req.user.id;
        if (!userId) {
            return res.status(400).json({ message: "Unauthorized User" });
        }

        const updateData = {
            name,
            description
        };

        // Handle avatar upload if file is provided
        if (req.file) {
            const avatarResponse = await uploadOnCloudinary(req.file.path, "channel-avatars");
            if (avatarResponse) {
                updateData.avatar = avatarResponse.secure_url;
            }
        }

        const channel = await Channel.findOneAndUpdate(
            { _id: req.params.channelId, owner: userId },
            updateData,
            { new: true }
        );

        if (!channel) {
            return res.status(404).json({ message: "Channel not found or unauthorized" });
        }

        return res.status(200).json({ message: "Channel updated successfully", channel });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const deleteChannel = async (req, res) => {
    try {
        const userId = req.user.id;
        if (!userId) {
            return res.status(400).json({ message: "Unauthorized User" });
        }
        const channel = await Channel.findByIdAndDelete(req.params.channelId);
        return res.status(200).json({ message: "Channel deleted successfully", channel });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getChannelById = async (req, res) => {
    try {
        const userId = req.user.id;
        if (!userId) {
            return res.status(400).json({ message: "Unauthorized User" });
        }
        const channel = await Channel.findById(req.params.channelId).select("-password");
        return res.status(200).json({ message: "Channel fetched successfully", channel });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getAllChannels = async (req, res) => {
    try {
        const userId = req.user.id;
        if (!userId) {
            return res.status(400).json({ message: "Unauthorized User" });
        }
        const channels = await Channel.find().select("-password");
        return res.status(200).json({ message: "Channels fetched successfully", channels });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getChannelsByUserId = async (req, res) => {
    try {
        const userId = req.user.id;
        if (!userId) {
            return res.status(400).json({ message: "Unauthorized User" });
        }
        const channels = await Channel.find({ owner: userId }).select("-password");
        return res.status(200).json({ message: "Channels fetched successfully", channels });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export {
    createChannel,
    updateChannel,
    deleteChannel,
    getChannelById,
    getAllChannels,
    getChannelsByUserId
}