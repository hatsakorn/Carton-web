import React from "react";
import Input from "../../components/Input";

function PackageForm() {
  return (
    <div>
      <form className="m-3">
        <h1>Product Name</h1>
        <Input placeholder={"Product Name"} />
        <h1>Start Date</h1>
        <Input placeholder={"Start Date"} />
        <h1>End Date</h1>
        <Input placeholder={"End Date"} />
        <h1>Detail of Product</h1>
        <Input placeholder={"Detail of Product"} />
        <h1>Package</h1>
        <Input placeholder={"Package"} />
      </form>
    </div>
  );
}

export default PackageForm;
