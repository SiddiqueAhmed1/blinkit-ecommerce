import { IoCartOutline } from "react-icons/io5";
import Search from "./Search";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 w-full shadow pb-3 lg:pb-0 bg-white">
        <div className="lg:max-w-[1300px] xl:max-w-[1600px] m-auto flex justify-between items-center p-2">
          <div className="header-left lg:w-[25%]">
            <Link to={"/"} className="inline-block">
              <img
                className="h-full lg:w-40 w-28 sm:w-32 md:w-36 object-contain"
                src="../public/images/Capture-removebg-preview.png
            "
                alt=""
              />
            </Link>
          </div>
          <div className="w-full mr-6 hidden lg:block">
            <Search />
          </div>
          <div className="lg:w-[25%]">
            <button className="lg:hidden mr-5 text-neutral-600">
              <FaRegUser size={25} />
            </button>
            <div className="header-login  hidden lg:flex gap-15">
              <button className="text-xl">
                <Link to={"/login"}>Login</Link>
              </button>
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
