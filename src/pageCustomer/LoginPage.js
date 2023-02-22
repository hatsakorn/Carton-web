// import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import Example from "../template/Example";
import { useState } from "react";
import RegisterModalT from "../template/RegisterModalT";
import Modal from "../components/Modal";
import RegisterFrom from "../auth/RegisterForm";

export default function Login() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between">
      <body className="flex justify-center bg-gradient-to-r bg-white  shadow-md w-full">
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden h-14 mr-20"></div>
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center  text-blue-700 ">
            Log in
            <p className="mt-8 text-xs font-light text-center text-gray-700">
              Let’s login to your account and start your calorie management
            </p>
          </h1>
          <div>
            <form
              className="mt-6"
              //  onSubmit={handleSubmitForm}
            >
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Email
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Email address or phone number"
                  // value={emailOrMobile}
                  // onChange={(e) => setEmailOrMobile(e.target.value)}
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
                  placeholder="Password"
                  // value={password}
                  // onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:bg-blue focus:outline-none focus:bg-purple-600 drop-shadow-xl">
                Login
              </button>
            </form>
            <div>
              <button
                onClick={() => setOpen(true)}
                className="bg-sky-600 rounded m-3 p-1 hover:opacity-70 text-white "
              >
                Register
              </button>
              <Modal
                open={open}
                onClose={() => setOpen(false)}
                // title={"Create an Account"}
              >
                {/* <RegisterModalT onClose={() => setOpen(false)} /> */}
                <RegisterFrom onClose={() => setOpen(false)} />
              </Modal>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
