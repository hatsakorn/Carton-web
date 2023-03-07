import axios from "../config/axios";

export const createItems = (input) => axios.post("/invoice/create", input);
export const getItemLocationByCustomerIdAndItemId = (result) => axios.post("/invoice/qrcode",result)
export const updateStatusByQrCode = (input) => axios.post("/employee/qrcode",input);