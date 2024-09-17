import { useState } from "react";
import {Link} from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const {loading, login} = useLogin();
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(inputs);
  }


  return (
    <div className="flex items-center justify-center min-w-96 mx-auto">
      <div className="w-full h-full p-6 rounded-lg shadow-md border-2">
        <h1 className="text-3xl font-semibold text-center text-gray-300 pb-5">
          Login
          <span className="text-teal-400"> BuzzChat</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="font-semibold">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10 pb-1"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="font-semibold">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 pb-1"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div className="mt-6">
            <button disabled={loading} className="btn-block border rounded-md pt-1.5 pb-2 font-bold hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
            {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </div>
          <p className="mt-2">
            {"Don't"} have an account?{" "}
            <Link
              to="/signUp"
              className="text-sm hover:underline text-teal-500 inline-block"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

