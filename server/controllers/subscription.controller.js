import { Subscription } from "../models/subscription.model.js";

const addToSubscription = async (req, res) => {
    try {
        const userId = req.user.id;
        const channelId = req.params.channelId;
        if (!userId) {
            return res.status(401).json({ message: "User is unauthorized" });
        }
        if (!channelId) {
            return res.status(400).json({ message: "Channel id is required in params" });
        }

        // Toggle subscription: if exists, unsubscribe; otherwise subscribe
        const existing = await Subscription.findOne({ subscriber: userId, channel: channelId });
        if (existing) {
            await existing.deleteOne();
            return res.status(200).json({ message: "Unsubscribed successfully" });
        }

        const subscription = await Subscription.create({ subscriber: userId, channel: channelId });
        return res.status(201).json({ message: "Subscribed successfully", subscription });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

const getSubscriptionsForUser = async (req, res) => {
    try {
        const userId = req.user.id;
        if (!userId) return res.status(401).json({ message: "User is unauthorized" });
        const subs = await Subscription.find({ subscriber: userId }).populate('channel');
        return res.status(200).json({ message: 'Subscriptions fetched successfully', subscriptions: subs });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export { addToSubscription, getSubscriptionsForUser };