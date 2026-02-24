import { useEffect, useState } from "react";
import UserAvatarUpload from "./UserAvatarUpload";
import { useDispatch, useSelector } from "react-redux";
import { FaRegUserCircle } from "react-icons/fa";
import axios from "axios";
import { setUserDetails } from "../features/userSlice";
import { toast } from "react-toastify";
import fetchUserDetails from "../common/FetchUserDetails";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);
  const [openUserAvatarModal, setOpenUserAvatarModal] = useState(false);
  const [userData, setUserData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    mobile: user?.mobile || "",
  });

  //handleInput change
  const handleInput = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    if (user) {
      setUserData({
        name: user?.name || "",
        email: user?.email || "",
        mobile: user?.mobile || "",
      });
    }
  }, [user]);

  // form submit for user details
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      user.name === userData.name &&
      user.email === userData.email &&
      user.mobile === userData.mobile
    ) {
      return toast.error("Any one field value must be change", {
        position: "top-center",
        autoClose: 2000,
      });
    }

    try {
      setLoader(true);
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/v1/update-user-details`,
        userData,
      );

      const { data: responseData } = response;

      if (responseData.success) {
        toast.success("Updated successfully", {
          position: "top-center",
          autoClose: 2000,
        });
        const getUserData = await fetchUserDetails();
        dispatch(setUserDetails(getUserData.data));
      }
    } catch (error) {
      toast.error(error.response.data.message, {
        position: "top-center",
        autoClose: 2000,
      });
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <div className="lg:my-5 ">
        <div className="lg:ml-5 text-center lg:text-left">
          {user.avatar ? (
            <div className="">
              <img
                className="rounded w-52 mx-auto lg:m-0"
                src={user.avatar}
                alt=""
              />
            </div>
          ) : (
            <div className="">
              <FaRegUserCircle size={80} />
            </div>
          )}

          <button
            onClick={() => setOpenUserAvatarModal((prev) => !prev)}
            className="bg-amber-300 py-2 px-5 my-4 inline-block cursor-pointer"
          >
            Change profile
          </button>
        </div>

        {/* user modal open when state true */}
        {openUserAvatarModal && (
          <UserAvatarUpload close={() => setOpenUserAvatarModal(false)} />
        )}

        {/* user details */}
        <div className="my-5 text-left">
          <h1>My Information</h1>
          <form onSubmit={handleSubmit} className="flex flex-col ">
            <input
              onChange={handleInput}
              name="name"
              required
              value={userData.name}
              className="border border-neutral-400 rounded p-4 my-2 bg-neutral-50 inline-block  focus:border-amber-400 outline-0"
              type="text"
            />
            <input
              onChange={handleInput}
              name="email"
              required
              value={userData.email}
              className="border border-neutral-400 rounded p-4 my-2 bg-neutral-50 inline-block  focus:border-amber-400 outline-0"
              type="text"
            />
            <input
              onChange={handleInput}
              name="mobile"
              required
              value={userData.mobile}
              className="border border-neutral-400 rounded p-4 my-2 bg-neutral-50 inline-block  focus:border-amber-400 outline-0"
              type="text"
              placeholder="Your mobile"
            />
            <button
              type="submit"
              className="py-4 border-amber-200 border-2 text-amber-400 font-semibold text-2xl cursor-pointer hover:bg-amber-300 hover:text-white hover:border-amber-200 outline-0 hover:outline-0"
            >
              {loader ? "Loading..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
