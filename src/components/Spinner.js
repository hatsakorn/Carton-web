import React from "react";
import { Spinner } from "flowbite-react";

export default function Spin() {
  return (
    <div
      className="
       min-h-screen flex justify-center items-center  z-40 absolute  bg-slate-600 min-w-full opacity-60"
    >
      <Spinner aria-label="Center-aligned spinner example" size="xl" />
    </div>
  );
}
