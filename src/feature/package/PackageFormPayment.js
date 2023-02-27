import React from "react";
import Input from "../../components/Input";

function PackageFormPayment() {
  return (
    <div>
      <h1>Package</h1>
      <button disabled package={"packageA"}>
        Package
      </button>
      <h1>Product Name</h1>
      <Input placeholder={"Product Name"} />
      <h1>Start Date</h1>
      <Input placeholder={"Start Date"} />
      <h1>End Date</h1>
      <Input placeholder={"End Date"} />
      <h1>Detail of Product</h1>
      <Input placeholder={"Detail of Product"} />
    </div>
  );
}

export default PackageFormPayment;
