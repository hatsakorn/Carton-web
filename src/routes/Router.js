import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Assign from "../pageAdmin/Assign";
import HomeAdmin from "../pageAdmin/HomeAdmi";
import HomePage from "../pageCustomer/HomePage";
import Package from "../pageCustomer/Package";
import Example from "../template/Example";
import LoginPage from "../pageCustomer/LoginPage";
import Employee from "../pageAdmin/Employee";
// import Scan from "../pageEmployee/Scan";
import RedirectAuthenticate, {
  OnlyAdminAndUser,
  RedirectAdmin
} from "../feature/auth/RedirectAuthenticate";
import AuthLayout from "../layouts/AuthLayout";
import ProtectRoute from "../feature/auth/ProtectRoute";

const router = createBrowserRouter([
  // for test
  { path: "/example", element: <Example /> },
  //for customer
  {
    path: "/",
    element: (
      <RedirectAuthenticate>
        <LoginPage />
      </RedirectAuthenticate>
    )
  },
  // for Admin
  {
    element: (
      <ProtectRoute>
        <AuthLayout />
      </ProtectRoute>
    ),

    children: [
      {
        path: "/home",
        element: <RedirectAdmin />
      },
      {
        path: "/package",
        element: (
          <OnlyAdminAndUser>
            <Package />
          </OnlyAdminAndUser>
        )
      },
      // { path: "/homeAdmin", element: <HomeAdmin /> },
      { path: "/assign", element: <Assign /> },
      { path: "/employee", element: <Employee /> }
    ]
  }

  // { path: "/invoice" }

  //for employee
  // { path: "/scan", element: <Scan /> },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
