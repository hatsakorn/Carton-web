import axios from "../config/axios";

export const getMainCustomerById = () => axios.get(`/customer`);
