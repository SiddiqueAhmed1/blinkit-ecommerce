import { IoCartOutline, IoCloseSharp, IoLogInOutline } from "react-icons/io5";
import Search from "./Search";
import { Link, useLocation } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
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
      <header className="sticky top-0 w-full shadow py-3 bg-white z-40">
        <div className="max-w-[1600px]  w-full mx-auto flex justify-between items-center px-4 lg:px-8">
          {/* Logo */}
          <div className="lg:w-[15%] px-4">
            <Link to={"/"} className="inline-block">
              <img
                className="h-full lg:w-36 w-28 sm:w-32 md:w-36 object-contain"
                src={blinkLogo}
                alt="Logo"
              />
            </Link>
          </div>

          {/* Search desktop */}
          <div className="w-[65%] hidden lg:block">
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
          <div className="lg:w-[20%] flex justify-center px-4 ">
            <div className="hidden lg:flex lg:gap-3 xl:gap-5 ">
              <div className="flex items-center justify-center min-w-[80px]">
                {user._id ? (
                  <div className="relative">
                    <div
                      className="flex items-center cursor-pointer"
                      onClick={() => setOpenUserMenu((prev) => !prev)}
                    >
                      <p className="text-[18px] ">Account</p>
                      {openUserMenu ? (
                        <MdOutlineArrowDropUp size={30} />
                      ) : (
                        <MdArrowDropDown size={30} />
                      )}
                    </div>

                    {openUserMenu && (
                      <div className="absolute w-52 left-0 top-14 shadow-lg bg-white">
                        <UserMenu />
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex align-middle">
                    <Link to={"/login"} className="text-[20px] ">
                      Login
                    </Link>
                  </div>
                )}
              </div>
              {/* cart button */}
              <div className="flex items-center">
                <button className="bg-green-700 flex lg:px-4 lg:py-3 xl:p gap-2 rounded-[10px] items-center cursor-not-allowed justify-center]">
                  <span className="text-3xl cursor-not-allowed text-white transform animate-bounce ">
                    <IoCartOutline />
                  </span>
                  <p className="text-white font-semibold  ">My Cart</p>
                </button>
              </div>
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
