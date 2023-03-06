import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DropDown from "../components/DropDown";
import useAuth from "../hooks/useAuth";

function NavSideBar() {
  const { authenticatedUser, fetchAuthUser } = useAuth();
  console.log(authenticatedUser.role);
  useEffect(() => {
    fetchAuthUser();
  }, []);
  return (
    <div className="flex-col flex justify-evenly text-center w-20">
      <div className="m-1 rounded-xl">
        <i className="fa-solid fa-circle-user text-zinc-50 text-3xl m-4 bg-blue-300" />
        <div className="text-white">{authenticatedUser.firstName}</div>
        <div className="text-white">{authenticatedUser.role}</div>
      </div>

      <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl bg-blue-300">
        <Link
          to={
            authenticatedUser?.role === "EMPLOYEE"
              ? "/homeEmployee"
              : authenticatedUser?.role === "ADMIN"
              ? "/homeAdmin"
              : "/homeCustomer"
          }
        >
          <i className="fa-solid fa-house  text-zinc-50 text-3xl m-4 bg-blue-300"></i>
        </Link>
      </div>

      <div
        className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl bg-blue-300"
        // style={{ visibility: "hidden" }}
      >
        <Link
          to={authenticatedUser?.role === "EMPLOYEE" ? "/home" : "/package"}
        >
          <i className="fa-solid fa-dolly  text-zinc-50 text-3xl m-4"></i>
        </Link>
      </div>

      <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl bg-blue-300">
        <Link
          to={
            authenticatedUser?.role === "EMPLOYEE"
              ? "/assign"
              : authenticatedUser?.role === "ADMIN"
              ? "/adminAssign"
              : "/home"
          }
        >
          <i className="fa-solid fa-paper-plane  text-zinc-50 text-3xl m-4 "></i>
        </Link>
      </div>
      <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl bg-blue-300">
        <Link to={authenticatedUser?.role === "EMPLOYEE" ? "/scan" : "/home"}>
          <i className="fa-solid fa-qrcode  text-zinc-50 text-3xl m-4"></i>
        </Link>
      </div>
      <div className="flex hover:bg-blue-400 m-1 rounded-xl shadow-xl bg-blue-300">
        <DropDown />
      </div>
    </div>
  );
}
export default NavSideBar;
