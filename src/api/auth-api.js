import axios from "../config/axios";

// export const login = (input) => axios.post("/auth/login", input);
export const register = (input) => axios.post("auth/customerRegister", input);
export const registerEmployee = (input) =>
  axios.post("/auth/employeeRegister", input);
export const getMe = () => axios.get("/auth/me");
