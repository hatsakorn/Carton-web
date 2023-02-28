import React, { useState } from "react";
import Input from "../../components/Input";

const initialInput = {
  package: "",
  details: "",
  price: "",
  dateIn: "",
  dateOut: ""
};

function PackageForm({ showPackage }) {
  const [input, setInput] = useState(initialInput);

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="m-3">
      {showPackage.map((el) => {
        <div>
          <h1>Package</h1>
          <button disabled package={"packageA"}>
            Package
          </button>
        </div>;
      })}
      <h1>Product Name</h1>
      <Input
        placeholder={"Input your product Name"}
        name="details"
        value={input.details}
        onChange={onChange}
      />
      <h1>Start Date</h1>
      <Input
        placeholder={"Input your start date"}
        name="dateIn"
        value={input.dateIn}
        onChange={onChange}
      />
      <h1>End Date</h1>
      <Input
        placeholder={"Input your end date"}
        name="dateOut"
        value={input.dateOut}
        onChange={onChange}
      />
      <h1>Detail of Product</h1>
      <Input
        placeholder={"details"}
        name="details"
        value={input.details}
        onChange={onChange}
      />
    </div>
  );
}

export default PackageForm;
