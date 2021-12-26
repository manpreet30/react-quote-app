import { useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideQuoteModal } from "../store/Actions/quoteActions";

const AddQuote = () => {
  const dispatch = useDispatch();

  const showQuoteModal = useSelector((state) => state.quote.showQuoteModal);
  const quote = useSelector((state) => state.quote.quote);
  const localQuote = {
    name: quote?.name,
    quote: quote?.quote,
  };

  const onClickCancel = () => {
    dispatch(hideQuoteModal());
  };

  return (
    <Modal show={showQuoteModal} onHide={onClickCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Please enter author name" defaultValue={localQuote.name} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Quote</Form.Label>
            <Form.Control type="text" placeholder="Please enter quote" defaultValue={localQuote.quote} />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" size="sm" onClick={onClickCancel}>
          Close
        </Button>
        <Button variant="primary" size="sm">
          Save changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddQuote;
