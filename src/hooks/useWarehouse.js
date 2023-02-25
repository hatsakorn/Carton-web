import { useContext } from "react";
import { AuthWarehouse } from "../contexts/AuthWarehouse";

export default function useAuth() {
  return useContext(AuthWarehouse);
}
