import { Container, Row, Col } from "react-bootstrap";
import UserDetail from "./User/UserDetail";
import UserForm from "./User/UserForm";
import UserContext from "../Contexts/UserContext";
import { useSelector } from "react-redux";
import { useState } from "react";

const Dashboard = () => {
  const user = useSelector((s) => s.auth.user);
  const [canEdit, toggleCanEdit] = useState(false);

  return (
    <UserContext.Provider value={{ user, toggleCanEdit }}>
      <Container fluid="md" className="mt-3">
        <Row>
          <Col className="d-flex justify-content-center mb-1">{canEdit ? <UserForm /> : <UserDetail />}</Col>
        </Row>
      </Container>
    </UserContext.Provider>
  );
};
export default Dashboard;
