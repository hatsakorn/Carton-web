import { Progress } from "flowbite-react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function HomePage() {
  const percentage = 5;

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

      <body className="flex justify-between bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
        <div className="w-full justify-between">
          <div className="flex-row justify-between">
            <div className="flex justify-between my-5">
              <div className="flex ml-5">Warehouse Logistics</div>
              <form className="flex items-center mr-5">
                <label for="simple-search" class="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </form>
            </div>
            <div className="flex flex-col">
              <div className="flex  justify-evenly">
                {/* <div className="grid grid-cols-6"> */}
                <div className="flex flex-col p-5 ">
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>

                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                </div>
                <div className="flex flex-col p-5 ">
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                </div>
                <div className="flex flex-col p-5 ">
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                </div>

                <div className="flex flex-col p-5 ">
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                </div>
                <div className="flex flex-col p-5 ">
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                </div>
                <div className="flex flex-col p-5">
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                  <div className="flex bg-amber-500 hover:bg-amber-300 text-amber-500 w-6 h-6 m-2 rounded-sm shadow-xl"></div>
                </div>
              </div>
              <div className=" mt-10 pl-10">List of sections</div>
              <div className="flex justify-evenly mt-10">
                <div className="flex">
                  <span>Section 001</span>
                </div>
                <div className="flex">
                  <span>Date</span>
                </div>
                <div className=" flex ">
                  <Progress
                    progress={45}
                    label="Flowbite"
                    labelPosition="outside"
                    labelProgress={true}
                  />
                </div>
              </div>

              <div className="flex justify-evenly mt-10">
                <div className="flex">
                  <span>Section 001</span>
                </div>
                <div className="flex">
                  <span>Date</span>
                </div>
                <div className=" flex ">
                  <Progress
                    progress={55}
                    label="Flowbite"
                    labelPosition="outside"
                    labelProgress={true}
                  />
                </div>
              </div>

              <div className="flex justify-evenly mt-10">
                <div className="flex">
                  <span>Section 001</span>
                </div>
                <div className="flex">
                  <span>Date</span>
                </div>
                <div className=" flex ">
                  <Progress
                    progress={60}
                    label="Flowbite"
                    labelPosition="outside"
                    labelProgress={true}
                  />
                </div>
              </div>
              <div className="flex justify-evenly mt-10">
                <div className="flex">
                  <span>Section 001</span>
                </div>
                <div className="flex">
                  <span>Date</span>
                </div>
                <div className=" flex ">
                  <Progress
                    progress={20}
                    label="Flowbite"
                    labelPosition="outside"
                    labelProgress={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative  flex-col mt-10 flex justify-between min-h-screen overflow-hidden h-14  ">
          <div className=" w-70 h-70 p-6  bg-blue-700  rounded-xl shadow-md lg:max-w-xl">
            <CircularProgressbar
              className=" p-7"
              value={percentage}
              text={`${percentage}%`}
            ></CircularProgressbar>
          </div>
          <div className=" w-60 p-3 bg-white rounded-md lg:max-w-xl flex row justify-between mr-10">
            <div className="flex text-xs">Received</div>
            <div className="flex text-xs">Sent</div>
            <div className="flex text-xs">Expeted</div>
          </div>

          <div className=" w-70 h-96 pr-10 bg-white rounded-md lg:max-w-xl flex-row ">
            <div className="flex justify-between">
              <div className="flex  bg-blue-700 hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
                <i className=" fa-solid fa-box   text-slate-100 text-3xl m-4"></i>
              </div>
              <span className="flex ml-10">sdfsdfs</span>
            </div>

            <div className="flex justify-between">
              <div className="flex  bg-blue-700 hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
                <i className=" fa-solid fa-box text-slate-100 text-3xl m-4 "></i>
              </div>
              <span className="flex ml-10 ">sdfsdfs</span>
            </div>

            <div className="flex justify-between">
              <div className="flex bg-blue-700 hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
                <i className=" fa-solid fa-box  text-slate-100 text-3xl m-4 "></i>
              </div>
              <span className="flex ml-10">sdfsdfs</span>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}
