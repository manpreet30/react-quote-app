import { Form, Button } from "react-bootstrap";
import UserContext from "../../Contexts/UserContext";
import { useContext, useEffect, useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { updateUser, toggleIsUserUpdated } from "../../store/Actions/userActions";
import PreviewImage from "../Common/PreviewImage";

const UserForm = () => {
  const { user, toggleCanEdit } = useContext(UserContext);
  const imageRef = useRef(null);
  const dispatch = useDispatch();
  const { isUserUpdated } = useSelector((s) => s.auth);

  useEffect(() => {
    if (isUserUpdated) {
      toggleCanEdit(false);
      toggleIsUserUpdated(false);
      dispatch(toggleIsUserUpdated(false));
    }
  }, [isUserUpdated]);

  const formik = useFormik({
    initialValues: {
      firstName: user?.firstName,
      lastName: user?.lastName,
      profileImage: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(),
      lastName: Yup.string().required(),
      profileImage: Yup.mixed()
        .required()
        .test("FILE_SIZE", "Uploaded file is too big.", (value) => !value || (value && value.size <= 100000))
        .test("FILE_FORMAT", "Uploaded file has unsupported format.", (value) => !value || (value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type))),
    }),
    onSubmit: (values) => {
      dispatch(updateUser(values));
    },
  });

  return (
    <Form>
      <Form.Group controlId="profileImage" className="mb-3">
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control type="file" ref={imageRef} isInvalid={formik.errors.profileImage} onChange={(e) => formik.setFieldValue("profileImage", e.target.files[0])} />
        <PreviewImage image={imageRef.current?.files[0]} />
        <Form.Control.Feedback type="invalid">{formik.errors.profileImage}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" isInvalid={formik.touched.firstName && formik.errors.firstName} onChange={formik.handleChange} defaultValue={formik.values.firstName} />
        <Form.Control.Feedback type="invalid">{formik.errors.firstName}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" isInvalid={formik.touched.lastName && formik.errors.lastName} onChange={formik.handleChange} defaultValue={formik.values.lastName} />
        <Form.Control.Feedback type="invalid">{formik.errors.lastName}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" value={user.email} disabled />
      </Form.Group>
      <Button size="sm" onClick={formik.handleSubmit}>
        Update
      </Button>
      <Button size="sm" variant="secondary" className="ms-1" onClick={() => toggleCanEdit(false)}>
        Cancel
      </Button>
    </Form>
  );
};

export default UserForm;
