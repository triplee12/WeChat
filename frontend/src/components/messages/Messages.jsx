import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import Message from "./Message";
import MessageSkeleton from "../skeletons/messageSkeleton";
import useListenMessages from "../../hooks/useListenMessages";

export const Messages = () => {
    const { loading, messages } = useGetMessages();
    useListenMessages();
    const lastMsgRef = useRef()
    useEffect(() => {
        setTimeout(() => {
            lastMsgRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, [messages])
    
    return (
        <div className="px-4 flex-1 overflow-auto">
            {!loading && messages.length > 0 && messages.map((message) => (
                <div key={message._id} ref={lastMsgRef}>
                    <Message message={message} />
                </div>
            ))}
            {loading && [...Array(10)].map((_, indx) => <MessageSkeleton key={indx} />)}
            {!loading && messages.length === 0 && (<p className="text-center">Send a message to start the conversation</p>)}
        </div>
    );
};

export default Messages;