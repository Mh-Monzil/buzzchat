import axios from "axios";
import { useState } from "react";
import useAuth from "./useAuth";
import toast from "react-hot-toast";

const useLogout = () => {
    const {setUser} = useAuth();
  const [loading, setLoading] = useState(false);

  const logout = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/auth/logout");
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem('chat-user');
      setUser(null);
    } catch (error) {
        toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {loading, logout}
};

export default useLogout;