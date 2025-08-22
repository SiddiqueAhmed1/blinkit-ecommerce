import React from "react";
import profileImg from "../../public/tim.jpg";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <div className="my-5">
        <div className="w-40 h-50 rounded-full text-center">
          <img className="" src={profileImg} alt="" />
          <Link className="bg-amber-300 py-3 p-6 my-6">Upload</Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
