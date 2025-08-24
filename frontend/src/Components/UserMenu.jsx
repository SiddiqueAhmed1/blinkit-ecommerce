import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import Divider from "./Divider";
import { IoNavigateCircleOutline } from "react-icons/io5";
import useLogout from "../hooks/useLogout";

const UserMenu = () => {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const handleLogOut = useLogout();

  return (
    <>
      {/* user menu for desktop */}
      <div
        className={`text-[17px] bg-white p-4 hidden lg:block xl:block  ${
          location.pathname === "/dashboard/profile" ? "shadow" : ""
        }
            
        `}
      >
        <h5 className="font-semibold mb-1">My Account</h5>
        <div className="flex items-center gap-1">
          <p>{user.name.slice(0, 14)}..</p>
          <Link to={"/dashboard/profile"}>
            <IoNavigateCircleOutline color="#FFD230" size={20} />
          </Link>
        </div>

        <Divider />
        <div className="grid gap-2 text-[17px] ">
          <Link to="/dashboard/myorders"> My Orders</Link>
          <Link to={"/dashboard/address"}> Save Adress</Link>
          <Link onClick={handleLogOut}>Log Out</Link>
        </div>
      </div>

      {/* user menu for mobile */}
      <div
        className={`text-[17px] text-left bg-white shadow-2xl 2 p-4 lg:hidden xl:hidden`}
      >
        <h5 className="font-semibold mb-1">My Account</h5>
        <p>{user.name}</p>

        <Divider />
        <div className="grid gap-2 text-[17px] ">
          <Link to="/dashboard/myorders"> My Orders</Link>
          <Link to={"/dashboard/address"}> Save Adress</Link>
          <Link onClick={handleLogOut}>Log Out</Link>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
