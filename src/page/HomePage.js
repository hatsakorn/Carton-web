import React from "react";
import AuthLayout from "../layouts/AuthLayout";

function HomePage() {
  return (
    <>
      <div className="flex">
        <AuthLayout />
        <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
          <div className="relative  flex flex-col mt-5 min-h-screen overflow-hidden  rounded-l-xl h-14 mr-20 w-screen">
            <div className=" w-11/12 bg-sky-600 rounded-r-lg ml-10  rounded-xl text-white"></div>
            <div className="flex justify-center items-center h-screen">
              <div className={`text-6xl text-red-600`}>
                You are unauthorized!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
