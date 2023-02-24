import { createContext, useEffect, useState } from "react";
import { getMainCustomerById } from "../api/auth-customer";
import useAuth from "../hooks/useAuth";

export const AuthCustomer = createContext();

export default function AuthCustomerProvider({ children }) {
  const [customerId, setCustomerId] = useState([]);
  const { authenticatedUser } = useAuth();
  const [customerItem, setCustomerItem] = useState([]);
  //   console.log(authenticatedUsexr.id, "meeeeeee");
  useEffect(() => {
    const fetchGetCustomer = async () => {
      // try {

      // }catch(err){}if()

      const res = await getMainCustomerById(authenticatedUser.id);

      //   const customerInfo = res.data.mainCustomer.map((i) => {
      //     return {
      //       id: i.customerId,
      //       status: i.status,
      //       dateIn: i.items.dateIn,
      //       dateOut: i.items.dateOut
      //     };
      //   });

      //   console.log(res.data, "usssssss");
      //   setCustomerId(customerInfo);
      setCustomerItem(res.data.mainCustomer[0].Items); ////////
      //   console.log(res.data.mainCustomer[0].Items, "asdasdasd");
      //   console.log(customerItem, "meeee");
      //   console.log(res.data.mainCustomer[0], "qqqqqqqqqq");
      //   console.log(customerId, "mappppp");
    };
    if (authenticatedUser.id) {
      fetchGetCustomer();
    }
  }, [authenticatedUser.id, customerId]);

  return (
    <AuthCustomer.Provider value={{ customerId, customerItem }}>
      {children}
    </AuthCustomer.Provider>
  );
}
