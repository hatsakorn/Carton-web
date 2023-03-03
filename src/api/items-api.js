import axios from "../config/axios";

export const createItems = (input) => axios.post("/invoice/create", input);
export const getItemLocationByCustomerIdAndItemId = (input) => axios.get("/invoice/qrcode",input)