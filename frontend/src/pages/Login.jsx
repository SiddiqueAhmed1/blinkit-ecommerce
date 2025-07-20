import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import axios, { all } from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();

  //input field state
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  // show hide password and confirm password
  const [showPassword, setShowPassword] = useState(false);

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

    if (!input.email || !input.password) {
      return toast.error("All fields are required!", {
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

    try {
      const response = (
        await axios.post("http://localhost:5050/api/v1/login", input)
      ).data;

      setInput({
        email: "",
        password: "",
      });

      toast.success("Login successfully done", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/home");
    } catch (error) {
      if (error.response.data.message === "Password is incorrect") {
        return toast.error(error.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      if (error.response.data.message === "Invalid email address") {
        return toast.error(error.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <>
      <div className="login-user xl:w-[800px] lg:w-[700px] w-[400px] md:w-[600px] mx-auto  py-16 ">
        <div className="form-title text-3xl">
          <h1>Hi, Login to continue</h1>
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
                placeholder="Type your name"
              />
            </div>

            <div className="flex flex-col gap-2 mt-2  px-6 ">
              <label className="text-xl" htmlFor="password">
                Password
              </label>
              <div className="flex items-center relative">
                <input
                  className="border w-[100%] border-gray-200 p-4 focus-within:border-green-400 outline-none mb-3 bg-gray-50"
                  id="password"
                  onChange={handleInput}
                  name="password"
                  value={input.password}
                  type={showPassword ? "text" : "password"}
                  placeholder="Type your password"
                />
                <div
                  onClick={() => setShowPassword((prevState) => !prevState)}
                  className="cursor-pointer text-2xl w-6 h-auto overflow-hidden text-center absolute right-5 top-4"
                >
                  {showPassword ? <IoEyeOff /> : <IoEye />}
                </div>
              </div>
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
                Login
              </button>
              <div className="mt-3">
                <p>
                  Forgot password?{" "}
                  <Link
                    className="text-yellow-500 hover:text-yellow-400 text-lg font-semibold"
                    to={"/forgot-password"}
                  >
                    Reset
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

export default Login;
