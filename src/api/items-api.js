import axios from "../config/axios";

export const createItems = (input) => axios.post("/invoice/create", input);
