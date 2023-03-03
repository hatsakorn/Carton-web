import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function RedirectAuthenticate({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser) {
    return <Navigate to="/homeCustomer" />;
  }
  return children;
}
