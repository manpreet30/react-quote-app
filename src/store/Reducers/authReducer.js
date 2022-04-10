const initialState = {
  token: localStorage.getItem("token") || null,
  user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  errorMessage: null,
  isUserUpdated: false,
};

const updateUser = (state, payload) => {
  const user = { ...state.user };
  user.firstName = payload.firstName;
  user.lastName = payload.lastName;
  return {
    ...state,
    user,
  };
};

export default function quoteReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_USER":
      return updateUser(state, action.payload);
    case "USER_UPDATED":
      return { ...state, isUserUpdated: action.payload };
    case "SET_ERROR_MESSAGE":
      return {
        ...state,
        errorMessage: action.payload,
      };

    case "SET_AUTH_TOKEN":
      if (action.payload) {
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
      return {
        ...state,
        token: action.payload ? action.payload.token : null,
        user: action.payload ? action.payload.user : null,
      };

    default:
      return state;
  }
}
