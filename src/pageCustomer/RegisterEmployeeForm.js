import Input from "../components/Input";
import * as authApi from "../api/auth-api";
import { useState } from "react";
import validateRegisterEmployee from "../validatetors/Auth-validatorEmployee";

const initialInput = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  // confirmPassword: "",
  telephoneNumber: ""
};

export default function RegisterEmployeeForm({ onClose }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegisterEmployee(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        await authApi.registerEmployee(input);
        setInput(initialInput);
        onClose();
      }
    } catch (err) {
      console.log(err.response?.data.Message);
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
          error={error.username}
        />
        <h1>First Name</h1>
        <Input
          name="firstName"
          value={input.firstName}
          onChange={handleChangeInput}
          error={error.firstName}
          placeholder={"Enter your firstName"}
        />
        <h1>Surname</h1>
        <Input
          name="lastName"
          value={input.lastName}
          onChange={handleChangeInput}
          error={error.lastName}
          placeholder={"Enter your surname"}
        />
        <h1>Telephone Number</h1>
        <Input
          name="telephoneNumber"
          value={input.telephoneNumber}
          onChange={handleChangeInput}
          error={error.telephoneNumber}
          placeholder={"Enter your Telephone Number"}
        />

        <h1>Email</h1>
        <Input
          name="email"
          value={input.email}
          onChange={handleChangeInput}
          error={error.email}
          placeholder={"Enter your Email"}
        />
        <h1>Password</h1>
        <Input
          name="password"
          value={input.password}
          onChange={handleChangeInput}
          error={error.password}
          placeholder={"Password"}
        />
        {/* <h1>Confirm Password </h1>
        <Input
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChangeInput}
          error={error.confirmPassword}
          placeholder={"Enter Confirm Password"}
        /> */}
        <div className="bg-blue-600 rounded flex justify-center h-[50px] my-7 shadow-xl">
          <button type="submit" className="text-white text-xl font-semibold">
            Create an Account
          </button>
        </div>
      </form>
    </>
  );
}
