import { useState } from "react";
import validateRegister from "../validatetors/Auth-validatorCustomer";
import * as itemApi from '../api/items-api'

export default function qrEmployee({ onClose,data }) {
  const HandleToggleButton = (itemId,status) => {
    input = {
      itemId: itemId,
      status: status
    }
    const res = itemApi.updateStatusByQrCode(input);
  }
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
        <div className="flex row justify-evenly ml-4">
              <button className="flex h-10  w-20 text-center text-xl  text-white rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500" onClick={()=>HandleToggleButton(data[0]?.item_id,'check-in-status')}>
                check in
              </button>
              <button className="flex h-10  w-20 text-center text-xl  text-white  bg-gradient-to-r from-violet-500 to-fuchsia-500" onClick={()=>HandleToggleButton(data[0]?.item_id,'check-out-status')}>
                check out
              </button>
            </div>
      </div>
    </div>
  );
}
