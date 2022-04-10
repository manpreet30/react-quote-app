import api from "./api";

const BASE_URL = "/user";

const updateUser = (user) => {
  return api.put(`${BASE_URL}`, user);
};

const getUsers = () => {
  return api.get("/users");
};

const exportData = {
  updateUser,
  getUsers,
};

export default exportData;
