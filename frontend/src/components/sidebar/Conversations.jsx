import Conversation from "./Conversation"
import useGetConversations from "../../hooks/useGetConversations";

function Conversations() {
    const { loading, conversations } = useGetConversations();
    return (
        <div className="py-2 flex flex-col overflow-auto">
            {Array.isArray(conversations) && conversations.map((conversation, indx) => (
                <Conversation key={conversation._id} conversation={conversation} lastIndx={indx === conversations.length - 1} />
            ))}
            {loading ? <span className="loading loading-ring"></span> : null}
        </div>
    )
}

export default Conversations