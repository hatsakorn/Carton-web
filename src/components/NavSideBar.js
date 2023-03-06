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
<<<<<<< HEAD
    <div className="flex-col text-center w-20 justify-between">
      <div className="flex m-1 rounded-xl bottom-25 left-0 ">
        <i className="fa-solid fa-circle-user text-zinc-50 text-3xl m-4"></i>
      </div>

      <div className="flex hover:bg-blue-400 m-1 rounded-xl shadow-xl  ">
        <Link to={"/homeAdmin"}>
          <i className="fa-solid fa-house text-zinc-50 text-3xl m-4"></i>
        </Link>
      </div>

      <div className="flex hover:bg-blue-400 m-1 rounded-xl shadow-xl  ">
        <Link to={"/package"}>
          <i className="fa-solid fa-dolly text-zinc-50 text-3xl m-4"></i>
        </Link>
      </div>

      <div className="flex hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
        <Link to={"/assign"}>
          <i className="fa-solid fa-paper-plane text-zinc-50 text-3xl m-4"></i>
        </Link>
      </div>
      <div className="flex hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
        <Link to={"/scan"}>
          <i className="fa-solid fa-qrcode text-zinc-50 text-3xl m-4"></i>
=======
    <div className="flex-col flex justify-evenly text-center w-20">
      <div className="m-1 rounded-xl">
        <i className="fa-solid fa-circle-user text-zinc-50 text-3xl m-4" />
        <div className="text-white">{authenticatedUser.firstName}</div>
      </div>

      <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
        <Link
          to={
            authenticatedUser?.role === "EMPLOYEE"
              ? "/homeEmployee"
              : authenticatedUser?.role === "ADMIN"
              ? "/homeAdmin"
              : "/homeCustomer"
          }
        >
          <i className="fa-solid fa-house  text-zinc-50 text-3xl m-4"></i>
        </Link>
      </div>

      <div
        className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl"
        // style={{ visibility: "hidden" }}
      >
        <Link
          to={authenticatedUser?.role === "EMPLOYEE" ? "/home" : "/package"}
        >
          <i className="fa-solid fa-dolly  text-zinc-50 text-3xl m-4"></i>
        </Link>
      </div>

      <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
        <Link
          to={
            authenticatedUser?.role === "EMPLOYEE"
              ? "/assign"
              : authenticatedUser?.role === "ADMIN"
              ? "/adminAssign"
              : "/home"
          }
        >
          <i className="fa-solid fa-paper-plane  text-zinc-50 text-3xl m-4"></i>
        </Link>
      </div>
      <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
        <Link to={authenticatedUser?.role === "EMPLOYEE" ? "/scan" : "/home"}>
          <i className="fa-solid fa-qrcode  text-zinc-50 text-3xl m-4"></i>
>>>>>>> develop
        </Link>
      </div>
      <div className="flex hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
        <DropDown />
      </div>
    </div>
  );
}
export default NavSideBar;
