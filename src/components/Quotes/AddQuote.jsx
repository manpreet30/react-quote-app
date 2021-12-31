import { useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideQuoteModal, setQuotes, getQuotes } from "../../store/Actions/quoteActions";
import quoteSeService from "../../services/quoteService";
import { useFormik } from "formik";
import * as Yup from "yup";

const AddQuote = () => {
  const dispatch = useDispatch();

  const showQuoteModal = useSelector((state) => state.quote.showQuoteModal);
  const quote = useSelector((state) => state.quote.quote);

  const onClickCancel = () => {
    dispatch(hideQuoteModal());
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      quote: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      quote: Yup.string().required().min(10),
    }),
    onSubmit: (values) => {
      const api = quote ? quoteSeService.updateQuote(quote._id, { ...values }) : quoteSeService.addQuote({ ...values });
      api.then((_) => {
        onClickCancel();
        dispatch(getQuotes());
      });
    },
  });

  useEffect(() => {
    if (quote) {
      formik.setValues({ name: quote.name, quote: quote.quote });
    }
  }, [quote]);

  useEffect(() => {
    if (!showQuoteModal) {
      dispatch(setQuotes(null));
      formik.handleReset();
    }
  }, [showQuoteModal]);

  return (
    <Modal show={showQuoteModal} onHide={onClickCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{quote ? "Update Quote" : "Add Quote"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Enter author name" isInvalid={formik.touched.name && formik.errors.name} onChange={formik.handleChange} defaultValue={formik.values.name} />
            <Form.Control.Feedback type="invalid">{formik.errors.name}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="quote">
            <Form.Label>Quote</Form.Label>
            <Form.Control type="text" placeholder="Enter quote" isInvalid={formik.touched.quote && formik.errors.quote} onChange={formik.handleChange} defaultValue={formik.values.quote} />
            <Form.Control.Feedback type="invalid">{formik.errors.quote}</Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" size="sm" onClick={onClickCancel}>
          Close
        </Button>
        <Button variant="primary" size="sm" onClick={formik.handleSubmit}>
          {quote ? "Update" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddQuote;
