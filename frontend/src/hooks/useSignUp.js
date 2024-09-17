import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import useAuth from "./useAuth";

const useSignUp = () => {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const signUp = async (inputs) => {
    const { fullName, username, password, confirmPassword, gender } = inputs;

    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return toast.error("All fields are required");
    }
    if (password !== confirmPassword)
      return toast.error("Password do not match");

    if (password.length < 6)
      return toast.error("Password must be at least 6 characters");

    setLoading(true);
    try {
      const { data } = await axios.post("/api/auth/signup", inputs);
      console.log(data);
      if(data.error){
        throw new Error(data.error)
      }
      localStorage.setItem("chat-user", JSON.stringify(data));
      setUser(data);
      setLoading(false);
      toast.success("Registration successful")
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };
  return { signUp, loading };
};

export default useSignUp;
