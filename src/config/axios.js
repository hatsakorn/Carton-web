import axios from "axios";
import { getAccessToken } from "../utils/local-storage";

axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL;
// axios.defaults.baseURL = " http://localhost:8304";

axios.interceptors.request.use(
  (config) => {
    if (getAccessToken()) {
      config.headers.authorization = `Bearer ${getAccessToken()}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default axios;
