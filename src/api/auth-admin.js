import axios from "../config/axios";

export const getItemsNullShelf = () => axios.get("/admin/items/nullShelf");
export const getEmployee = () => axios.get("/admin/employee");
export const createAssignTask = (input) =>
  axios.post("/admin/createTask", input);
export const getAssignOfEmployee = () => axios.get("/admin/employee/task");

export const taskStatusFromEmployee = (taskId, input) =>
  axios.patch(`/admin/${taskId}`, input);
