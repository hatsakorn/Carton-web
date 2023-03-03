import axios from "../config/axios";

export const getPackages = () => axios.get("/package");
export const createPackage = (input) => axios.post("/package", input);
