import api from "./api";

const BASE_URL = "/api/user";

const updateUser = (user) => {
  return api.put(`${BASE_URL}/profile`, user);
};

const getUsers = () => {
  return api.get(`${BASE_URL}/list`);
};

const exportData = {
  updateUser,
  getUsers,
};

export default exportData;
