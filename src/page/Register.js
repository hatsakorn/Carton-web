export default function Register() {
  return (
    <div className="flex justify-between">
      <div className="flex-col flex justify-evenly text-center w-20">
        <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
          <i className="fa-solid fa-circle-user text-zinc-50 text-3xl m-4"></i>
        </div>

        <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
          <i clasName="fa-solid fa-house  text-zinc-50 text-3xl m-4"></i>
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
        <div className="w-full h-[] p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center  text-blue-700 ">
            Create an Account
            <p className="mt-8 text-xs font-light text-center text-gray-700">
              Became trivo member ,you’ll get exlusive treatment from trivo{" "}
            </p>
          </h1>
          <div>
            <form
              className="mt-6"
              //  onSubmit={handleSubmitForm}
            >
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
                  placeholder="Enter your user Name"
                  // value={emailOrMobile}
                  // onChange={(e) => setEmailOrMobile(e.target.value)}
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
                  // value={emailOrMobile}
                  // onChange={(e) => setEmailOrMobile(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-800"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter your name"
                  // value={emailOrMobile}
                  // onChange={(e) => setEmailOrMobile(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <label
                  htmlFor="surName"
                  className="block text-sm font-semibold text-gray-800"
                >
                  sur Name
                </label>
                <input
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                  placeholder="Enter your surName"
                  // value={emailOrMobile}
                  // onChange={(e) => setEmailOrMobile(e.target.value)}
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
                  // value={emailOrMobile}
                  // onChange={(e) => setEmailOrMobile(e.target.value)}
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
                  // value={emailOrMobile}
                  // onChange={(e) => setEmailOrMobile(e.target.value)}
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
                  placeholder="Enter your Password"
                  // value={emailOrMobile}
                  // onChange={(e) => setEmailOrMobile(e.target.value)}
                />
              </div>

              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:bg-blue focus:outline-none focus:bg-purple-600 drop-shadow-xl mb-3">
                Create an Account
              </button>
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:bg-blue focus:outline-none focus:bg-purple-600 drop-shadow-xl">
                Sign up with Google
              </button>
              {/*<p className="mt-8 text-xs font-light text-center text-gray-700">
                Already have an account? <link>Login</link>
              </p> */}
            </form>
          </div>
        </div>
      </body>
    </div>
  );
}
