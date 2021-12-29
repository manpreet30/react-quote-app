import quoteService from "../../services/quoteService";

const getQuotes = () => {
  return (dispatch) => {
    quoteService.getQuotes().then((res) => {
      dispatch({ type: "GET_QUOTES", payload: res.data });
    });
  };
};

const setQuotes = (payload) => {
  return (dispatch) => {
    dispatch({ type: "SET_QUOTE", payload });
  };
};

const showQuoteModal = (id = false) => {
  return (dispatch) => {
    if (id) {
      quoteService.getQuote(id).then((res) => {
        dispatch({ type: "GET_QUOTE", payload: res.data });
      });
    } else {
      dispatch({ type: "SHOW_QUOTE_MODAL" });
    }
  };
};

const hideQuoteModal = () => {
  return (dispatch) => {
    dispatch({ type: "HIDE_QUOTE_MODAL" });
  };
};

export { getQuotes, showQuoteModal, hideQuoteModal, setQuotes };
