import UserMenu from "../Components/UserMenu";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      {/* user dashboard for desktop */}
      <section className=" bg-white min-h-96">
        <div className="xl:w-[1600px] lg:w-[1300px] p-4 mx-auto bg-white flex justify-center ">
          {/* dashboard left */}
          <div className="sticky lg:w-[20%] lg:border-r-2 lg:border-neutral-300">
            <UserMenu />
          </div>

          {/* dashboard content right */}
          <div className=" lg:w-[80%] w-[100%] p-2">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
