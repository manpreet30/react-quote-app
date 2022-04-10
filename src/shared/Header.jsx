import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setToken } from "../store/Actions/authActions";

const Header = () => {
  const { token, user } = useSelector((s) => s.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onClickLogout = () => {
    dispatch(setToken(null));
    navigate("/login");
  };

  return (
    <Nav>
      {token ? (
        <>
          <Nav.Item>
            <Link className="nav-link" to="/">
              Welcome {user?.firstName}
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/quotes">
              Quotes
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={onClickLogout}>Logout</Nav.Link>
          </Nav.Item>
        </>
      ) : (
        <>
          <Nav.Item>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/login">
              Register
            </Link>
          </Nav.Item>
        </>
      )}
    </Nav>
  );
};
export default Header;
