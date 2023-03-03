import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Assign from "../pageAdmin/Assign";
import Package from "../pageCustomer/Package";
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
  {
    path: "/",
    element: <Navigate to="/mainpage" />
  },

  {
    path: "/mainpage",
    element: <MainPage />
  },
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
      // for customer
      { path: "/homeCustomer", element: <HomePageCustomer /> },
      { path: "/package", element: <Package /> },
      // for Admin
      { path: "/homeAdmin", element: <HomePageAdmin /> },
      { path: "/assign", element: <Assign /> },
      { path: "/employee", element: <Employee /> },
      { path: "/scan", element: <Scan /> },
      // for Employee
      { path: "/homeEmployee", element: <HomePageEmployee /> }
    ]
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
