import About from "../pages/About";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SearchPage from "../pages/SearchPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import ForgotPasswordOtp from "../pages/ForgotPasswordOtp";
import ResetPassword from "../pages/ResetPassword";
import VerifyForgotPasswordOtp from "../pages/VerifyForgotPasswordOtp";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordOtp />,
      },
      {
        path: "/verify-forgot-password-otp",
        element: <VerifyForgotPasswordOtp />,
      },
      {
        path: "/reset-password",
        element: <ResetPassword />,
      },
    ],
  },
]);

export default browserRouter;
