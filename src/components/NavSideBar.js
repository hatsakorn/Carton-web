import React from "react";
import { Link } from "react-router-dom";
import DropDown from "../components/DropDown";

function NavSideBar() {
  return (
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
        </Link>
      </div>
      <div className="flex hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
        <DropDown />
      </div>
    </div>
  );
}
export default NavSideBar;
