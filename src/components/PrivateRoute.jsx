import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const token = useSelector((s) => s.auth.token);

  return token ? <Outlet /> : <Navigate to="/login" />;
};
export default PrivateRoute;
