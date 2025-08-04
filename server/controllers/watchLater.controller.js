import {WatchLater} from "../models/watchLater.model.js";
import {Video} from "../models/video.model.js";

const getWatchLater = async (req,res) => {
    try {
        const userId = req.user.id;
        if(!userId){
            return res.status(400).json({message:"Unauthorized User"});
        }
        const watchLater = await WatchLater.findOne({userId}).populate("videoId");
        if(!watchLater){
            return res.status(404).json({message:"User not found"});
        }
        return res.status(200).json({watchLater:watchLater.videoId});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

const addVideoToWatchLater = async (req,res) => {
    try {
        const userId = req.user.id;
        const videoId = req.params.videoId;

        if(!userId || !videoId){
            return res.status(400).json({message:"Unauthorized User"});
        }
        const watchLater = await WatchLater.findOne({userId});
        if(!watchLater){
            return res.status(404).json({message:"User not found"});
        }
        watchLater.videoId.push(videoId);
        await watchLater.save();
        return res.status(200).json({message:"Video added to watch later"});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

const removeVideoFromWatchLater = async (req,res) => {
    try {
        const userId = req.user.id;
        const videoId = req.params.videoId;

        if(!userId || !videoId){
            return res.status(400).json({message:"Unauthorized User"});
        }
        const watchLater = await WatchLater.findOne({userId});
        if(!watchLater){
            return res.status(404).json({message:"User not found"});
        }
        watchLater.videoId.pull(videoId);
        await watchLater.save();
        return res.status(200).json({message:"Video removed from watch later"});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

export {
    getWatchLater,
    addVideoToWatchLater,
    removeVideoFromWatchLater
}

