import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "tw-elements";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AuthContextProvider from "./contexts/AuthContext";
import AuthCustomerProvider from "./contexts/AuthCustomer";
import AuthWarehouseProvider from "./contexts/AuthWarehouse";
import AdminContextProvider from "./contexts/AuthAdmin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AdminContextProvider>
        <AuthCustomerProvider>
          <AuthWarehouseProvider>
            <App />
          </AuthWarehouseProvider>
        </AuthCustomerProvider>
      </AdminContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
