import { useState } from "react";
import validateRegister from "../validatetors/Auth-validatorCustomer";
import * as authApi from "../api/auth-api";

const initialInput = {
  firstName: "",
  lastName: "",
  email: "",
  telephoneNumber: "",
  password: "",
  confirmPassword: "",
  username: "",
  companyName: "",
  address: ""
};

export default function RegisterFrom({ onClose }) {
  const [input, setInput] = useState(initialInput);
  const [error, setError] = useState({});

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      const result = validateRegister(input);
      if (result) {
        setError(result);
      } else {
        setError({});
        // startLoading();
        await authApi.register(input);
        setInput(initialInput);
        onClose();
        // toast.success("success register. please log in to continue.");
      }
    } catch (err) {
      console.log(err);
      // toast.error(err.response?.data.message);
    } finally {
      // stopLoading();
    }
  };

  // const reqister
  return (
    <div className="flex justify-between">
      <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl  w-full">
        <div className="w-full h-[] p-6 m-auto bg-white rounded-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center  text-blue-700 ">
            Create an Account
            <p className="mt-8 text-xs font-light text-center text-gray-700">
              Became trivo member ,you’ll get exlusive treatment from trivo{" "}
            </p>
          </h1>
          <div>
            <form className="mt-6" onSubmit={handleSubmitForm}>
              <div className="mb-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-semibold text-gray-800"
                >
                  First Name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter your firstName"
                  name="firstName"
                  value={input.firstName}
                  onChange={handleChangeInput}
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="lastName"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter your last Name"
                  name="lastName"
                  value={input.lastName}
                  onChange={handleChangeInput}
                  error={error.lastName}
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="companyName"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter your compay name"
                  name="companyName"
                  value={input.companyName}
                  onChange={handleChangeInput}
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="userName"
                  className="block text-sm font-semibold text-gray-800"
                >
                  User Name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter your User Name"
                  name="username"
                  value={input.username}
                  onChange={handleChangeInput}
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="telephoneNumber"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Telephone Number
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter your phone Number"
                  name="telephoneNumber"
                  value={input.telephoneNumber}
                  onChange={handleChangeInput}
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="address"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Address
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter your Address"
                  name="address"
                  value={input.address}
                  onChange={handleChangeInput}
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter your email"
                  name="email"
                  value={input.email}
                  onChange={handleChangeInput}
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter your Password"
                  name="password"
                  value={input.password}
                  onChange={handleChangeInput}
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Confirm Password
                </label>
                <input
                  type="confirmPassword"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="enter Confirm Password"
                  name="confirmPassword"
                  value={input.confirmPassword}
                  onChange={handleChangeInput}
                />
              </div>

              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:bg-blue focus:outline-none focus:bg-purple-600 drop-shadow-xl mb-3">
                Create an Account
              </button>
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:bg-blue focus:outline-none focus:bg-purple-600 drop-shadow-xl">
                Sign up with Google
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
