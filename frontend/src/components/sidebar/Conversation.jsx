const Conversation = ({ conversation, lastIndx }) => {
    return <>
        <div className="flex gap-2 items-center hover:bg-green-700 rounded p-2 py-1 cursor-pointer">
            <div className="avatar-online">
                <div className="w-12 rounded-full">
                    <img src={conversation.profilePic} alt={conversation.username} />
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between">
                    <p className="font-bold text-green-200">{conversation.username}</p>
                </div>
            </div>
        </div>
        {!lastIndx && <div className="divider my-0 py-0 h-1"></div>}
    </>
}

export default Conversation