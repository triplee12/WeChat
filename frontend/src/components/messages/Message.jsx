import { useAuthContext } from '../../contexts/AuthContext';
import useConversation from "../../zustand/useConversation";
import extractTime from "../../utils/extractTime";

const Message = ({ message }) => {
    const { authUser } = useAuthContext();
    const { selectedConversation } = useConversation();
    const me = message.senderId === authUser._id;
    const chatClassName = me ? 'chat-end' : 'chat-start';
    const profilePic = me ? authUser.profilePic : selectedConversation?.profilePic;
    const msgBgColor = me ? 'bg-green-700' : "";
    return (
        <div className={`chat ${chatClassName}`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={profilePic} alt="chat profile image" />
                </div>
            </div>
            <div className={`chat-bubble text-white ${msgBgColor} pb-2`}>{message.message}</div>
            <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{extractTime(message.createdAt)}</div>
        </div>
    )
}

export default Message;