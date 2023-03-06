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
import HomePageCustomer from "../pageCustomer/HomePageCustomer";
import MainPage from "../page/MainPage";
// import ScanCustomer from "../pageCustomer/ScantCustomer";
import ScanEmployee from "../pageEmployee/ScanEmployee";
import HomeAdmin from "../pageAdmin/HomePageAdmin";
import HomePageEmployee from "../pageEmployee/HomePageEmployee";
import AdminAssign from "../pageAdmin/AdminAssign";
import ProtectedAdminRoute from "../feature/auth/ProtectedAdminRoute";
import HomePage from "../page/HomePage";
import ProtectedEmployeeRoute from "../feature/auth/ProtectEmployeeRoute";

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
    path: "/home",
    element: <HomePage />
  },

  // for customer
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/homeCustomer",
        element: <HomePageCustomer />
      },
      { path: "/package", element: <Package /> }
    ]
  },
  {
    element: (
      <ProtectedAdminRoute>
        <AuthLayout />
      </ProtectedAdminRoute>
    ),
    children: [
      // for Admin
      {
        path: "/homeAdmin",
        element: <HomeAdmin />
      },
      { path: "/adminAssign", element: <AdminAssign /> },
      { path: "/employee", element: <Employee /> }
    ]
  },

  // for employee
  {
    element: (
      <ProtectedEmployeeRoute>
        <AuthLayout />
      </ProtectedEmployeeRoute>
    ),
    children: [
      { path: "/homeEmployee", element: <HomePageEmployee /> },
      { path: "/assign", element: <Assign /> },
      { path: "/employee", element: <Employee /> },
      // for Employee
      { path: "/homeEmployee", element: <HomePageEmployee /> },
      { path: "/scanEmployee", element: <ScanEmployee /> }
    ]
  }
  // { path: "/invoice" }

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
