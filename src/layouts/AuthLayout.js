import React from "react";
import { Outlet } from "react-router-dom";
import NavSideBar from "../components/NavSideBar";

function AuthLayout() {
  return (
    <>
      <div className="flex justify-between">
        <NavSideBar />
        <Outlet />
      </div>
    </>
  );
}

export default AuthLayout;
