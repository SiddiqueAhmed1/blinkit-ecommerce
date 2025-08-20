import { IoArrowBack, IoSearchOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import useMobile from "../hooks/useMobile";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile] = useMobile();

  const isSearchPage = location.pathname === "/search";

  const redirectSearchPage = () => {
    navigate("/search");
  };

  return (
    <>
      {/* for desktop version */}
      <div
        onClick={redirectSearchPage}
        className="lg:block  hidden header-search cursor-text w-full border-2 border-gray-200 focus-within:border-amber-500 rounded-[10px] bg-neutral-50 h-14 px-5 group "
      >
        <div className="flex w-full h-full items-center gap-4 ">
          <span className="text-2xl group-focus-within:text-amber-500">
            <IoSearchOutline />
          </span>
          {!isSearchPage ? (
            // not in search page
            <div>
              <p>
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    'Search "Sugar" ',
                    1000,
                    'Search "Butter" ',
                    1000,
                    'Search "Rice" ',
                    1000,
                    'Search "Egg" ',
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </p>
            </div>
          ) : (
            <div className="w-full h-full">
              <input
                autoFocus
                type="text"
                className=" h-full w-full border-0 outline-none bg-transparent "
                placeholder="Search for atta dal and more"
              />
            </div>
          )}
        </div>
      </div>

      {/* for mobile version */}
      <div className="lg:hidden  header-search cursor-text sm:w-[100%] lg:w-[50%] border-2 border-gray-200 rounded-[10px] bg-neutral-50 h-14 px-5 focus-within:border-amber-500 group">
        <div className="flex w-full h-full items-center gap-3">
          {isMobile && isSearchPage ? (
            <Link
              onClick={(e) => e.stopPropagation()}
              to={"/"}
              className="text-2xl group-focus-within:text-amber-500"
            >
              <IoArrowBack />
            </Link>
          ) : (
            <span className="text-2xl">
              <IoSearchOutline />
            </span>
          )}

          {!isSearchPage ? (
            // not in search page
            <div onClick={redirectSearchPage}>
              <p className="text-[9px] text-neutral-700 ">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    'Search "Sugar" ',
                    1000,
                    'Search "Butter" ',
                    1000,
                    'Search "Rice" ',
                    1000,
                    'Search "Egg" ',
                    1000,
                  ]}
                  speed={50}
                  style={{ fontSize: "2em" }}
                  repeat={Infinity}
                />
              </p>
            </div>
          ) : (
            <div className="w-full h-full">
              <input
                autoFocus
                type="text"
                className=" h-full w-full border-0 outline-none bg-transparent"
                placeholder="Search for atta dal and more"
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Search;
