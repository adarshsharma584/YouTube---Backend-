import {Channel} from "../models/channel.model.js";

const createChannel = async (req,res) => {
    try {
        const {name,description,avatar} = req.body;
        const userId = req.user.id;
        if(!userId){
            return res.status(400).json({message:"Unauthorized User"});
        }
        if(!name || !description || !avatar){
            return res.status(400).json({message:"All fields are required"});
        }
        const channel = await Channel.create({
            name,
            description,
            avatar,
            owner:userId
        });
        return res.status(201).json({message:"Channel created successfully",channel});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

const updateChannel = async (req,res) => {
    try {
        const {name,description,avatar} = req.body;
        const userId = req.user.id;
        if(!userId){
            return res.status(400).json({message:"Unauthorized User"});
        }
        if(!name || !description || !avatar){
            return res.status(400).json({message:"All fields are required"});
        }
        const channel = await Channel.findByIdAndUpdate(req.params.channelId,{name,description,avatar},{new:true}).select("-password");
        return res.status(200).json({message:"Channel updated successfully",channel});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

const deleteChannel = async (req,res) => {
    try {
        const userId = req.user.id;
        if(!userId){
            return res.status(400).json({message:"Unauthorized User"});
        }
        const channel = await Channel.findByIdAndDelete(req.params.channelId);
        return res.status(200).json({message:"Channel deleted successfully",channel});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

const getChannelById = async (req,res) => {
    try {
        const userId = req.user.id;
        if(!userId){
            return res.status(400).json({message:"Unauthorized User"});
        }
        const channel = await Channel.findById(req.params.channelId).select("-password");
        return res.status(200).json({message:"Channel fetched successfully",channel});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

const getAllChannels = async (req,res) => {
    try {
        const userId = req.user.id;
        if(!userId){
            return res.status(400).json({message:"Unauthorized User"});
        }
        const channels = await Channel.find().select("-password");
        return res.status(200).json({message:"Channels fetched successfully",channels});
    } catch (error) {
        return res.status(500).json({message:error.message});
    }
}

const getChannelsByUserId = async (req,res) => {
    try {
        const userId = req.user.id;
        if(!userId){
            return res.status(400).json({message:"Unauthorized User"});
        }
        const channels = await Channel.find({owner:userId}).select("-password");
        return res.status(200).json({message:"Channels fetched successfully",channels});
    } catch (error) {
        return res.status(500).json({message:error.message});
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