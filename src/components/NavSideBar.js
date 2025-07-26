import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DropDown from "../components/DropDown";
import useAuth from "../hooks/useAuth";

function NavSideBar() {
  const { authenticatedUser, fetchAuthUser } = useAuth();
  // console.log(authenticatedUser.role);
  // setRole(authenticatedUser);
  useEffect(() => {
    fetchAuthUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={`bg-${
        authenticatedUser.role === "ADMIN"
          ? "sky-600"
          : authenticatedUser.role === "EMPLOYEE"
          ? "amber-600"
          : "green-700"
      } rounded-l-xl shadow-xl`}
    >
      <div className="flex-col flex justify-evenly text-center w-28 -mt-8 h-[1000px] items-center ">
        <div className="m-1 rounded-xl">
          <i className="fa-solid fa-circle-user text-zinc-50 text-3xl m-4 rounded-xl shadow-xl" />
          <div className="text-white">{authenticatedUser.firstName}</div>
          <div className="text-white">{authenticatedUser.role}</div>
        </div>
        <div
          className={`  p-3 rounded-xl  shadow-xl ${
            authenticatedUser.role === "ADMIN"
              ? "bg-sky-600 hover:bg-blue-400"
              : authenticatedUser.role === "EMPLOYEE"
              ? "bg-amber-600 hover:bg-amber-400"
              : "bg-green-500 hover:bg-green-400"
          }  `}
        >
          <Link
            to={
              authenticatedUser?.role === "EMPLOYEE"
                ? "/homeEmployee"
                : authenticatedUser?.role === "ADMIN"
                ? "/homeAdmin"
                : "/homeCustomer"
            }
          >
            <i className="fa-solid fa-house  text-zinc-50 text-3xl m-1"></i>
          </Link>
        </div>

        <div
          className={`  m-1 rounded-xl shadow-xl ${
            authenticatedUser.role === "ADMIN"
              ? "bg-sky-600 hover:bg-blue-400"
              : authenticatedUser.role === "EMPLOYEE"
              ? "bg-amber-600 hover:bg-amber-400"
              : "bg-green-500 hover:bg-green-400"
          }  `}
          // style={{ visibility: "hidden" }}
        >
          <Link
            to={authenticatedUser?.role === "EMPLOYEE" ? "/home" : "/package"}
          >
            <i className="fa-solid fa-dolly  text-zinc-50 text-3xl m-4"></i>
          </Link>
        </div>

        <div
          className={`  m-1 rounded-xl shadow-xl ${
            authenticatedUser.role === "ADMIN"
              ? "bg-sky-600 hover:bg-blue-400"
              : authenticatedUser.role === "EMPLOYEE"
              ? "bg-amber-600 hover:bg-amber-400"
              : "bg-green-500 hover:bg-green-400"
          }  `}
        >
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
        <div
          className={`  m-1 rounded-xl shadow-xl ${
            authenticatedUser.role === "ADMIN"
              ? "bg-sky-600 hover:bg-blue-400"
              : authenticatedUser.role === "EMPLOYEE"
              ? "bg-amber-600 hover:bg-amber-400 "
              : "bg-green-500 hover:bg-green-400"
          }  `}
        >
          <Link
            to={
              authenticatedUser?.role === "EMPLOYEE"
                ? "/scanEmployee"
                : authenticatedUser?.role === "ADMIN"
                ? "/home"
                : "/ScanCustomer"
            }
          >
            <i className="fa-solid fa-qrcode  text-zinc-50 text-3xl m-4"></i>
          </Link>
        </div>
        <div
          className={`  m-1 rounded-xl shadow-xl ${
            authenticatedUser.role === "ADMIN"
              ? "bg-sky-600 hover:bg-blue-400"
              : authenticatedUser.role === "EMPLOYEE"
              ? "bg-amber-600 hover:bg-amber-400 "
              : "bg-green-500 hover:bg-green-400"
          }  `}
        >
          <DropDown />
        </div>
      </div>
    </div>
  );
}
export default NavSideBar;
