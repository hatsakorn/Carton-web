// import { useState } from "react";
import * as packageApi from "../../api/package-api";
import useAuth from "../../hooks/useAuth";

function EditPackage({ selectedEditPackage, isActive, setActive }) {
  const { authenticatedUser } = useAuth();

  const handleEditPackage = async (e) => {
    e.preventDefault();
    await packageApi.editPackage(selectedEditPackage, { isActive });
  };
  return (
    <div className="m-3">
      <div className="flex justify-center">
        <h1>Edit Package</h1>
      </div>
      <form onSubmit={handleEditPackage}>
        <div className="flex justify-between items-center m-3">
          <input
            className="mr-3"
            name="active"
            type="radio"
            onClick={() => setActive(true)}
          />
          <label className="mr-3">Active</label>
          <input
            name="active"
            className="mr-3"
            type="radio"
            onClick={() => setActive(false)}
          />
          <label>InActive</label>
        </div>
        <div
          className={`flex justify-center ${
            authenticatedUser.role === "ADMIN"
              ? "bg-sky-600 hover:bg-blue-400"
              : authenticatedUser.role === "EMPLOYEE"
              ? "bg-amber-600 hover:bg-amber-400 "
              : "bg-green-500 hover:bg-green-400"
          }  rounded-md`}
        >
          <button className="text-white" type="submit">
            Edit Package
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPackage;
