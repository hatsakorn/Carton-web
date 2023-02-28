import React from "react";
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
  return (
    <div>
      <Input placeholder={"title"} name="title" />
      <Input placeholder={"description"} name="description" />
      <Input placeholder={"price"} name="price" />
      <Input placeholder={"isActive"} name="isActive" />
      <Input placeholder={"startDate"} name="startDate" />
      <Input placeholder={"endDate"} name="endDate" />
    </div>
  );
}

export default EditPackage;
