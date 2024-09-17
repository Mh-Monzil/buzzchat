import ChatBoxControl from "./ChatBoxControl";
import Conversations from "./Conversations";
import SearchBox from "./SearchBox";
import SidebarHeader from "./SidebarHeader";


const Sidebar = () => {
    return (
        <div className="min-w-96 max-w-2xl border-r-[1px] border-zinc-700 p-4 flex flex-col">
            <SidebarHeader />
            <SearchBox />
            <Conversations />
            <ChatBoxControl />
        </div>
    );
};

export default Sidebar;