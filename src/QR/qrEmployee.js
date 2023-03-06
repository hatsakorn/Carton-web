import { useState } from "react";
import validateRegister from "../validatetors/Auth-validatorCustomer";
import * as authApi from "../api/auth-api";

export default function qrEmployee({ onClose,data }) {
  // const reqister
  {console.log(data)}
  return (
    <div className="flex justify-between">
      <div className="flex bg-gradient-to-r bg-white  rounded-l-xl  w-full  h-96">
        <div className="w-full  p-6 m-auto bg-white rounded-md lg:max-w-xl">
          <h1 className=" text-center text-2xl text-black">Verify</h1>
          <p>customerId: {data[0]?.first_name}</p>
          <p>itemId: {data[0]?.item_id}</p>
          <p>shelfId: {data[0]?.shelf}</p>
          <p>warehouseLocation: {data[0]?.location}</p>
        </div>
      </div>
    </div>
  );
}
