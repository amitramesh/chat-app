import User from '../models/user.model.js';
import Message from '../models/message.model.js';

export const getUsersSidebar = async (req, res) => {

    try {

        const loggedInUser = req.user.id;
        const users = await User.find({ _id: { $ne: loggedInUser } }).select("-password");
        //const users = await User.find({ _id: { $ne: new mongooes.Types.ObjectId(loggedInUser)} }).select("-password");
        res.status(200).json(users);

    } catch (error) {
        console.log("Error in getUserSidebar", error.message);
        res.status(500).json({ message: "Internal server error" })
    }
}

export const getMessage = async (req, res) =>{
    try {
        const myId = req.user.id;
        const userToChatId = req.params.id;
        const messages = Message.find({
            $or:[
                {senderId: myId, receiverId:userToChatId},
                {receiverId:myId, senderId: userToChatId}
            ]
        });

        res.status(200).json(messages);

    } catch (error) {
        console.log("Error in getMessage function ",error.message);
        res.status(500).json({message:"Internal Server error"});
    }
}