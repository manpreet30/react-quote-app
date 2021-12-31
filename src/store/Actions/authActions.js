import authService from "../../services/authService";

const login = (creds) => {
  return (dispatch) => {
    authService
      .authLogin(creds)
      .then((res) => {
        dispatch(setErrorMessage(null));
        dispatch(setToken(res.data.token));
      })
      .catch((err) => {
        dispatch(setErrorMessage(err.response.data.message));
        dispatch(setToken(null));
      });
  };
};

const setErrorMessage = (payload) => {
  return (dispatch) => {
    dispatch({ type: "SET_ERROR_MESSAGE", payload });
  };
};

const setToken = (payload) => {
  return (dispatch) => {
    dispatch({ type: "SET_AUTH_TOKEN", payload });
  };
};

export { login, setErrorMessage, setToken };
