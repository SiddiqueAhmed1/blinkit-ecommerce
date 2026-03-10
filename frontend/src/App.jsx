import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import fetchUserDetails from "./common/FetchUserDetails";
import { useEffect } from "react";
import "./common/Axios";
import { setLoading, setUserDetails } from "./features/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAllCategory } from "./features/productSlice";

const App = () => {
  const dispatch = useDispatch();

  const fetchCategory = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/category/get-category`,
      );
      if (response?.data?.success) {
        dispatch(setAllCategory(response?.data?.data));
      }
    } catch (error) {
      console.log("get data error", error || error?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

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
    fetchCategory();
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
