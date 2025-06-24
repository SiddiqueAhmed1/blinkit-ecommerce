import { IoSearchOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isSearchPage = location.pathname === "/search";

  const redirectSearchPage = () => {
    navigate("/search");
  };

  return (
    <>
      <div
        onClick={redirectSearchPage}
        className="lg:block  hidden header-search cursor-text w-full border-2 border-gray-200 rounded-[10px] bg-neutral-50 h-14 px-5"
      >
        <div className="flex w-full h-full items-center gap-4">
          <span className="text-2xl">
            <IoSearchOutline />
          </span>
          {!isSearchPage ? (
            // not in search page
            <div>
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
      <div
        onClick={redirectSearchPage}
        className="lg:hidden  header-search cursor-text sm:w-[100%] lg:w-[50%] border-2 border-gray-200 rounded-[10px] bg-neutral-50 h-14 px-5"
      >
        <div className="flex w-full h-full items-center gap-4">
          <span className="text-2xl">
            <IoSearchOutline />
          </span>
          {!isSearchPage ? (
            // not in search page
            <div>
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
