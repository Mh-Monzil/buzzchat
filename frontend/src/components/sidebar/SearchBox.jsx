import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { toast } from "react-hot-toast";
import useConversation from "../../store/useConversation";
import useGetConversations from "../../hooks/useGetConversations";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3)
      return toast.error("Please enter at least 3 characters to search...");

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else return toast.error("No user found!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex items-center gap-2 relative mb-2"
    >
      <input
        type="text"
        placeholder="Search..."
        className="w-full bg-[#1D232A] px-5 py-3 rounded-full border border-teal-600 text-white"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="absolute right-0 btn btn-circle bg-transparent border-none hover:bg-[#111]"
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchBox;
