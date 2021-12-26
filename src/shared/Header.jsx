import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Nav>
      <Nav.Item>
        <Link className="nav-link" to="/"> Dashboard</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className="nav-link" to="/quotes">Quotes</Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>Logout</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default Header;
