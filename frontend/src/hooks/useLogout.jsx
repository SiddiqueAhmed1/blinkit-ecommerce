import { useDispatch } from "react-redux";
import { logout } from "../features/userSlice";
import { toast } from "react-toastify";
import axios from "axios";

const useLogout = () => {
  const dispatch = useDispatch();

  // handle the logout functionality
  const handleLogOut = async () => {
    try {
      const response = await axios.get("http://localhost:5050/api/v1/logout");

      if (response.data.success) {
        dispatch(logout());
        localStorage.clear();
        toast.info("Logout Successfull", {
          position: "top-center",
          autoClose: "3000",
        });
      }
    } catch (error) {
      toast.error("Logout Failed");
    }
  };

  return handleLogOut;
};

export default useLogout;
