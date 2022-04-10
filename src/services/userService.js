import api from "./api";

const BASE_URL = "/user";

const updateUser = (user) => {
  return api.put(`${BASE_URL}`, user);
};

const exportData = {
  updateUser,
};

export default exportData;
