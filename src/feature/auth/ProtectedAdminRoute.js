import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export default function ProtectedAdminRoute({ children }) {
  const payload = jwtDecode(localStorage.getItem("ACCESS_TOKEN"));

  if (payload.role !== "ADMIN") {
    return <Navigate to={"/home"} />;
  }

  return children;
}
