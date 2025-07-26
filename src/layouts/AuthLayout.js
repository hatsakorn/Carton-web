import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavSideBar from "../components/NavSideBar";
import useAuth from "../hooks/useAuth";

function AuthLayout() {
  const { fetchAuthUser } = useAuth();

  useEffect(() => {
    fetchAuthUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
