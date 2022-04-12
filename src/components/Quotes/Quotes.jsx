import { ListGroup, Container, Button, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import Quote from "./Quote";
import { useDispatch, useSelector } from "react-redux";
import { getQuotes, setQuotes, showQuoteModal } from "../../store/Actions/quoteActions";
import AddQuote from "./AddQuote";
import ErrorBoundary from "../../shared/ErrorBoundary";

const Quotes = () => {
  const dispatch = useDispatch();

  const onClickAddQuote = () => {
    dispatch(showQuoteModal());
  };

  const quotes = useSelector((state) => state.quote.quotes);

  useEffect(() => {
    dispatch(getQuotes());

    return () => {
      dispatch(setQuotes(null));
    };
  }, [dispatch]);
  return (
    <Container fluid="md" className="mt-3">
      <Row>
        <Col className="d-flex flex-row-reverse mb-1">
          <Button variant="success" size="sm" onClick={onClickAddQuote}>
            Add Quote
          </Button>
        </Col>
      </Row>
      {quotes.length ? (
        <ListGroup as="ol" numbered>
          {quotes.map((q, key) => {
            return (
              <ErrorBoundary>
                <Quote quoteData={q} key={key} />
              </ErrorBoundary>
            );
          })}
        </ListGroup>
      ) : (
        <p className="text-center">
          <strong>No Quotes Available</strong>
        </p>
      )}
      <AddQuote />
    </Container>
  );
};
export default Quotes;
