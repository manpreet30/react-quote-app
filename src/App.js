import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./shared/Header";
import Routers from "./Routers";
import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, Toast } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setErrorMessage } from "./store/Actions/authActions";

function App() {
  const [showError, setShowError] = useState(false);
  const { errorMessage } = useSelector((s) => s.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowError(Boolean(errorMessage));
  }, [errorMessage]);

  const onCloseToast = () => {
    dispatch(setErrorMessage(false));
    setShowError(false);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routers />
      <ToastContainer position="top-end">
        <Toast bg="danger" autohide={true} delay={2000} show={showError} onClose={onCloseToast}>
          <Toast.Header>
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body>{errorMessage}</Toast.Body>
        </Toast>
      </ToastContainer>
    </BrowserRouter>
  );
}

export default App;
