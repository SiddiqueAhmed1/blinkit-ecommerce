import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import Divider from "../Components/Divider";

const UserAvatarUpload = ({ close }) => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <section
        onClick={close}
        className="fixed w-full h-full top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-neutral-900/60"
      >
        <div className="p-4 w-72 h-72 flex-col flex justify-center items-center bg-white">
          <h1 className="text-lg font-semibold mb-2">Change Avatar</h1>
          <Divider />
          {user.avatar ? (
            <img className="mt-3" src={user.avatar} alt="" />
          ) : (
            <div className="text-center flex justify-center mt-3">
              <FaRegUserCircle size={80} />
            </div>
          )}
          <form action="" className="flex justify-center items-center flex-col">
            <label
              className="bg-amber-400 py-3 px-4 my-5 cursor-pointer text-lg"
              htmlFor="avatarInput"
            >
              Upload
            </label>
            <input className="hidden" id="avatarInput" type="file" />
          </form>
        </div>
      </section>
    </>
  );
};

export default UserAvatarUpload;
