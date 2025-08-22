import profileImg from "../../public/tim.jpg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="my-5">
        <div className="w-40 h-50 rounded-full text-center">
          <img className="" src={profileImg} alt="" />

          <button className="bg-amber-300 py-2 px-5 my-4 inline-block cursor-pointer">
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
