import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedAdminRoute({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser?.role !== "ADMIN") {
    return <Navigate to={"/"} />;
  }
  return children;
}
