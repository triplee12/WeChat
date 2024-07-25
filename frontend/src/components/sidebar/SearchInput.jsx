import { useState } from "react"
import { IoSearchSharp } from "react-icons/io5"
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

function SearchInput() {
    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversation();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search < 3) {
            return toast.error("Search must be at least 3 character long!")
        }
        const conversation = conversations.find((q) => q.username.toLowerCase().includes(search.toLowerCase()));
        if (conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else {
            return toast.error("No such user found");
        }
    }
    return (
        <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input type="text" className="input input-bordered rounded-full" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type="submit" className="btn btn-circle bg-green-700 text-white">
                <IoSearchSharp className="w-6 h-6 outline-none" />
            </button>
        </form>
    )
}

export default SearchInput