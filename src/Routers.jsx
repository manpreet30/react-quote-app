import { Route, Routes } from "react-router-dom";
import Quotes from "./components/Quotes/Quotes";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Logout from "./components/Logout";
import PrivateRoute from "./components/PrivateRoute";

const Routers = () => {
  return (
    <Routes>
      <Route exact path="/quotes" element={<PrivateRoute />}>
        <Route exact path="/quotes" element={<Quotes />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default Routers;
