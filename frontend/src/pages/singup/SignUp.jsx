import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const { signUp, loading } = useSignUp();
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const handleGenderChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(inputs);
  };

  return (
    <div className="flex items-center justify-center min-w-96 mx-auto">
      <div className="w-full h-full p-6 rounded-lg shadow-md border-2">
        <h1 className="text-3xl font-semibold text-center text-gray-300 pb-5">
          Sign Up
          <span className="text-teal-400"> BuzzChat</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className="label p-2">
              <span className="font-semibold">Full Name</span>
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="mh monzil"
              className="w-full input input-bordered h-10 pb-1"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div className="mt-1">
            <label htmlFor="username" className="label p-2">
              <span className="font-semibold">Username</span>
            </label>
            <input
              id="username"
              type="username"
              placeholder="@mhmonzil"
              className="w-full input input-bordered h-10 pb-1"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div className="mt-1">
            <label htmlFor="password" className="label p-2">
              <span className="font-semibold">Password</span>
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10 pb-1"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div className="mt-1">
            <label htmlFor="confirmPassword" className="label p-2">
              <span className="font-semibold">Confirm Password</span>
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10 pb-1"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckbox
            onGenderChange={handleGenderChange}
            selectedGender={inputs.gender}
          />

          <div>
            <button disabled={loading} className="btn-block border rounded-md pt-1.5 pb-2 font-bold hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
          <p className="mt-2">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-sm hover:underline text-teal-500 inline-block"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
