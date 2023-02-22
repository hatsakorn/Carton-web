import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import HomeAdmin from "../../pageAdmin/HomeAdmi";
import HomePage from "../../pageCustomer/HomePage";
// import Package from "../../pageCustomer/Package";

export default function RedirectAuthenticate({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser) {
    return <Navigate to="/home" />;
  }
  return children;
}

export function RedirectAdmin() {
  const { authenticatedUser } = useAuth();

  if (authenticatedUser?.role === "ADMIN") {
    return <HomeAdmin />;
  } else if (authenticatedUser?.role === "EMPLOYEE") {
    return <HomePage />;
  } else {
    return <HomeAdmin />;
  }
}

export function OnlyAdminAndUser({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser?.role === "EMPLOYEE") {
    return <Navigate to={"/home"} />;
  }
  return children;
}
export function OnlyAdminAndEmployee({ children }) {
  const { authenticatedUser } = useAuth();
  if (authenticatedUser?.role !== "EMPLOYEE") {
    return <Navigate to={"/home"} />;
  }
  return children;
}
