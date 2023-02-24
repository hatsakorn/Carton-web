import axios from "../config/axios";

export const getPackages = () => axios.get("/package");
