import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../common/Loader";

const IsPermission = ({ children }) => {
  const { loader, _id } = useSelector((state) => state.user);

  if (loader) return <Loader />;

  const isAuthenticated = !!_id;

  if (!isAuthenticated) return <Navigate to={"/login"} replace />;

  return children;
};

export default IsPermission;
