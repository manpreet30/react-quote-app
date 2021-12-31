import api from "./api";

const BASE_URL = "/quotes";
const getQuotes = () => {
  return api.get("/quotes");
};

const getQuote = (id) => {
  return api.get(`${BASE_URL}/${id}`);
};

const addQuote = (quote) => {
  return api.post(`${BASE_URL}`, quote);
};

const updateQuote = (id, quote) => {
  return api.put(`${BASE_URL}/${id}`, quote);
};

const deleteQuote = (id) => {
  return api.delete(`${BASE_URL}/${id}`);
};

const exportData = {
  getQuotes,
  getQuote,
  addQuote,
  updateQuote,
  deleteQuote,
};

export default exportData;
