import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

const UserAvatarUpload = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      <section className="fixed bg-neutral-900 bg-opacity-60 flex justify-center items-center left-0 right-0 top-0 bottom-0">
        <div className="bg-white p-4 w-20 h-20">
          {user.avatar ? (
            <img className="" src={user.avatar} alt="" />
          ) : (
            <div className="text-center flex justify-center">
              <FaRegUserCircle size={80} />
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default UserAvatarUpload;
