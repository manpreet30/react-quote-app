import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./shared/Header";
import Routers from "./Routers";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />
    </BrowserRouter>
  );
}

export default App;
