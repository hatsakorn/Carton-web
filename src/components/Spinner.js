import React from "react";
import { Spinner } from "flowbite-react";

export default function Spin() {
  return (
    <div
      className="
       min-h-screen flex justify-center items-center bg-transparent z-40 bg-gray-200"
    >
      <div className="bg-transparent ">
        <Spinner aria-label="Center-aligned spinner example" size="xl" />
      </div>
    </div>
  );
}
