import React, { useState } from "react";
import Input from "../../components/Input";

const initialInput = {
  title: "",
  description: "",
  startDate: "",
  endDate: "",
  price: "",
  isActive: 0,
  posterUrl: ""
};

function AddPackageModal() {
  const [input, setInput] = useState(initialInput);

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  return (
    <div className="m-3">
      <h1>Package Name</h1>
      <Input
        placeholder={"title"}
        name="title"
        value={input.title}
        onChange={onChange}
      />
      <h1>Start Date</h1>
      <Input
        placeholder={"startDate"}
        name="startDate"
        value={input.startDate}
        onChange={onChange}
      />
      <h1>End Date</h1>
      <Input
        placeholder={"endDate"}
        name="endDate"
        value={input.endDate}
        onChange={onChange}
      />
      <h1>Detail of Product</h1>
      <Input
        placeholder={"description"}
        name="description"
        value={input.description}
        onChange={onChange}
      />
      <h1>Price</h1>
      <Input
        placeholder={"Input Price"}
        name="price"
        value={input.price}
        onChange={onChange}
      />
      <h1>Poster_picture</h1>
      <Input
        type="file"
        placeholder={"Input Poster"}
        name="posterUrl"
        value={input.posterUrl}
        onChange={onChange}
      />
    </div>
  );
}

export default AddPackageModal;
