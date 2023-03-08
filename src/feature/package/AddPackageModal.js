import React, { useState } from "react";
import Input from "../../components/Input";
import * as packageApi from "../../api/package-api";
import { toast } from "react-toastify";

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
  const [file, setFile] = useState(null);

  const onChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitPackage = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("posterUrl", file);
      formData.append("title", input.title);
      formData.append("description", input.description);
      formData.append("startDate", input.startDate);
      formData.append("endDate", input.endDate);
      formData.append("price", input.price);
      formData.append("isActive", input.isActive);
      const res = await packageApi.createPackage(formData);
      setInput(initialInput);
      toast.success("success.");
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  return (
    <div className="m-3">
      <form onSubmit={handleSubmitPackage}>
        <h1>Package Name</h1>
        <Input
          placeholder={"title"}
          name="title"
          value={input.title}
          onChange={onChangeInput}
        />
        <h1>Start Date</h1>
        <Input
          type="date"
          placeholder={"startDate"}
          name="startDate"
          value={input.startDate}
          onChange={onChangeInput}
        />
        <h1>End Date</h1>
        <Input
          type="date"
          placeholder={"endDate"}
          name="endDate"
          value={input.endDate}
          onChange={onChangeInput}
        />
        <h1>Detail of Package</h1>
        <Input
          placeholder={"description"}
          name="description"
          value={input.description}
          onChange={onChangeInput}
        />
        <h1>Price</h1>
        <Input
          placeholder={"Input Price"}
          name="price"
          value={input.price}
          onChange={onChangeInput}
        />
        <h1>Poster_picture</h1>
        <Input
          type="file"
          placeholder={"Input Poster"}
          name="posterUrl"
          value={input.posterUrl}
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <div className="flex justify-center bg-blue-600 rounded-md text-white p-3">
          <button type="submit">Add Package</button>
        </div>
      </form>
    </div>
  );
}

export default AddPackageModal;
