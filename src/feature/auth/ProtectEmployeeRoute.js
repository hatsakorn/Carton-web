import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedEmployeeRoute({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser?.role !== "EMPLOYEE") {
    return <Navigate to={"/home"} />;
  }
  return children;
}
