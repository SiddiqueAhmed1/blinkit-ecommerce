import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Divider from "./Divider";
import { IoNavigateCircleOutline } from "react-icons/io5";
import useLogout from "../hooks/useLogout";

const UserMenu = () => {
  const user = useSelector((state) => state.user);
  const handleLogOut = useLogout();

  const handleShortName = (name) => {
    if (name.length > 14) {
      return name.slice(0, 14) + "...";
    } else {
      return name;
    }
  };

  console.log(user);

  return (
    <>
      {/* user menu for desktop */}
      <div
        className={`text-[17px] bg-white hidden lg:block xl:block pt-4
        `}
      >
        <div className="">
          <div className="px-4">
            <h5 className="font-semibold mb-1 ">My Account</h5>
            <div className="flex items-center gap-1">
              {user.role === "ADMIN" ? (
                <p>
                  {handleShortName(user.name)}{" "}
                  <span className="text-green-500 font-semibold text-sm">
                    (Admin)
                  </span>
                </p>
              ) : (
                <p>{handleShortName(user.name)}</p>
              )}

              <Link to={"/dashboard/profile"}>
                <IoNavigateCircleOutline color="#FFD230" size={20} />
              </Link>
            </div>
          </div>

          <Divider />
          <div className="grid gap-1 text-[17px] ml-2 px-2 pb-4">
            {user.role === "ADMIN" && (
              <Link className="hover:bg-amber-300 p-1" to="/dashboard/category">
                Category
              </Link>
            )}

            {user.role === "ADMIN" && (
              <Link
                className="hover:bg-amber-300 p-1"
                to="/dashboard/sub-category"
              >
                Sub Category
              </Link>
            )}

            {user.role === "ADMIN" && (
              <Link
                className="hover:bg-amber-300 p-1"
                to="/dashboard/upload-product"
              >
                Upload Product
              </Link>
            )}

            <Link className="hover:bg-amber-300 p-1" to="/dashboard/product">
              Product
            </Link>
            <Link className="hover:bg-amber-300 p-1" to="/dashboard/myorders">
              My Orders
            </Link>
            <Link className="hover:bg-amber-300 p-1" to={"/dashboard/address"}>
              Save Adress
            </Link>
            <Link className="hover:bg-amber-300 p-1" onClick={handleLogOut}>
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMenu;
