import { ListGroup, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getQuotes, showQuoteModal } from "../../store/Actions/quoteActions";
import quoteService from "../../services/quoteService";

const Quote = (props) => {
  const dispatch = useDispatch();

  const onClickEdit = (id) => {
    dispatch(showQuoteModal(id));
  };

  const onClickDelete = (id) => {
    quoteService.deleteQuote(id).then((res) => {
      dispatch(getQuotes());
    });
  };

  const q = props.quoteData;
  return (
    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{q.name}</div>
        {q.quote}
      </div>
      <Button variant="secondary" size="sm" className="mx-1" onClick={(e) => onClickEdit(q._id)}>
        Edit
      </Button>
      <Button variant="danger" size="sm" onClick={(e) => onClickDelete(q._id)}>
        Delete
      </Button>
    </ListGroup.Item>
  );
};
export default Quote;
