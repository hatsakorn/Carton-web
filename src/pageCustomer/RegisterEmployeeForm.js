import Input from "../components/Input";
import * as authApi from "../api/auth-api";
import { useState } from "react";
import validateRegisterEmployee from "../validatetors/Auth-validatorEmployee";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as adminApi from "../api/auth-admin";
import useAdmin from "../hooks/useAdmin";

const initialInput = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  telephoneNumber: ""
};

export default function RegisterEmployeeForm({ onClose }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});
  const { fetchEmployee } = useAdmin();
  // const navigate = useNavigate();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegisterEmployee(input);
      if (result) {
        setError(result);
        // console.log(result, " hIIIIIII");
      } else {
        setError({});
        await authApi.registerEmployee(input);
        setInput(initialInput);
        // await adminApi.getEmployeeI();
        await fetchEmployee();
        onClose();
      }
    } catch (err) {
      toast.error(err.response?.data.message);
      // const a = err.response.data.message;
      // setError(a);
      // console.log(error, "qwwqqqqqqq");
      // console.log({});
      // console.log(input);
    } finally {
      // navigate(0);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmitForm}>
        <h1>User Name</h1>
        <Input
          placeholder={"Enter your  Username"}
          name="username"
          value={input.username}
          onChange={handleChangeInput}
          error={error.username && error}
        />
        {error && (
          <small className=" flex -mt-3 mb-3 font-bold text-red ">
            {error.username}
          </small>
        )}
        <h1>First Name</h1>
        <Input
          name="firstName"
          value={input.firstName}
          onChange={handleChangeInput}
          error={error.firstName}
          placeholder={"Enter your firstName"}
        />{" "}
        {error && (
          <small className=" flex -mt-3 mb-3 font-bold text-red ">
            {error.firstName}
          </small>
        )}
        <h1>Surname</h1>
        <Input
          name="lastName"
          value={input.lastName}
          onChange={handleChangeInput}
          error={error.lastName}
          placeholder={"Enter your surname"}
        />{" "}
        {error && (
          <small className=" flex -mt-3 mb-3 font-bold text-red ">
            {error.lastName}
          </small>
        )}
        <h1>Telephone Number</h1>
        <Input
          name="telephoneNumber"
          value={input.telephoneNumber}
          onChange={handleChangeInput}
          error={error.telephoneNumber}
          placeholder={"Enter your Telephone Number"}
        />{" "}
        {error && (
          <small className=" flex -mt-3 mb-3 font-bold text-red ">
            {error.telephoneNumber}
          </small>
        )}
        <h1>Email</h1>
        <Input
          name="email"
          value={input.email}
          onChange={handleChangeInput}
          error={error.email}
          placeholder={"Enter your Email"}
        />{" "}
        {error && (
          <small className=" flex -mt-3 mb-3 font-bold text-red ">
            {error.email}
          </small>
        )}
        <h1>Password</h1>
        <Input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
          error={error.password}
          placeholder={"Password"}
        />{" "}
        {error && (
          <small className=" flex -mt-3 mb-3 font-bold text-red ">
            {error.password}
          </small>
        )}
        <h1>Confirm Password </h1>
        <Input
          type="password"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          error={error.confirmPassword}
          placeholder={"Enter Confirm Password"}
        />{" "}
        {error && (
          <small className=" flex -mt-3 mb-3 font-bold text-red ">
            {error.confirmPassword}
          </small>
        )}
        <div className="bg-blue-600 rounded flex justify-center h-[50px] my-7 shadow-xl">
          <button type="submit" className="text-white text-xl font-semibold">
            Create an Account
          </button>
        </div>
      </form>
    </>
  );
}
