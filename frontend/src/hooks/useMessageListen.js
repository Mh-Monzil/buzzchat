import { useEffect } from "react";
import useConversation from "../store/useConversation";
import useSocket from "./useSocket";

const useMessageListen = () => {
  const { socket } = useSocket();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, messages, setMessages]);
};

export default useMessageListen;
