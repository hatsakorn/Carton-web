import { createContext, useEffect, useState } from "react";
import * as adminApi from "../api/auth-admin";

export const AdminContext = createContext();

export default function AdminContextProvider({ children }) {
  const [nullShelf, setNullShelf] = useState([]);
  const [getEmployee, setEmployee] = useState([]);
  const [selectBox, setSelectBox] = useState([]);
  const [selectEmployee, setSelectEmployee] = useState([]);
  useEffect(() => {
    const fetchNullShelf = async () => {
      const res = await adminApi.getItemsNullShelf();
      setNullShelf(res.data.ItemsNullShelf);
      console.log(res.data.ItemsNullShelf, "admin null shelf");
    };
    fetchNullShelf();
  }, []);

  useEffect(() => {
    const fetchEmployee = async () => {
      const res = await adminApi.getEmployee();
      setEmployee(res.data.employee);
      console.log(res.data, "employee");
    };
    fetchEmployee();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        nullShelf,
        getEmployee,
        selectBox,
        setSelectBox,
        setSelectEmployee,
        selectEmployee
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
