import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import Divider from "./Divider";
import { useSelector } from "react-redux";
import { IoNavigateCircleOutline } from "react-icons/io5";

const UserMenuMobile = () => {
  const handleLogOut = useLogout();
  const user = useSelector((state) => state.user);

  return (
    <>
      {/* user menu for mobile */}
      <div
        className={`text-[17px] bg-white p-4 block lg:hidden xl:hidden container mx-auto       
        `}
      >
        <h5 className="font-semibold mb-1">My Account</h5>
        <div className="flex items-center gap-1">
          <p>{user.name}</p>

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
    </>
  );
};

export default UserMenuMobile;
