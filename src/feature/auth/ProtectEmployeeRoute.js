import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export default function ProtectedEmployeeRoute({ children }) {
  const payload = jwtDecode(localStorage.getItem("ACCESS_TOKEN"));

  if (payload.role !== "EMPLOYEE") {
    return <Navigate to={"/home"} />;
  }
  return children;
}
