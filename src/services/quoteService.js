import axios from "axios";

const BASE_URL = "http://localhost:3001/quotes";

const getQuotes = () => {
  return axios.get(BASE_URL);
};

const exportData = {
  getQuotes,
};

export default exportData;
