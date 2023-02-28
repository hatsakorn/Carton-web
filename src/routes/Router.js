import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Assign from "../pageAdmin/Assign";
import HomeAdmin from "../pageAdmin/HomeAdmi";
import HomePage from "../pageAdmin/HomePage";
import Package from "../pageCustomer/Package";
import Example from "../template/Example";
import LoginPage from "../pageCustomer/LoginPage";
import Employee from "../pageAdmin/Employee";
import RedirectAuthenticate from "../feature/auth/RedirectAuthenticate";
import AuthLayout from "../layouts/AuthLayout";
import Scan from "../pageEmployee/Scan";
import PaymentPage from "../pageCustomer/PaymentPage";
import HomePage1 from "../page/HomePageCustomer";
import HomePageCustomer from "../page/HomePageCustomer";

const router = createBrowserRouter([
  // for test
  { path: "/example", element: <Example /> },
  { path:"/payment",element: <PaymentPage />}
  ,
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
      { path: "/homeCustomer", element: <HomePageCustomer /> },
      { path: "/home", element: <HomePage /> },
      { path: "/package", element: <Package /> },
      // for Admin
      { path: "/homeAdmin", element: <HomeAdmin /> },
      { path: "/assign", element: <Assign /> },
      { path: "/employee", element: <Employee /> },
      { path: "/scan", element: <Scan /> },
      { path: "/hp1", element: <HomePage1 /> }
      // { path: "/hp1", element: <Employee /> }
    ]
  }
  // { path: "/invoice" }

  // for employee

  // for test
  // {
  //   path: "/PackagePage",
  //   element: <PackagePage />

  //   //   // <Example />
  // }
  //for employee
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
