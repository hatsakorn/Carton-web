// import { useState } from "react";
import * as packageApi from "../../api/package-api";

function EditPackage({ selectedEditPackage, isActive, setActive }) {
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
        <div className="flex justify-center bg-blue-600 rounded-md">
          <button className="text-white" type="submit">
            Edit Package
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditPackage;
