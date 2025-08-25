import { IoCartOutline, IoCloseSharp, IoLogInOutline } from "react-icons/io5";
import Search from "./Search";
import { Link, useLocation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../public/images/Capture-removebg-preview.png";
import { useSelector } from "react-redux";
import { MdArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import UserMenu from "./UserMenu";
import { useEffect, useState } from "react";

const Header = () => {
  const user = useSelector((state) => state.user);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const location = useLocation();

  // to close automatic user menu after logged in sucessfully
  useEffect(() => {
    if (openUserMenu) {
      setOpenUserMenu(false);
    }
  }, [location.pathname]);

  return (
    <>
      <header className="sticky top-0 w-full shadow pb-3 lg:pb-0 bg-white ">
        <div className="lg:max-w-[1300px] xl:max-w-[1600px] m-auto flex justify-between items-center p-2">
          {/* header logo part */}
          <div className="header-left lg:w-[25%]">
            <Link to={"/"} className="inline-block">
              <img
                className="h-full lg:w-40 w-28 sm:w-32 md:w-36 object-contain"
                src={logo}
                alt=""
              />
            </Link>
          </div>

          {/* search components */}
          <div className="w-full mr-6 hidden lg:block">
            <Search />
          </div>

          {/* header login part mobile */}
          <div className="lg:w-[25%]">
            <div className="relative">
              <button className="lg:hidden xl:hidden mr-5 text-neutral-600 ">
                {user._id ? (
                  <div>
                    <Link to={"/user"}>
                      <FaRegUserCircle size={28} />
                    </Link>
                  </div>
                ) : (
                  <Link to={"/login"}>
                    <IoLogInOutline size={28} />
                  </Link>
                )}
              </button>
            </div>

            {/* header logged in user menu for desktop */}
            <div className="header-account  hidden lg:flex gap-15">
              {user._id ? (
                <div className="flex items-center align-middle relative">
                  <div
                    className="flex gap-1 cursor-pointer"
                    onClick={() => setOpenUserMenu((prevStae) => !prevStae)}
                  >
                    <p className="text-[22px]">Account</p>

                    {openUserMenu ? (
                      <MdOutlineArrowDropUp size={30} />
                    ) : (
                      <MdArrowDropDown size={30} />
                    )}
                  </div>
                  <div className="absolute w-52 left-0 top-17 shadow-lg">
                    {openUserMenu && <UserMenu />}
                  </div>
                </div>
              ) : (
                <button className="text-xl">
                  <Link to={"/login"}>Login</Link>
                </button>
              )}

              <button className="bg-green-700 flex px-8 py-2 gap-2 rounded-[10px] items-center cursor-not-allowed w-[100%]">
                <span className="text-3xl cursor-not-allowed text-white transform animate-bounce">
                  <IoCartOutline />
                </span>
                <p className="text-white font-semibold w-[100%]">My Cart</p>
              </button>
            </div>
          </div>
        </div>
        <div className="lg:hidden px-4 ">
          <Search />
        </div>
      </header>
    </>
  );
};

export default Header;
