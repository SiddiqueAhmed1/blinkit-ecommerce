import { useState } from "react";
import profileImg from "../../public/tim.jpg";
import UserAvatarUpload from "./UserAvatarUpload";
import { useSelector } from "react-redux";
import { FaRegUserCircle } from "react-icons/fa";

const Profile = () => {
  const user = useSelector((state) => state.user);
  const [openUserAvatarModal, setOpenUserAvatarModal] = useState(false);

  return (
    <>
      <div className="my-5">
        <div className="w-40 h-50 rounded-full text-center">
          {user.avatar ? (
            <img className="" src={user.avatar} alt="" />
          ) : (
            <div className="text-center flex justify-center">
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

        {openUserAvatarModal && <UserAvatarUpload />}
      </div>
    </>
  );
};

export default Profile;
