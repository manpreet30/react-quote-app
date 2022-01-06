import { Route, Routes } from "react-router-dom";
import Quotes from "./components/Quotes/Quotes";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route exact path="/quotes" element={<PrivateRoute />}>
        <Route exact path="/quotes" element={<Quotes />} />
      </Route>
      <Route exact path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default Routers;
