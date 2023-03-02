import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Assign from "../pageAdmin/Assign";
import Package from "../pageCustomer/Package";
import Example from "../template/Example";
import LoginPage from "../pageCustomer/LoginPage";
import Employee from "../pageAdmin/Employee";
import RedirectAuthenticate from "../feature/auth/RedirectAuthenticate";
import AuthLayout from "../layouts/AuthLayout";
import Scan from "../pageEmployee/Scan";
import HomePageCustomer from "../pageCustomer/HomePageCustomer";
import HomePageEmployee from "../pageEmployee/HomePageEmployee";
import HomePageAdmin from "../pageAdmin/HomePageAdmin";
import MainPage from "../page/MainPage";

const router = createBrowserRouter([
  // for test
  { path: "/mainpage", element: <MainPage /> },
  //for customer
  {
    path: "/login",
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
      // { path: "/home", element: <HomePage /> },
      { path: "/package", element: <Package /> },
      // for Admin
      { path: "/homeAdmin", element: <HomePageAdmin /> },
      { path: "/assign", element: <Assign /> },
      { path: "/employee", element: <Employee /> },
      { path: "/scan", element: <Scan /> },
      // { path: "/hp1", element: <HomePage1 /> },
      // { path: "/hp1", element: <Employee /> }
      // for Employee
      { path: "/homeEmployee", element: <HomePageEmployee /> }
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
