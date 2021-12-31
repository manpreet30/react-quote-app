import { useEffect, useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { hideQuoteModal, setQuotes, getQuotes } from "../../store/Actions/quoteActions";
import quoteSeService from "../../services/quoteService";

const AddQuote = () => {
  const dispatch = useDispatch();

  const showQuoteModal = useSelector((state) => state.quote.showQuoteModal);
  const quote = useSelector((state) => state.quote.quote);
  const [localQuote, setLocalQuote] = useState({ name: "", quote: "" });

  useEffect(() => {
    if (quote) {
      setLocalQuote({ name: quote.name, quote: quote.quote });
    }
  }, [quote]);

  useEffect(() => {
    if (!showQuoteModal) {
      dispatch(setQuotes(null));
      setLocalQuote({ name: "", quote: "" });
    }
  }, [showQuoteModal, dispatch]);

  const onClickCancel = () => {
    dispatch(hideQuoteModal());
  };

  const onSubmit = () => {
    const api = quote ? quoteSeService.updateQuote(quote._id, localQuote) : quoteSeService.addQuote(localQuote);
    api
      .then((res) => {
        onClickCancel();
        dispatch(getQuotes());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Modal show={showQuoteModal} onHide={onClickCancel}>
      <Modal.Header closeButton>
        <Modal.Title>{quote ? "Update Quote" : "Add Quote"}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" placeholder="Please enter author name" value={localQuote.name} onChange={(e) => setLocalQuote({ ...localQuote, name: e.target.value })} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Quote</Form.Label>
            <Form.Control type="text" placeholder="Please enter quote" value={localQuote.quote} onChange={(e) => setLocalQuote({ ...localQuote, quote: e.target.value })} />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" size="sm" onClick={onClickCancel}>
          Close
        </Button>
        <Button variant="primary" size="sm" onClick={onSubmit}>
          {quote ? "Update" : "Add"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default AddQuote;
