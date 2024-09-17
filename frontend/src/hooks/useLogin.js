import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "./useAuth";

const useLogin = () => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false);

  const login = async (inputs) => {
    const { username, password } = inputs;

    if (!username || !password) {
      return toast.error("All fields are required");
    }

    try {
      const { data } = await axios.post("/api/auth/login", inputs);
      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("chat-user", JSON.stringify(data));
      setUser(data);
      
    } catch (error) {
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;
