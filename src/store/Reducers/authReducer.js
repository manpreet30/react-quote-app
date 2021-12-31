const initialState = {
  token: null,
  errorMessage: null,
};

export default function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload,
      };

    case "SET_AUTH_TOKEN":
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
      }
      return {
        ...state,
        token: action.payload,
      };

    default:
      return state;
  }
}
