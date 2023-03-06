import { useContext } from "react";
import { AdminContext } from "../contexts/AuthAdmin";

export default function useAuth() {
  return useContext(AdminContext);
}
