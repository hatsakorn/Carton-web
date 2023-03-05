import React from "react";
import { Link } from "react-router-dom";
import DropDown from "../components/DropDown";
import useAuth from "../hooks/useAuth";

function NavSideBar() {
  const { authenticatedUser } = useAuth();
  return (
    <div className="flex-col flex justify-evenly text-center w-20">
      <div className="m-1 rounded-xl">
        <i className="fa-solid fa-circle-user text-zinc-50 text-3xl m-4"></i>
      </div>

      <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
        <Link
          to={
            authenticatedUser.role === "EMPLOYEE"
              ? "/homeEmployee"
              : authenticatedUser.role === "ADMIN"
              ? "/homeAdmin"
              : "/homeCustomer"
          }
        >
          <i className="fa-solid fa-house  text-zinc-50 text-3xl m-4"></i>
        </Link>
      </div>

      <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
        <Link
          to={
            authenticatedUser.role === "EMPLOYEE"
              ? "/homeEmployee"
              : authenticatedUser.role === "ADMIN"
              ? "/package"
              : "/package"
          }
        >
          <i className="fa-solid fa-dolly  text-zinc-50 text-3xl m-4"></i>
        </Link>
      </div>

      <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
        <Link
          to={
            authenticatedUser.role === "EMPLOYEE"
              ? "/assign"
              : authenticatedUser.role === "ADMIN"
              ? "/adminAssign"
              : "/homeCustomer"
          }
        >
          <i className="fa-solid fa-paper-plane  text-zinc-50 text-3xl m-4"></i>
        </Link>
      </div>
      <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
        <Link
          to={
            authenticatedUser.role === "EMPLOYEE"
              ? "/scan"
              : authenticatedUser.role === "ADMIN"
              ? "/homeAdmin"
              : "/homeCustomer"
          }
        >
          <i className="fa-solid fa-qrcode  text-zinc-50 text-3xl m-4"></i>
        </Link>
      </div>
      <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
        <div className="home flex m-3">
          <i className="fa-solid fa-gear  text-zinc-50 text-3xl m-4" />
        </div>
        <DropDown />
      </div>
    </div>
  );
}
export default NavSideBar;
