import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../common/Loader";

const IsPermission = ({ children }) => {
  const { isInitializing, _id } = useSelector((state) => state.user);

  if (isInitializing === null) return <Loader />;

  const isAuthenticated = !!_id;
  console.log(isAuthenticated);

  if (!isAuthenticated) return <Navigate to={"/login"} replace />;

  return children;
};

export default IsPermission;
