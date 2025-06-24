import { IoCartOutline } from "react-icons/io5";
import Search from "./Search";
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 w-full shadow">
        <div className="max-w-[1300px] m-auto flex justify-between items-center p-4">
          <div className="header-left lg:w-[25%]">
            <Link to={"/"} className="inline-block">
              <img
                className="h-full w-40 object-contain"
                src="../public/images/Capture-removebg-preview.png
            "
                alt=""
              />
            </Link>
          </div>
          <div className="w-[100%] hidden">
            <Search />
          </div>
          <div className="lg:w-[25%]">
            <button className="lg:hidden">
              <FaRegUser />
            </button>
            <div className="header-login  sm:hidden lg:flex justify-end gap-15 hidden">
              <button className="text-xl">
                <a href="">Login</a>
              </button>
              <button className="bg-gray-300 flex p-4 gap-2 rounded-[10px] items-center cursor-not-allowed">
                <span className="text-3xl cursor-not-allowed text-white transform hover:scale-150">
                  <IoCartOutline />
                </span>
                <p className="text-white font-extrabold">My Cart</p>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
