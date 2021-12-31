import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const token = useSelector((s) => s.auth.token);
  return (
    <Nav>
      {token ? (
        <>
          <Nav.Item>
            <Link className="nav-link" to="/">Dashboard</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/quotes">Quotes</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/logout">Logout</Link>
          </Nav.Item>
        </>
      ) : (
        <>
          <Nav.Item>
            <Link className="nav-link" to="/login">Login</Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/login">Register</Link>
          </Nav.Item>
        </>
      )}
    </Nav>
  );
};
export default Header;
