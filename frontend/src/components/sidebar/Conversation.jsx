import PropTypes from "prop-types";
import useConversation from "../../store/useConversation";
import useSocket from "../../hooks/useSocket";

const Conversation = ({ conversation, lastIdx }) => {
  const { fullName, profilePic, _id } = conversation;

  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === _id;

  const { onlineUsers } = useSocket();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        onClick={() => setSelectedConversation(conversation)}
        className={`flex gap-2 items-center hover:bg-gray-800 rounded px-1 py-2 cursor-pointer ${
          isSelected ? "bg-[#111]" : ""
        }`}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={profilePic} alt="" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <p className="font-bold text-gray-200">{fullName}</p>
          <p>Last msg</p>
        </div>
      </div>
      {!lastIdx && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

Conversation.propTypes = {
  conversation: PropTypes.object,
  lastIdx: PropTypes.bool,
};

export default Conversation;
