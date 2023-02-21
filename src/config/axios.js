import axios from "axios";
export const customerRegister = () => axios.post("/auth/customerRegister");

axios.defaults.baseURL = process.env.REACT_APP_ENDPOINT_URL;

// axios.interceptors.request.use(
//   config => {
//     if (getAccessToken()) {
//       config.headers.authorization = `Bearer ${getAccessToken()}`;
//     }
//     return config;
//   },
//   err => {,
//     return Promise.reject(err);
//   }
// );

export default axios;
