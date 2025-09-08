import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import Divider from "./Divider";
import { useSelector } from "react-redux";
import { IoNavigateCircleOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";

const UserMenuMobile = () => {
  const handleLogOut = useLogout();
  const user = useSelector((state) => state.user);

  return (
    <>
      {/* user menu for mobile */}
      <div
        className={`text-[17px] bg-white p-4 block lg:hidden xl:hidden  py-6   
        `}
      >
        <button className="block ml-auto">
          <MdClose size={28} />
        </button>
        <div>
          <h5 className="font-semibold mb-1">My Account</h5>
          <div className="flex items-center gap-1 ">
            <p>{user.name}</p>

            <Link to={"/dashboard/profile"}>
              <IoNavigateCircleOutline color="#FFD230" size={20} />
            </Link>
          </div>

          <Divider />
          <div className="grid gap-2 text-[17px] ">
            <Link className="hover:bg-amber-300 p-1" to="/dashboard/category">
              Category
            </Link>
            <Link
              className="hover:bg-amber-300 p-1"
              to="/dashboard/sub-category"
            >
              Sub Category
            </Link>
            <Link
              className="hover:bg-amber-300 p-1"
              to="/dashboard/upload-product"
            >
              Upload Product
            </Link>
            <Link className="hover:bg-amber-300 p-1" to="/dashboard/product">
              Product
            </Link>
            <Link className="p-1" to="/dashboard/myorders">
              {" "}
              My Orders
            </Link>
            <Link className="p-1" to={"/dashboard/address"}>
              {" "}
              Save Adress
            </Link>
            <Link className="p-1" onClick={handleLogOut}>
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMenuMobile;
