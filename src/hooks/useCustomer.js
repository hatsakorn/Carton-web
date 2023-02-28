import { useContext } from "react";
import { AuthCustomer } from "../contexts/AuthCustomer";

export default function useAuth() {
  return useContext(AuthCustomer);
}
