import { Route, Routes } from "react-router-dom";
import Quotes from "./Quotes/Quotes";
import Dashboard from "./Dashboard";

const Routers = () => {
  return (
    <Routes>
      <Route path="quotes" element={<Quotes />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
};

export default Routers;
