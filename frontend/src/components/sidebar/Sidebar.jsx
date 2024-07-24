import Conversations from "./Conversations";
import { LogoutButton } from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
    return (
        <div className="border-r border-slate-500 px-3 flex flex-col">
            <SearchInput />
            <Conversations />
            <LogoutButton />
        </div>
    );
}

export default Sidebar;