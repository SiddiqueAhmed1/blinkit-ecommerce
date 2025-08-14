import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import fetchUserDetails from "./common/FetchUserDetails";
import { useEffect } from "react";
import "./common/Axios";
import { setUserDetails } from "./features/userSlice";

const App = () => {
  const fetchUser = async () => {
    try {
      const user = await fetchUserDetails();
      console.log("user data", user.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
