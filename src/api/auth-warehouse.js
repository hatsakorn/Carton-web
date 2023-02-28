import axios from "../config/axios";

export const getAvailShelf = () => axios.get("/warehouse/shelf");
