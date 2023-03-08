import axios from "../config/axios";

export const createItems = (input) => axios.post("/invoice/create", input);
export const getItemLocationByCustomerIdAndItemId = (result) => axios.post("/invoice/qrcode",result)
export const updateDateIn = (input) => axios.post("/admin/employee/qrcode/in",input);
export const updateDateOut = (input) => axios.post("/admin/employee/qrcode/out",input);