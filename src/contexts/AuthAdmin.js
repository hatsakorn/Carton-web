import { createContext, useEffect, useState } from "react";
import * as adminApi from "../api/auth-admin";

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [nullShelf, setNullShelf] = useState([]);
  const [getEmployee, setEmployee] = useState([]);
  const [selectBox, setSelectBox] = useState([]);
  const [itSelfWork, setItSelfWork] = useState([]);
  const [selectEmployee, setSelectEmployee] = useState([]);
  useEffect(() => {
    const fetchNullShelf = async () => {
      const res = await adminApi.getItemsNullShelf();
      setNullShelf(res.data.ItemsNullShelf);
      //   console.log(res.data.ItemsNullShelf, "admin null shelf");
    };
    fetchNullShelf();
  }, []);

  useEffect(() => {
    const fetchEmployee = async () => {
      const res = await adminApi.getEmployee();
      setEmployee(res.data.employee);
      //   console.log(res.data, "employee");
    };
    fetchEmployee();
  }, []);

  useEffect(() => {
    const fetchEmployeeWork = async () => {
      const res = await adminApi.getAssignOfEmployee();
      //   console.log(res, "workkkk");
      //   console.log(res.data.taskemployee, "workkkk");
      setItSelfWork(res.data.taskemployee);
    };
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
        itSelfWork
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
