import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Button } from "react-bootstrap";
import { getUsers, setUsers } from "../../store/Actions/userActions";
import UserCss from "./users.module.scss";

const UserList = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.auth);
  const columns = [
    { name: "First Name", selector: (row) => row.firstName, sortable: true },
    { name: "Last Name", selector: (row) => row.lastName, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "Status", selector: (row) => (row.status ? "Active" : "InActive"), sortable: true },
    {
      name: "Action",
      cell: (record) => {
        return (
          <Button size="sm" variant="outline-primary" onClick={() => alert("Hello " + record.firstName)}>
            View
          </Button>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(getUsers());

    return () => {
      dispatch(setUsers([]));
    };
  }, [dispatch]);

  return (
    <Container fluid="md" className={UserCss['mt-3']}>
      <Row>
        <DataTable columns={columns} data={users} />
      </Row>
    </Container>
  );
};

export default UserList;
