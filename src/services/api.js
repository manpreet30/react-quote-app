import axios from "axios";
import store from "../store";
import { setErrorMessage } from "../store/Actions/authActions";

const axiosApi = () => {
  const defaultOptions = {
    baseURL: "http://localhost:3001/",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token ? `Bearer ${token}` : null;

    return config;
  });

  instance.interceptors.response.use(
    (res) => {
      return Promise.resolve(res);
    },
    (error) => {
      if (error.response.status === 402) {
        store.dispatch(setErrorMessage(error.response.data.message));
      }
      return Promise.reject(error);
    },
  );
  return instance;
};

export default axiosApi();
