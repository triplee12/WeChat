const Conversation = require("../models/conversationModel")
const Message = require("../models/messageModel");

const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;
        let conversation = await Conversation.findOne({
            members: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                members: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message
        });
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller: ", error);
        res.status(500).json({ "error": "Internal server error" });
    }
};

const getMessages = async (req, res) => {
    try {
        const { id: receiverId } = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({ members: { $all: [senderId, receiverId] } })
            .populate("messages");
        if (!conversation) {
            return res.status(200).json([]);
        }
        const messages = conversation.messages;
        res.status(200).json({ messages });
    } catch (error) {
        console.error("Error in getMessages", error);
        res.status(500).json({ "error": "Internal server error" });
    }
}

module.exports = { sendMessage, getMessages };