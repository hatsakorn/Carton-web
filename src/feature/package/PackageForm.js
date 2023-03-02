import React, { useState } from "react";
import Input from "../../components/Input";
import * as itemsApi from "../../api/items-api";
import { useNavigate } from "react-router-dom";

function PackageForm({ selectedPackageId }) {
  const initialInput = {
    packageId: +selectedPackageId.packageId,
    details: "",
    contractStartDate: "",
    contractEndDate: ""
  };
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
          placeholder={"Input your product detail (e.g. Boots Pen Glass)"}
          name="details"
          value={input.details}
          onChange={handleOnChange}
        />
        <h1>contractStartDate</h1>
        <Input
          type="date"
          placeholder={"Input your contractStartDate"}
          name="contractStartDate"
          value={input.contractStartDate}
          onChange={handleOnChange}
        />
        <h1>contractEndDate</h1>
        <Input
          type="date"
          placeholder={"Input your contractEndDate"}
          name="contractEndDate"
          value={input.contractEndDate}
          onChange={handleOnChange}
        />
        <div className="flex justify-center bg-blue-600 rounded text-white my-7">
          <button className="text-xl" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default PackageForm;
