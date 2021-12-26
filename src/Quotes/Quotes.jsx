import { ListGroup, Container } from "react-bootstrap";
import { useEffect } from "react";
import Quote from "./Quote";
import { useDispatch, useSelector } from "react-redux";
import { getQuotes } from "../store/Actions/quoteActions";
import AddQuote from "./AddQuote";

const Quotes = () => {
  const dispatch = useDispatch();

  const quotes = useSelector((state) => state.quote.quotes);

  useEffect(() => {
    dispatch(getQuotes());

    return () => {
        
    };
  }, []);
  return (
    <Container fluid="md" className="mt-5">
      <ListGroup as="ol" numbered>
        {quotes.map((q, key) => {
          return <Quote quoteData={q} key={key} />;
        })}
      </ListGroup>
      <AddQuote />
    </Container>
  );
};
export default Quotes;
