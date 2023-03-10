import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Assign from "../pageAdmin/Assign";
import HomeAdmin from "../pageAdmin/HomeAdmi";
import HomePage from "../pageCustomer/HomePage";
import Package from "../pageCustomer/Package";
import Example from "../template/Example";
import LoginPage from "../pageCustomer/LoginPage";
import Employee from "../pageAdmin/Employee";
// import Scan from "../pageEmployee/Scan";
import RedirectAuthenticate from "../feature/auth/RedirectAuthenticate";
import AuthLayout from "../layouts/AuthLayout";
import Scan from "../pageEmployee/Scan";
import HomePage1 from "../page/HomePage";

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
  {
    element: <AuthLayout />,
    children: [
      { path: "/home", element: <HomePage /> },
      { path: "/package", element: <Package /> },
      // for Admin
      { path: "/homeAdmin", element: <HomeAdmin /> },
      { path: "/assign", element: <Assign /> },
      { path: "/employee", element: <Employee /> },
      { path: "/scan", element: <Scan /> },
      { path: "/HomePage", element: <HomePage1 /> }
    ]
  }
  // { path: "/invoice" }

  //for employee
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
