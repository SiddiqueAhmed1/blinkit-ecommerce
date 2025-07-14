import About from "../pages/About";
import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Service from "../pages/Service";
import App from "../App";
import SearchPage from "../pages/SearchPage";
import Register from "../pages/Register";
import Login from "../pages/Login";

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
        path: "/service",
        element: <Service />,
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
    ],
  },
]);

export default browserRouter;
