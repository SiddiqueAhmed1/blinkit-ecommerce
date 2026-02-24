import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle the logout functionality
  const handleLogOut = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/v1/logout`,
      );

      if (response.data.success) {
        dispatch(logout());
        localStorage.clear();
        navigate("/");
        toast.warning(response.data.message, {
          position: "top-center",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return handleLogOut;
};

export default useLogout;
