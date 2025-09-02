import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import fetchUserDetails from "./common/FetchUserDetails";
import { useEffect } from "react";
import "./common/Axios";
import { setUserDetails } from "./features/userSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const user = await fetchUserDetails();
      dispatch(setUserDetails(user.data));
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
