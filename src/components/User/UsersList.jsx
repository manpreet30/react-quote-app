import DataTable from "react-data-table-component";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row } from "react-bootstrap";
import { getUsers, setUsers } from "../../store/Actions/userActions";

const UserList = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.auth);
  const columns = [
    { name: "First Name", selector: (row) => row.firstName, sortable: true },
    { name: "Last Name", selector: (row) => row.lastName, sortable: true },
    { name: "Email", selector: (row) => row.email, sortable: true },
    { name: "Status", selector: (row) => (row.status ? "Active" : "InActive"), sortable: true },
  ];

  useEffect(() => {
    dispatch(getUsers());

    return () => {
      dispatch(setUsers([]));
    };
  }, [dispatch]);

  return (
    <Container fluid="md" className="mt-3">
      <Row>
        <DataTable columns={columns} data={users} />
      </Row>
    </Container>
  );
};

export default UserList;
