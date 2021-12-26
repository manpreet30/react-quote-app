import axios from "axios";

const BASE_URL = "http://localhost:3001/quotes";

const getQuotes = () => {
  return (dispatch) => {
    axios.get(BASE_URL).then((res) => {
      dispatch({ type: "GET_QUOTES", payload: res.data });
    });
  };
};

const showQuoteModal = (id = false) => {
  return (dispatch) => {
    if (id) {
      axios.get(`${BASE_URL}/${id}`).then((res) => {
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

export { getQuotes, showQuoteModal, hideQuoteModal };
