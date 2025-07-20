import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPasswordOtp = () => {
  const navigate = useNavigate();

  //input field state
  const [input, setInput] = useState({
    email: "",
  });

  // show hide password and confirm password

  // input field data taken
  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // form field validation
  const validatData = Object.values(input).every((el) => el);

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.email) {
      toast.error("All fields are required!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }

    const response = (
      await axios.put("http://localhost:5050/api/v1/forgotPasswordOtp", input)
    ).data;

    setInput({
      email: "",
    });

    toast.success("Otp Send to your provided email", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/verify-forgot-password");
  };

  return (
    <>
      <div className="login-user xl:w-[800px] lg:w-[700px] w-[400px] md:w-[600px] mx-auto  py-16 ">
        <div className="form-title text-3xl">
          <h1>Forgot Password?</h1>
        </div>

        <div className="login-form bg-white py-6 mt-6">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mt-2  px-6 ">
              <label className="text-xl" htmlFor="email">
                Email
              </label>
              <input
                className="border border-gray-200 p-4 focus-within:border-green-400 outline-none mb-3 bg-gray-50"
                id="email"
                onChange={handleInput}
                name="email"
                value={input.email}
                type="email"
                placeholder="Type your email"
              />
            </div>

            <div className="ml-6 mt-3">
              <button
                type="submit"
                className={`
                  ${
                    validatData
                      ? "bg-green-600 hover:bg-green-500"
                      : "bg-gray-600 hover:bg-gray-500"
                  }
                    px-8 py-4 cursor-pointer text-xl text-amber-100 `}
              >
                Send Otp
              </button>
              <div className="mt-3">
                <p>
                  Don't have account?{" "}
                  <Link
                    className="text-yellow-500 hover:text-yellow-400 text-lg font-semibold"
                    to={"/register"}
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPasswordOtp;
