import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import

export default function ProtectRoute({ children }) {
  const { authenticatedUser } = useAuth();
  // console.log(authenticatedUser, "authennnnnnnnnnnn");
  if (!authenticatedUser) {
    return <Navigate to={"/"} />;
  }

  return children;
}
