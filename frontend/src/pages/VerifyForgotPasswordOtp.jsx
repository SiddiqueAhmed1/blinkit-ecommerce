import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "../common/SummaryApi";

const VerifyForgotPasswordOtp = () => {
  const inputRef = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  //input field state
  const [data, setData] = useState(["", "", "", "", "", ""]);

  // form field validation
  const validatData = Object.values(data).every((el) => el);

  useEffect(() => {
    if (!location?.state?.email) {
      navigate("/forgot-password");
    }
  }, [navigate, location]);

  // otp submit function
  const otpSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `${baseUrl}/api/v1/verifyForgotPasswordOtp`,
        {
          otp: data.join(""),
          email: location?.state?.email,
        }
      );

      toast.success("OTP verification done", {
        position: "top-center",
        autoClose: 3000,
      });

      navigate("/reset-password", {
        state: {
          data: response.data,
          email: location?.state?.email,
        },
      });
    } catch (err) {
      console.log("Error:", err);
      toast.error("Invalid OTP or Server Error!", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <div className="login-user xl:w-[700px] lg:w-[700px] w-[400px] md:w-[600px] mx-auto  py-16">
        <div className="login-form bg-white py-6 mt-6">
          <h1 className="mx-6 text-3xl mb-8">Verify OTP</h1>
          <form onSubmit={otpSubmit}>
            <div className="flex mt-2 gap-3 lg:gap-2 justify-between mx-6">
              {data.map((item, index) => {
                return (
                  <>
                    <input
                      key={index + 1}
                      ref={(ref) => {
                        inputRef.current[index] = ref;
                        return ref;
                      }}
                      onChange={(e) => {
                        const value = e.target.value;
                        const newData = [...data];
                        newData[index] = value;
                        setData(newData);

                        if (value && index < 5) {
                          inputRef.current[index + 1].focus();
                        }
                      }}
                      maxLength={1}
                      className="border text-2xl font-semibold w-full text-center flex border-gray-200 p-4 focus-within:border-green-400 outline-none mb-3 bg-gray-50"
                      type="text"
                    />
                  </>
                );
              })}
            </div>

            <div className="mx-6 mt-3">
              <button
                type="submit"
                className={`
                  ${
                    validatData
                      ? "bg-green-600 hover:bg-green-500"
                      : "bg-gray-600 hover:bg-gray-500"
                  }
                    px-8 py-4 cursor-pointer text-xl text-amber-100 w-full`}
              >
                Verify Otp
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyForgotPasswordOtp;
