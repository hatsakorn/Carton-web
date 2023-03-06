import axios from "../config/axios";

export const createItems = (input) => axios.post("/invoice/create", input);
export const getItemLocationByCustomerIdAndItemId = (result) => axios.post("/invoice/qrcode",result)