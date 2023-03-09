import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavSideBar from "../components/NavSideBar";
import useAuth from "../hooks/useAuth";

function AuthLayout() {
  const { fetchAuthUser } = useAuth();

  useEffect(() => {
    fetchAuthUser();
  }, []);
  return (
    <>
      <div className="flex flex-row">
        <NavSideBar />
        <Outlet />
      </div>
    </>
  );
}

export default AuthLayout;
