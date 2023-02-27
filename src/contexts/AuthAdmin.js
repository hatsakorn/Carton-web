// import { createContext, useEffect } from "react";
// import { getMainCustomerById } from "../api/auth-customer";

// export const AuthWarehouse = createContext();

// export default function AuthWarehouseProvider({ children }) {
//   const [wareHouseId, setwareHouseId] = useState([]);
//   useEffect(() => {
//     const get = async () => {
//       const res = await getMainCustomerById();
//       const customerInfo = res.data.map((i) => {
//         return {
//           id: i.customerId,
//           status: i.status,
//           dateIn: i.items.dateIn,
//           dateOut: i.items.dateOut
//         };
//       });
//     };
//     setCustomerId(customerInfo);
//   }, []);

//   return (
//     <AuthCustomer.Provider value={{ customerId }}>
//       {children}
//     </AuthCustomer.Provider>
//   );
// }
