import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loader from "../common/Loader";
import { setLoading } from "../features/userSlice";

const IsPermission = ({ children }) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  if (user.loader) {
    dispatch(setLoading(true));
  }

  const isAuthenticated = user._id !== "";

  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};

export default IsPermission;
