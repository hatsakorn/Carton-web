import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function ProtectedCustomerRoute({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser.role) {
    return <Navigate to={"/"} />;
  }
  return children;
}
