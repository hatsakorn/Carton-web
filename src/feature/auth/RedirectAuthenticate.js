import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function RedirectAuthenticate({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser) {
    return (
      <Navigate
        to={
          authenticatedUser.role === "EMPLOYEE"
            ? "/homeEmployee"
            : authenticatedUser.role === "ADMIN"
            ? "/homeAdmin"
            : "/homeCustomer"
        }
      />
    );
  }
  return children;
}
