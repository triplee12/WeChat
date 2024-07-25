import { TiMessages } from "react-icons/ti";
import MessageInput from "./MessageInput";
import { Messages } from "./Messages";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";

export const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();
    useEffect(() => {
        return () => setSelectedConversation(null)
    }, [setSelectedConversation]);
    return (
        <div className="md:min-w-[450px] flex flex-col">
            {
                !selectedConversation ? (<NoChatSelected />) : (
                    <>
                        <div className="bg-green-700 px-4 py-2 mb-2">
                            <span className="label-text">To </span>
                            <span className="text-gray-400 font-bold">{ selectedConversation.username }</span>
                        </div>
                        <Messages />
                        <MessageInput />
                    </>
                )
            }
        </div>
    )
}

export default MessageContainer;

const NoChatSelected = () => {
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome!</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className="text-3xl md:text-6xl text-center" />
            </div>
        </div>
    )
}
