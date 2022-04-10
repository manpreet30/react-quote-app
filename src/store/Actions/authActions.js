import authService from "../../services/authService";

const login = (creds) => {
  return (dispatch) => {
    authService
      .authLogin(creds)
      .then((res) => {
        dispatch(setToken(res.data));
      })
      .catch((err) => {
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
