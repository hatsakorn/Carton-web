import { useState } from "react";
import validateRegister from "../validatetors/Auth-validatorCustomer";
import * as authApi from "../api/auth-api";

export default function qrEmployee({ onClose }) {
  // const reqister
  return (
    <div className="flex justify-between">
      <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl  w-full">
        <div className="w-full h-[] p-6 m-auto bg-white rounded-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center  text-blue-700 ">
            QR Code
          </h1>
          <div className="">
            <div className="flex row justify-evenly ml-4">
              <button className="flex h-10  w-20 text-center text-xl  text-white rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500">
                Pending
              </button>
              <button className="flex h-10  w-20 text-center text-xl  text-white  bg-gradient-to-r from-violet-500 to-fuchsia-500">
                Reject
              </button>
              <button className="flex h-10  w-20 text-center text-xl  text-white  bg-gradient-to-r from-violet-500 to-fuchsia-500">
                Compete
              </button>
              <button className="flex h-10  w-20 text-center text-xl  text-white  bg-gradient-to-r from-violet-500 to-fuchsia-500">
                Watiing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
