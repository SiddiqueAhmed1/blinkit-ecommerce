import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Divider from "../Components/Divider";
import { MdClose } from "react-icons/md";
import axios from "axios";
import { useState } from "react";
import { uploadAvatar } from "../features/userSlice";
import { toast } from "react-toastify";

const UserAvatarUpload = ({ close }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(false);

  // handle avatar upload
  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) {
      return;
    }

    const formdata = new FormData();
    formdata.append("avatar", file);

    try {
      setLoader(true);
      const response = await axios.put(
        `${import.meta.env.VITE_API_URL}/api/v1/avatar`,
        formdata,
      );
      dispatch(uploadAvatar(response.data.avatar));
      close();
      toast.success("Avatar upload successfully done", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      <section className="fixed w-full h-full top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-neutral-900/60">
        <div className="p-4  lg:w-80 lg:h-80 w-80 h-80 sm:w-80 sm:h-80 md:w-80 md:h-80  flex-col flex justify-center items-center bg-white rounded">
          <div className="flex justify-between w-full">
            <h1 className="text-lg font-semibold mb-1">Change Avatar</h1>
            <MdClose size={28} onClick={close} className="cursor-pointer" />
          </div>
          <div className="w-full">
            <Divider />
          </div>
          {user.avatar ? (
            <img
              className="mt-3 w-32 h-32 object-cover border-2 rounded-4xl"
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
