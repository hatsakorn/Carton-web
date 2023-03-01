import React, { useState } from "react";
import Input from "../../components/Input";

const editInput = {
  title: "",
  description: "",
  price: "",
  isActive: "",
  startDate: "",
  endDate: ""
};

function EditPackage() {
  const [input, setInput] = useState(editInput);

  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleEditPackage = (e) => {
    e.preventDefault();
  };
  return (
    <div className="m-3">
      <div className="flex justify-center">
        <h1>Edit Package</h1>
      </div>
      <form onSubmit={handleEditPackage}>
        <div className="flex justify-between items-center ">
          <label>Package Name</label>
          <Input className="text-end" name="title" />
        </div>
        <div className="flex justify-between items-center">
          <label>Description</label>
          <Input name="description" />
        </div>
        <div className="flex justify-between items-center">
          <label>Price</label>
          <Input name="price" />
        </div>
        <div className="flex justify-between items-center">
          <label>isActive</label>
          <Input name="isActive" />
        </div>
        <div className="flex justify-between items-center">
          <label>startDate</label>
          <Input name="startDate" />
        </div>
        <div className="flex justify-between items-center">
          <label>endDate</label>
          <Input name="endDate" />
        </div>
        <div className="flex justify-center">
          <button type="submit">Edit Package</button>
        </div>
      </form>
    </div>
  );
}

export default EditPackage;
