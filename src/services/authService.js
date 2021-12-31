import api from "./api";

const BASE_URL = "/auth";

const authLogin = (creds) => {
  return api.post(`${BASE_URL}/login`, creds);
};

const exportData = {
  authLogin,
};

export default exportData;
