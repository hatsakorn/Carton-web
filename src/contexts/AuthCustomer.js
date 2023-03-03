import { createContext, useEffect, useState } from "react";
import { getMainCustomerById } from "../api/auth-customer";
import useAuth from "../hooks/useAuth";
import { removeAccessToken } from "../utils/local-storage";

export const AuthCustomer = createContext();

export default function AuthCustomerProvider({ children }) {
  const [customerId, setCustomerId] = useState([]);
  const { authenticatedUser } = useAuth();
  const [customerItem, setCustomerItem] = useState([]);

  const fetchGetCustomer = async () => {
    try {
      const res = await getMainCustomerById(authenticatedUser.id);
      setCustomerItem(res.data.mainCustomer);
      console.log(res.data);
    } catch (err) {
      // Handle errors
    }
  };

  useEffect(() => {
    if (authenticatedUser?.id) {
      fetchGetCustomer();
    }
  }, [authenticatedUser, customerId]);

  return (
    <AuthCustomer.Provider value={{ customerId, customerItem }}>
      {children}
    </AuthCustomer.Provider>
  );
}
