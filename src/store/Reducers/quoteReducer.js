const initialState = {
  quotes: [],
  quote: null,
  showQuoteModal: false,
};

const getQuote = (state, quote) => {
  return {
    ...state,
    quote,
    showQuoteModal: true,
  };
};

export default function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_QUOTES":
      return {
        ...state,
        quotes: action.payload,
      };

    case "SHOW_QUOTE_MODAL":
      return {
        ...state,
        showQuoteModal: true,
      };
    case "HIDE_QUOTE_MODAL":
      return {
        ...state,
        showQuoteModal: false,
      };
    case "GET_QUOTE":
      console.log(action)
      return getQuote(state, action.payload);

    default:
      return state;
  }
}
