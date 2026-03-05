import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import fetchUserDetails from "./common/FetchUserDetails";
import { useEffect } from "react";
import "./common/Axios";
import { setLoading, setUserDetails } from "./features/userSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      dispatch(setLoading(true));
      const user = await fetchUserDetails();

      if (user) {
        dispatch(setUserDetails(user.data));
      } else {
        dispatch(setUserDetails(null));
      }
    } catch (error) {
      console.log("fetch user data error", error);
      dispatch(setUserDetails(null));
    } finally {
      dispatch(setLoading(false));
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
