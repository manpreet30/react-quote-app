import axios from "axios";

const BASE_URL = "http://localhost:3001/quotes";

const getQuotes = () => {
  return axios.get(BASE_URL);
};

const getQuote = (id) => {
  return axios.get(`${BASE_URL}/${id}`);
};

const addQuote = (quote) => {
  return axios.post(`${BASE_URL}`, quote);
};

const updateQuote = (id, quote) => {
  return axios.put(`${BASE_URL}/${id}`, quote);
};

const deleteQuote = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

const exportData = {
  getQuotes,
  getQuote,
  addQuote,
  updateQuote,
  deleteQuote,
};

export default exportData;
