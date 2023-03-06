import useAuth from "../../hooks/useAdmin";
import { Navigate } from "react-router-dom";

export default function ProtectedEmployeeRoute({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser?.role !== "EMPLOYEE") {
    return <Navigate to={"/home"} />;
  }
  return children;
}
