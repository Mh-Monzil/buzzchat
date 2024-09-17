import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import SignUp from "./pages/singup/SignUp";
import Home from "./pages/home/home";
import useAuth from "./hooks/useAuth";

const App = () => {
  const {user} = useAuth();
  return (
    <div className="bg-[#1C1C1C] h-screen w-full flex items-center justify-center">
      <Routes>
        <Route path="/" element={user ?  <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/signUp" element={user ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
