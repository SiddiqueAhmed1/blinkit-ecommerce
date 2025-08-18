import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Divider from "./Divider";
import axios from "axios";
import { logout } from "../features/userSlice";
import { toast } from "react-toastify";

const UserMenu = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogOut = async () => {
    try {
      const response = await axios.get("http://localhost:5050/api/v1/logout");

      if (response.data.success) {
        dispatch(logout());
        localStorage.clear();
        toast.success("Logout Successfull");
      }
    } catch (error) {
      toast.error("Logout Failed");
    }
  };

  return (
    <>
      {/* for desktop */}
      <div className="text-[17px] bg-white p-4  lg:hidden">
        <h5 className="font-semibold mb-1">My Account</h5>
        <p>{user.name}</p>

        <Divider />
        <div className="grid gap-2 text-[17px] ">
          <Link> My Orders</Link>
          <Link> Save Adress</Link>
          <Link onClick={handleLogOut}>Log Out</Link>
        </div>
      </div>

      {/* for mobile */}
      <div className="text-[17px] bg-white p-4 hidden lg:block">
        <h5 className="font-semibold mb-1">My Account</h5>
        <p>{user.name}</p>

        <Divider />
        <div className="grid gap-2 text-[17px] ">
          <Link> My Orders</Link>
          <Link> Save Adress</Link>
          <Link onClick={handleLogOut}>Log Out</Link>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
