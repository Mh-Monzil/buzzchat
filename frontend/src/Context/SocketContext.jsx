import { createContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import io from "socket.io-client";

export const SocketContext = createContext();

const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const socket = io("https://buzzchat-backend-88im.onrender.com", {
        query: {
          userId: user._id,
        },
      });

      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => {
        socket.close();
        setSocket(null);
      };
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [user]);

  const SocketInfo = { socket, onlineUsers };
  return (
    <SocketContext.Provider value={SocketInfo}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContextProvider;
