import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setToken } from "../store/Actions/authActions";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setToken(null));
    navigate("/login");
  }, [dispatch, navigate]);

  return <></>;
};
export default Logout;
