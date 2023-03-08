import { createContext, useEffect, useState } from "react";
import * as adminApi from "../api/auth-admin";

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [nullShelf, setNullShelf] = useState([]);
  const [getEmployee, setEmployee] = useState([]);
  const [selectBox, setSelectBox] = useState([]);
  const [itSelfWork, setItSelfWork] = useState([]);
  const [selectEmployee, setSelectEmployee] = useState([]);

  const fetchNullShelf = async () => {
    const res = await adminApi.getItemsNullShelf();
    setNullShelf(res.data.ItemsNullShelf);
    // console.log(res.data.ItemsNullShelf, "admin null shelf");
  };

  const fetchEmployee = async () => {
    const res = await adminApi.getEmployee();
    setEmployee(res.data.employee);
    // console.log(res.data, "employee");
  };

  useEffect(() => {
    fetchNullShelf();
    fetchEmployee();
  }, []);

  const fetchEmployeeWork = async () => {
    const res = await adminApi.getAssignOfEmployee();
    setItSelfWork(res.data.taskemployee);
  };
  useEffect(() => {
    fetchEmployeeWork();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        nullShelf,
        getEmployee,
        selectBox,
        setSelectBox,
        setSelectEmployee,
        selectEmployee,
        itSelfWork,
        fetchEmployeeWork
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
