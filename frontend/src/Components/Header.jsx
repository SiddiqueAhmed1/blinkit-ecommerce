import { IoCartOutline, IoCloseSharp, IoLogInOutline } from "react-icons/io5";
import Search from "./Search";
import { Link, useLocation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../../public/images/Capture-removebg-preview.png";
import blinkLogo from "../../public/images/Blinkit_idCmcpCDCZ_1.png";
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
      <header className="sticky top-0 w-full shadow py-3 bg-white">
        <div className="max-w-[1600px] w-full mx-auto flex justify-between items-center px-4 lg:px-8">
          {/* Logo */}
          <div className="lg:w-[25%]">
            <Link to={"/"} className="inline-block">
              <img
                className="h-full lg:w-36 w-28 sm:w-32 md:w-36 object-contain"
                src={blinkLogo}
                alt="Logo"
              />
            </Link>
          </div>
          {/* Search desktop */}
          <div className="w-full mr-8 hidden lg:block">
            <Search />
          </div>

          {/* header login part mobile */}
          <div className="flex justify-end w-full lg:hidden ">
            <button>
              {user._id ? (
                <Link to={"/user"}>
                  <FaRegUserCircle size={30} className=" text-neutral-600 " />
                </Link>
              ) : (
                <Link to={"/login"}>
                  <IoLogInOutline size={30} className=" text-neutral-600 " />
                </Link>
              )}
            </button>
          </div>

          {/* Login part for desktop */}
          <div className="lg:w-[25%] flex justify-end">
            <div className="hidden lg:flex items-center gap-6">
              {user._id ? (
                <div
                  className="relative flex items-center gap-1 cursor-pointer"
                  onClick={() => setOpenUserMenu((prev) => !prev)}
                >
                  <p className="text-[22px]">Account</p>
                  {openUserMenu ? (
                    <MdOutlineArrowDropUp size={30} />
                  ) : (
                    <MdArrowDropDown size={30} />
                  )}
                  {openUserMenu && (
                    <div className="absolute w-52 left-0 top-16 shadow-lg bg-white">
                      <UserMenu />
                    </div>
                  )}
                </div>
              ) : (
                <Link to={"/login"} className="text-xl">
                  Login
                </Link>
              )}

              <button className="bg-green-700 flex px-6 py-2 gap-2 rounded-[10px] items-center cursor-not-allowed ml-6 w-full">
                <span className="text-3xl cursor-not-allowed text-white transform animate-bounce">
                  <IoCartOutline />
                </span>
                <p className="text-white font-semibold py-3">My Cart</p>
              </button>
            </div>
          </div>
        </div>

        {/* Search mobile */}
        <div className="lg:hidden px-4 mt-2">
          <Search />
        </div>
      </header>
    </>
  );
};

export default Header;
