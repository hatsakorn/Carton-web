import { useState } from "react";
import useLoading from "../hooks/useLoading";
import Modal from "../components/Modal";
import RegisterFrom from "../auth/RegisterForm";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

const initialInput = {
  username: "",
  password: ""
};

export default function Login() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState(initialInput);
  const { startLoading, stopLoading } = useLoading();

  const { login } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await login(input);
      setInput(initialInput);
      toast.success("successssssssssssssssss.");
    } catch (err) {
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="flex justify-between">
      <div className="flex justify-center bg-gradient-to-r bg-white shadow-md w-full">
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden h-14 mr-20"></div>
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center  text-blue-700 ">
            Log in
            <p className="mt-8 text-xs font-light text-center text-gray-700">
              Let’s login to your account and start Carton
            </p>
          </h1>
          <div>
            <form className="mt-6" onSubmit={handleSubmitForm}>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Username
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Your username"
                  name="username"
                  value={input.username}
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
                  placeholder="Your password"
                  name="password"
                  value={input.password}
                  onChange={handleChangeInput}
                />
              </div>

              <button
                className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:bg-blue focus:outline-none focus:bg-purple-600 drop-shadow-xl"
                type="submit"
              >
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
      </div>
    </div>
  );
}
