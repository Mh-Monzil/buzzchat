import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { RiAttachment2 } from "react-icons/ri";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="px-4 my-3">
        <div className="w-full flex items-center gap-2">
          <button className=" btn btn-circle bg-transparent border-none hover:bg-[#111]">
            <RiAttachment2 className="w-6 h-6 outline-none" />
          </button>
          <input
            type="text"
            className="border text rounded-lg block w-full px-4 py-2.5 bg-[##1D232A] border-teal-600 text-white"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            disabled={loading}
            type="submit"
            className="btn btn-circle bg-transparent border-none hover:bg-[#111]"
          >
            <IoSend className="w-5 h-5 outline-none" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
