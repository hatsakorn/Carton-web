import React from "react";

function NavSideBar() {
  return (
    <div className="flex-col flex justify-evenly text-center w-20">
      <div className="m-1 rounded-xl">
        <i className="fa-solid fa-circle-user text-zinc-50 text-3xl m-4"></i>
      </div>

      <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
        <i className="fa-solid fa-house  text-zinc-50 text-3xl m-4"></i>
      </div>

      <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
        <i className="fa-solid fa-dolly  text-zinc-50 text-3xl m-4"></i>
      </div>

      <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
        <i className="fa-solid fa-car  text-zinc-50 text-3xl m-4"></i>
      </div>
      <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
        <i className="fa-solid fa-qrcode  text-zinc-50 text-3xl m-4"></i>
      </div>
      <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
        <i className="fa-solid fa-gear  text-zinc-50 text-3xl m-4"></i>
      </div>
    </div>
  );
}

export default NavSideBar;
