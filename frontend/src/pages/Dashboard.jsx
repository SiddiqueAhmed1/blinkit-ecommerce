import React from "react";
import { useSelector } from "react-redux";
import UserMenu from "../Components/UserMenu";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const user = useSelector((state) => state.user);

  return (
    <>
      {/* user dashboard for desktop */}
      <section className=" bg-white">
        <div className="dashboard grid">
          {/* dashboard left */}
          <div className="">
            <UserMenu />
          </div>

          {/* dashboard content right */}
          <div>
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
