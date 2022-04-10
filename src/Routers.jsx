import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import PrivateRoute from "./components/PrivateRoute";
const Login = React.lazy(() => import("./components/Login"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const UserList = React.lazy(() => import("./components/User/UsersList"));
const Quotes = React.lazy(() => import("./components/Quotes/Quotes"));

const Routers = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route exact path="/quotes" element={<PrivateRoute />}>
          <Route exact path="/quotes" element={<Quotes />} />
        </Route>
        <Route exact path="/users" element={<PrivateRoute />}>
          <Route exact path="/users" element={<UserList />} />
        </Route>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default Routers;
