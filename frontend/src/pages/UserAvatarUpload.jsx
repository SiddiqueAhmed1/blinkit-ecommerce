import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Divider from "../Components/Divider";
import { MdClose } from "react-icons/md";
import axios from "axios";
import profileImg from "../../public/tim.jpg";
import { useState } from "react";
import { uploadAvatar } from "../features/userSlice";

const UserAvatarUpload = ({ close }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  // handle avatar upload
  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];

    const formdata = new FormData();
    formdata.append("avatar", file);

    const response = (
      await axios.post("http://localhost:5050/api/avatar", file)
    ).data;
    dispatch(uploadAvatar(response.avatar));
  };

  return (
    <>
      <section className="fixed w-full h-full top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-neutral-900/60">
        <div className="p-4 w-80 h-80 flex-col flex justify-center items-center bg-white rounded">
          <div className="flex justify-between w-full">
            <h1 className="text-lg font-semibold mb-1">Change Avatar</h1>
            <MdClose size={28} onClick={close} className="cursor-pointer" />
          </div>

          <Divider />
          {user.avatar ? (
            <img
              className="mt-3 w-32 h-32 object-cover"
              src={user.avatar}
              alt=""
            />
          ) : (
            <div className="text-center flex justify-center mt-3">
              <FaRegUserCircle size={80} />
            </div>
          )}
          <form className="flex justify-center items-center flex-col">
            <label
              className="bg-amber-400 hover:bg-amber-300 rounded py-3 px-4 my-5 cursor-pointer text-lg"
              htmlFor="avatarInput"
            >
              {loader ? "Uploading..." : "Upload"}
            </label>
            <input
              onChange={handleAvatarUpload}
              className="hidden"
              id="avatarInput"
              type="file"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default UserAvatarUpload;
