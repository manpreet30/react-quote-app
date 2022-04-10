import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../store/Actions/authActions";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((s) => s.auth);

  useEffect(() => {
    if (token) navigate("/");
  }, [token, navigate]);

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6),
    }),
    onSubmit: (values) => {
      dispatch(login({ ...values }));
    },
  });

  return (
    <Container fluid="md" className="mt-3">
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="d-flex mb-4">
          <h2>Fancy Login Heading</h2>
        </Col>
        <Col md={{ span: 6, offset: 3 }} className="d-flex justify-content-between mb-1">
          <Form className="w-100" onSubmit={loginForm.handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" isInvalid={loginForm.touched.email && loginForm.errors.email} onChange={loginForm.handleChange} defaultValue={loginForm.values.email} />
              <Form.Control.Feedback type="invalid">{loginForm.errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" isInvalid={loginForm.touched.password && loginForm.errors.password} onChange={loginForm.handleChange} defaultValue={loginForm.values.password} />
              <Form.Control.Feedback type="invalid">{loginForm.errors.password}</Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Login;
