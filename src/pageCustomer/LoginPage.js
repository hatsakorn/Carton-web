// import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import Example from "../template/Example";
import { useState } from "react";
import RegisterModalT from "../template/RegisterModalT";
import Modal from "../components/Modal";

export default function Login() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between">
      <div className="flex-col flex justify-evenly text-center w-20">
        <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
          <i className="fa-solid fa-circle-user text-zinc-50 text-3xl m-4"></i>
        </div>

        <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
          <i className="fa-solid fa-house  text-zinc-50 text-3xl m-4"></i>
        </div>
        <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
          <i className="fa-solid fa-dolly  text-zinc-50 text-3xl m-4"></i>
        </div>

        <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
          <i className="fa-solid fa-car  text-zinc-50 text-3xl m-4"></i>
        </div>
        <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
          <i className="fa-solid fa-qrcode  text-zinc-50 text-3xl m-4"></i>
        </div>
        <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
          <i className="fa-solid fa-gear  text-zinc-50 text-3xl m-4"></i>
        </div>
      </div>
      <body className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
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
              {" "}
              <button
                onClick={() => setOpen(true)}
                className="bg-sky-600 rounded m-3 p-1 hover:opacity-70"
              >
                Register
              </button>
              <Modal
                open={open}
                onClose={() => setOpen(false)}
                title={"Create an Account"}
              >
                <RegisterModalT onClose={() => setOpen(false)} />
              </Modal>
            </div>
          </div>
          <hr />
        </div>
      </body>
    </div>
  );

  //     <div>
  //      <header>
  //   <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
  //     <div className="container-fluid">
  //       <a className="navbar-brand" href="#">Fixed navbar</a>
  //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div className="collapse navbar-collapse" id="navbarCollapse">
  //         <ul className="navbar-nav me-auto mb-2 mb-md-0">
  //           <li className="nav-item">
  //             <a className="nav-link active" aria-current="page" href="#">Home</a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link" href="#">Link</a>
  //           </li>
  //           <li className="nav-item">
  //             <a className="nav-link disabled">Disabled</a>
  //           </li>
  //         </ul>
  //         <form className="d-flex" role="search">
  //           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
  //           <button className="btn btn-outline-success" type="submit">Search</button>
  //         </form>
  //       </div>
  //     </div>
  //   </nav>
  // </header>

  //     // <div className="bg-slate-200 ">
  //     //   <form className="">
  //     //     <div>
  //     //       <div className="mb-2 ">
  //     //         <Label htmlFor="email1" value="Your email" />
  //     //       </div>
  //     //       <TextInput
  //     //         id="email1"
  //     //         type="email"
  //     //         required={true}
  //     //       />
  //     //     </div>
  //     //     <div>
  //     //       <div className="mb-2 block">
  //     //         <Label htmlFor="password1" value="Your password" />
  //     //       </div>
  //     //       <TextInput id="password1" type="password" required={true} />
  //     //     </div>
  //     //     <div className="flex items-center gap-2">
  //     //       <Checkbox id="remember" />
  //     //       <Label htmlFor="remember">Remember me</Label>
  //     //     </div>
  //     //     <Button type="submit">Submit</Button>
  //     //   </form>
  //     // </div>
}
