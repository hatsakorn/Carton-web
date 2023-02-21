import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Assign from "../pageAdmin/Assign";
import HomeAdmin from "../pageAdmin/HomeAdmi";
// import Promotion from "../pageAdmin/Promotion";
import HomePage from "../pageCustomer/HomePage";
// import PackagePage from "../pageCustomer/PackagePage";
// import LoginP from "../pageCustomer/LoginP";
import Package from "../pageCustomer/Package";
// import Package from "../pageCustomer/Package";
import Scan from "../pageEmployee/Scan";
import Example from "../template/Example";
import LoginPage from "../pageCustomer/LoginPage";

const router = createBrowserRouter([
  //for customer
  // /Login for Redirect if auth
  { path: "/", element: <LoginPage /> },
  { path: "/home", element: <HomePage /> },
  // { path: "/payment", element: <Payment /> },
  // { path: "/package", element: <PackagePage /> },
  { path: "/package", element: <Package /> },
  // can customer see the history of payment

  // for Admin
  // how admin have register and how they register is that not
  { path: "/homeAdmin", element: <HomeAdmin /> },
  { path: "/assign", element: <Assign /> },
  // add page of the admin to confirm of the payment
  // add page of the history og the payment

  //for employee
  { path: "/scan", element: <Scan /> },

  // for test
  { path: "/example", element: <Example /> }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
