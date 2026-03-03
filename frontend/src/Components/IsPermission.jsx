import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../common/Loader";

const IsPermission = ({ children }) => {
  const user = useSelector((state) => state.user);
  if (user.loader) {
    return <Loader />;
  }

  const isAuthenticated = user._id !== "";

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};

export default IsPermission;
