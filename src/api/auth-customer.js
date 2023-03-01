import axios from "../config/axios";

export const getMainCustomerById = (customerId) =>
  axios.get(`/customer/${customerId}`);
