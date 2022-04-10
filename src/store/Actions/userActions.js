import userService from "../../services/userService";

const updateUser = (user) => {
  return (dispatch) => {
    userService
      .updateUser(user)
      .then((res) => {
        dispatch({ type: "UPDATE_USER", payload: user });
        dispatch({ type: "USER_UPDATED", payload: true });
      })
      .catch((err) => {
        dispatch({ type: "USER_UPDATED", payload: false });
        dispatch({ type: "SET_ERROR_MESSAGE", payload: "Error while updating user data" });
      });
  };
};

const getUsers = () => {
  return (dispatch) => {
    userService.getUsers().then((res) => {
      dispatch({ type: "GET_USERS", payload: res.data });
    });
  };
};

const setUsers = (payload) => {
  return (dispatch) => {
    dispatch({ type: "SET_USERS", payload });
  };
};

const toggleIsUserUpdated = (payload) => {
  return (dispatch) => {
    dispatch({ type: "USER_UPDATED", payload });
  };
};

export { updateUser, toggleIsUserUpdated, getUsers, setUsers };
