import { createContext, useEffect, useState } from "react";
import { getAvailShelf } from "../api/auth-warehouse";

export const AuthWarehouse = createContext();

export default function AuthWarehouseProvider({ children }) {
  const [shelfSql, setShelfSql] = useState([]);

  useEffect(() => {
    const fetchWarehouseData = async () => {
      const res = await getAvailShelf();
      //   setShelfSql(res.data);
      setShelfSql(res.data[0].Shelves);
      // console.log(res.data, "sdfsdfsdfsdfsdfsdfsd");
      // console.log(res?.data[0].Shelves, "me");
    };
    fetchWarehouseData();
  }, []);

  return (
    <AuthWarehouse.Provider value={{ shelfSql }}>
      {children}
    </AuthWarehouse.Provider>
  );
}
