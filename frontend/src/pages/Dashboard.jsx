import React from "react";
import { useSelector } from "react-redux";
import UserMenu from "../Components/UserMenu";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      {/* user dashboard for desktop */}
      <section className=" bg-white">
        <div className="xl:w-[1600px] lg:w-[1300px] p-4 mx-auto flex ">
          {/* dashboard left */}
          <div className="sticky w-[20%]">
            <UserMenu />
          </div>

          {/* dashboard content right */}
          <div className=" w-[80%]">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
