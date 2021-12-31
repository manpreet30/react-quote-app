import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/Actions/authActions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const email = useRef("");
  const password = useRef("");
  const dispatch = useDispatch();
  const { token } = useSelector((s) => s.auth);

  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  const onClickSubmit = () => {
    dispatch(
      login({
        email: email.current.value,
        password: password.current.value,
      }),
    );
  };

  return (
    <>
      <Container fluid="md" className="mt-3">
        <Row>
          <Col md={{ span: 6, offset: 3 }} className="d-flex mb-4">
            <h2>Fancy Login Heading</h2>
          </Col>
          <Col md={{ span: 6, offset: 3 }} className="d-flex justify-content-between mb-1">
            <Form className="w-100">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" ref={email} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" ref={password} />
              </Form.Group>
              <Button variant="primary" onClick={onClickSubmit}>
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Login;
