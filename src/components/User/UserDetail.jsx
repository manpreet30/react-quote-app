import { Card, Button } from "react-bootstrap";
import UserContext from "../../Contexts/UserContext";
import { useContext } from "react";

const UserDetail = () => {
  const { user, toggleCanEdit } = useContext(UserContext);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://picsum.photos/id/100/200/100" />
      <Card.Body>
        <Card.Title>{`${user?.firstName} ${user?.lastName}`}</Card.Title>
        <Card.Text>{user?.email}</Card.Text>
        <Button onClick={() => toggleCanEdit(true)} variant="outline-primary" className="position-absolute top-100 start-100 translate-middle" size="sm">
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};
export default UserDetail;
