import { useState } from "react";
import UserAvatarUpload from "./UserAvatarUpload";
import { useSelector } from "react-redux";
import { FaRegUserCircle } from "react-icons/fa";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [openUserAvatarModal, setOpenUserAvatarModal] = useState(false);

  return (
    <>
      <div className="w-96 lg:my-5 lg:w-[100%] ">
        <div className="ml-5">
          {user.avatar ? (
            <div className="">
              <img className="rounded w-52" src={user.avatar} alt="" />
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
            Edit
          </button>
        </div>

        {openUserAvatarModal && (
          <UserAvatarUpload close={() => setOpenUserAvatarModal(false)} />
        )}

        {/* user details */}
        <div className="my-5 text-left">
          <h1>My Information</h1>
          <form className="flex flex-col ">
            <input
              className="border border-neutral-400 rounded p-4 my-2 bg-neutral-50 inline-block  focus:border-amber-400 outline-0"
              type="text"
              placeholder="Type your name"
            />
            <input
              className="border border-neutral-400 rounded p-4 my-2 bg-neutral-50 inline-block  focus:border-amber-400 outline-0"
              type="text"
              placeholder="Your email"
            />
            <input
              className="border border-neutral-400 rounded p-4 my-2 bg-neutral-50 inline-block  focus:border-amber-400 outline-0"
              type="text"
              placeholder="your password"
            />
            <button type="submit" className=" bg-amber-400 ">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Profile;
