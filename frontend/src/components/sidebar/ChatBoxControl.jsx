import { BiLogOut } from "react-icons/bi";
import useAuth from "../../hooks/useAuth";
import useLogout from "../../hooks/useLogout";

const ChatBoxControl = () => {
  const {user} = useAuth();
  const {logout} = useLogout()

  return (
    <div className="flex items-center justify-between mt-6">
      <div className="flex items-center gap-4">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img
              src={user.profilePic}
              alt=""
            />
          </div>
        </div>
        <div className="text">
            <p className="font-semibold">{user.fullName}</p>
        </div>
      </div>
      <button
        onClick={logout}
        className="btn btn-circle bg-transparent border-none hover:bg-[#111] flex items-center justify-center"
      >
        <BiLogOut className="w-6 h-6 outline-none" />
      </button>
    </div>
  );
};

export default ChatBoxControl;
