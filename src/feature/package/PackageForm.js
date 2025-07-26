import React, { useState } from "react";
import Input from "../../components/Input";
import * as itemsApi from "../../api/items-api";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function PackageForm({ selectedPackageId }) {
  const initialInput = {
    packageId: +selectedPackageId.packageId,
    details: "",
    contractStartDate: "",
    contractEndDate: ""
  };
  const { authenticatedUser } = useAuth();

  const [input, setInput] = useState(initialInput);

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await itemsApi.createItems([input]);
    setInput(initialInput);
    navigate(0);
  };

  return (
    <div className="m-3">
      <form onSubmit={handleSubmitForm}>
        <h1>Your Package</h1>
        <h1 className="p-3"> {selectedPackageId.title}</h1>
        <h1>Product Detail</h1>
        <Input
          className="rounded-2xl"
          placeholder={"Input your product detail (e.g. Boots Pen Glass)"}
          name="details"
          value={input.details}
          onChange={handleOnChange}
        />
        <h1>Contract Start Date</h1>
        <Input
          type="date"
          placeholder={"Input your contractStartDate"}
          name="contractStartDate"
          value={input.contractStartDate}
          onChange={handleOnChange}
        />
        <h1>Contract End Date</h1>
        <Input
          type="date"
          placeholder={"Input your contractEndDate"}
          name="contractEndDate"
          value={input.contractEndDate}
          onChange={handleOnChange}
        />
        <div
          className={`flex justify-center ${
            authenticatedUser.role === "ADMIN"
              ? "bg-sky-600 hover:bg-blue-400"
              : authenticatedUser.role === "EMPLOYEE"
              ? "bg-amber-600 hover:bg-amber-400 "
              : "bg-green-500 hover:bg-green-400"
          }  rounded-md text-white my-7 h-10 hover:bg-blue-200 shadow-xl`}
        >
          <button className="text-xl w-full" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PackageForm;
