import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  //input field state
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
  });

  // show hide password and confirm password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPass, setShowConfPass] = useState(false);

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

    if (!input.name || !input.email || !input.password || !input.confPassword) {
      return toast.error("All fields are required!", {
        position: "top-center",
        autoClose: 3000,
      });
    }

    // password and confirm password matching
    if (input.password !== input.confPassword) {
      return toast.error("Password and confirm password must be same!", {
        position: "top-center",
        autoClose: 3000,
      });
    }

    // get all user
    const allUser = (
      await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/user`)
    ).data;

    //check exist
    const existUser = allUser.find((user) => user.email === input.email);

    if (existUser) {
      return toast.error("user already exist!", {
        position: "top-center",
        autoClose: 3000,
      });
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/register`,
        input,
      );
      setInput({
        name: "",
        email: "",
        password: "",
        confPassword: "",
      });

      toast.success("Registration successfully done", {
        position: "top-center",
        autoClose: 3000,
      });
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="register-user xl:w-[800px] lg:w-[700px] w-[400px] md:w-[600px] mx-auto  py-16 ">
        <div className="form-title text-3xl">
          <h1>Hi, Welcome to Blinkit</h1>
        </div>

        <div className="register-form bg-white py-6 mt-6">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mt-2  px-6 ">
              <label className="text-xl" htmlFor="name">
                Name
              </label>
              <input
                autoFocus
                className="border border-gray-200 p-4 focus-within:border-green-400 outline-none mb-3 bg-gray-50"
                id="name"
                onChange={handleInput}
                name="name"
                value={input.name}
                type="text"
                placeholder="Type your name"
              />
            </div>
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
            <div className="flex flex-col gap-2 mt-2  px-6 ">
              <label className="text-xl" htmlFor="confPassword">
                Confirm Password
              </label>
              <div className="flex items-center relative">
                <input
                  className="border w-[100%] border-gray-200 p-4 focus-within:border-green-400 outline-none mb-3 bg-gray-50"
                  id="confPassword"
                  onChange={handleInput}
                  name="confPassword"
                  value={input.confPassword}
                  type={showConfPass ? "text" : "password"}
                  placeholder="Type your confirm password"
                />
                <div
                  onClick={() => setShowConfPass((prevState) => !prevState)}
                  className="cursor-pointer text-2xl w-6 h-auto overflow-hidden text-center absolute right-5 top-4"
                >
                  {showConfPass ? <IoEyeOff /> : <IoEye />}
                </div>
              </div>
            </div>
            <div className="ml-6 mt-3">
              <button
                // disabled={!validatData ? true : false}
                type="submit"
                className={`
                  ${
                    validatData
                      ? "bg-green-600 hover:bg-green-500"
                      : "bg-gray-600 hover:bg-gray-500"
                  }
                    px-8 py-4 cursor-pointer text-xl text-amber-100 `}
              >
                Register
              </button>
              <div className="mt-3">
                <p>
                  Already have an account?{" "}
                  <Link
                    className="text-yellow-500 hover:text-yellow-400 text-lg font-semibold"
                    to={"/login"}
                  >
                    login
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

export default Register;
