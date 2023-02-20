import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Assign from "../pageAdmin/Assign";
import HomeAdmin from "../pageAdmin/HomeAdmi";
// import Promotion from "../pageAdmin/Promotion";
import HomePage from "../pageCustomer/HomePage";
import LoginP from "../pageCustomer/LoginP";
import Payment from "../pageCustomer/Payment";
import Scan from "../pageEmployee/Scan";
import Example from "../template/Example";

const router = createBrowserRouter([
  //for customer
  // /Login for Redirect if auth
  { path: "/", element: <LoginP /> },
  { path: "/home", element: <HomePage /> },
  { path: "/payment", element: <Payment /> },
  // can customer see the history of payment

  // for Admin
  // how admin have register and how they register is that not
  { path: "/homeAdmin", element: <HomeAdmin /> },
  { path: "/assign", element: <Assign /> },
  // { path: "/promotion", element: <Promotion /> },
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
