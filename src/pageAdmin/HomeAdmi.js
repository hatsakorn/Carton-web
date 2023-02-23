import { Progress } from "flowbite-react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import NavSideBar from "../components/NavSideBar";

export default function HomeAdmin() {
  const percentage = 5;

  return (
    <>
      <div className="flex justify-between bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
        <div className="w-full justify-between">
          <div className="flex-row justify-between">
            <div className="flex justify-between my-5">
              <div className="flex ml-5">Warehouse Logistics</div>
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
                  <span>items no:</span>
                </div>
                <div className="flex">
                  <span>customer:</span>
                </div>
                <div className=" flex ">
                  employee id:
                  <button
                    id="dropdownHoverButton"
                    data-dropdown-toggle="dropdownHover"
                    data-dropdown-trigger="hover"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button"
                  >
                    Seleced List
                    <svg
                      className="w-4 h-4 ml-2"
                      aria-hidden="true"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="dropdownHover"
                    className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownHoverButton"
                    >
                      <li>
                        <a
                          href="/"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Emp0001
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Emp0002
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Emp0003
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Emp0004
                        </a>
                      </li>
                    </ul>
                  </div>
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
              <span className="flex ml-10">Detail:</span>
            </div>

            <div className="flex justify-between">
              <div className="flex  bg-blue-700 hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
                <i className=" fa-solid fa-box text-slate-100 text-3xl m-4 "></i>
              </div>
              <span className="flex ml-10 ">Detail:</span>
            </div>

            <div className="flex justify-between">
              <div className="flex bg-blue-700 hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
                <i className=" fa-solid fa-box  text-slate-100 text-3xl m-4 "></i>
              </div>
              <span className="flex ml-10">Detail:</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
