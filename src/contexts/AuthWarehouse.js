import { createContext, useEffect, useState } from "react";
import { getAvailShelf } from "../api/auth-warehouse";

export const AuthWarehouse = createContext();

export default function AuthWarehouseProvider({ children }) {
  const [shelfSql, setShelfSql] = useState([]);

  const fetchWarehouseData = async () => {
    const res = await getAvailShelf();
    //   setShelfSql(res.data);
    setShelfSql(res.data[0].Shelves);
  };
  useEffect(() => {
    fetchWarehouseData();
  }, []);

  return (
    <AuthWarehouse.Provider value={{ shelfSql, fetchWarehouseData }}>
      {children}
    </AuthWarehouse.Provider>
  );
}
