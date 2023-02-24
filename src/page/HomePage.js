import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import useCustomer from "../hooks/useCustomer";

export default function HomePage1() {
  const { customerId, customerItem } = useCustomer();
  // console.log(customerId, 123123123213123);
  // useEffect(() => {
  //   console.log(customerItem, "123123123");
  //   console.log(customerItem.Shelf, "meeee");
  // }, [customerItem]);
  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
          <div className="relative  flex flex-col justify-center min-h-screen overflow-hidden  h-14 mr-20 w-screen">
            <div className="flex justify-center">
              <div className=" w-11/12 bg-sky-600 rounded-r-lg  ">
                <h1 className="text-2xl font-semibold">fgddffgd</h1>
                <div className="flex justify-between flex-col space-y-4 my-3">
                  {customerItem?.map((el) => (
                    <div className="flex space-x-10">
                      <div>id {el.id}</div>
                      <div>details {el.details}</div>
                      <div>dateIn {el.dateIn}</div>
                      <div>dateIn {el.Shelf.Warehouse.location}</div>
                      <div>==== {el.Shelf?.isAvailable ? "true" : "false"}</div>
                      {console.log(el.Shelf?.isAvailable)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
