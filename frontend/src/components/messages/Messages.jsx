import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "../skeletons/messageSkeleton";

export const Messages = () => {
    const { loading, messages } = useGetMessages();
    return (
        <div className="px-4 flex-1 overflow-auto">
            {!loading && messages.length > 0 && messages.map((message) => (
                <Message key={message._id} message={message} />
            ))}
            {loading && [...Array(10)].map((_, indx) => <MessageSkeleton key={indx} />)}
            {!loading && messages.length === 0 && (<p className="text-center">Send a message to start the conversation</p>)}
        </div>
    );
};

export default Messages;