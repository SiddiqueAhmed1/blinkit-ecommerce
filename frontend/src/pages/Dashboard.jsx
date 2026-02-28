import UserMenu from "../Components/UserMenu";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      {/* user dashboard for desktop */}
      <section className=" bg-white min-h-96 py-4 ">
        <div className="xl:max-w-[1600px] lg:max-w-[1300px]  mx-auto bg-white flex justify-center ">
          {/* dashboard left */}
          <div className="py-8 sticky top-0 max-h-[calc(100vh-300px)] lg:w-[20%] xl:border-r border-neutral-300 mt-[-35px]">
            <UserMenu />
          </div>

          {/* dashboard content right */}
          <div className=" lg:w-[80%] w -[100%] p-2">
            <Outlet />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
