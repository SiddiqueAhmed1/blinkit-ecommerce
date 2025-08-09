import { useEffect, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "../common/SummaryApi";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // protect side effect
  useEffect(() => {
    if (!location?.state?.email) {
      navigate("/forgot-password");
    }
  }, [location, navigate]);

  //input field state
  const [input, setInput] = useState({
    newPassword: "",
    confirmNewPass: "",
  });

  // show hide password and confirm password
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  // input field data taken
  const handleInput = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  // form field validation
  const validatData = Object.values(input).every((el) => el);

  useEffect(() => {
    if (!location?.state?.data?.success) {
      navigate("/");
    }
  }, [location, navigate]);

  // form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    //validation
    if (!input.newPassword || !input.confirmNewPass) {
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

    if (input.newPassword !== input.confirmNewPass) {
      return toast.error("New password & confirm new password must be same", {
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
      const response = await axios.put(`${baseUrl}/api/v1/resetPassword`, {
        ...input,
        email: location?.state?.email,
      });

      console.log("data", response);

      if (response?.data?.success) {
        toast.success("Password reset done");
        navigate("/home");
      } else {
        toast.error(response?.data?.message || "Reset failed");
      }

      setInput({
        newPassword: "",
        confirmNewPass: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-user xl:w-[800px] lg:w-[700px] w-[400px] md:w-[600px] mx-auto  py-16 ">
        <div className="form-title text-3xl">
          <h1>Reset Password</h1>
        </div>

        <div className="login-form bg-white py-6 mt-6">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 mt-2  px-6 ">
              <label className="text-xl" htmlFor="password">
                New Password
              </label>
              <div className="flex items-center relative">
                <input
                  className="border w-[100%] border-gray-200 p-4 focus-within:border-green-400 outline-none mb-3 bg-gray-50"
                  id="password"
                  onChange={handleInput}
                  name="newPassword"
                  value={input.newPassword}
                  type={showPassword ? "text" : "password"}
                  placeholder="New password"
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
              <label className="text-xl" htmlFor="confirmPass">
                Confirm Password
              </label>
              <div className="flex items-center relative">
                <input
                  className="border w-[100%] border-gray-200 p-4 focus-within:border-green-400 outline-none mb-3 bg-gray-50"
                  id="confirmPass"
                  onChange={handleInput}
                  name="confirmNewPass"
                  value={input.confirmNewPass}
                  type={showConfPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                />
                <div
                  onClick={() => setShowConfPassword((prevState) => !prevState)}
                  className="cursor-pointer text-2xl w-6 h-auto overflow-hidden text-center absolute right-5 top-4"
                >
                  {showConfPassword ? <IoEyeOff /> : <IoEye />}
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
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
