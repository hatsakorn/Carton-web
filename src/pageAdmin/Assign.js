import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import { Progress } from "flowbite-react";
import useAdmin from "../hooks/useAdmin";
// import { Progress } from "flowbite-react";
import * as employeeApi from "../api/auth-admin";
import { useNavigate } from "react-router-dom";

export default function Assign() {
  const percentage = 5;
  const { itSelfWork } = useAdmin();

  const navigate = useNavigate();
  const updateStatusStockIn = async (taskId) => {
    await employeeApi.taskStatusFromEmployee(taskId, {
      status: "COMPLETE"
    });
    navigate(0);
  };

  return (
    <div className="flex justify-between bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
      <div className="w-full justify-between">
        <div className="flex-row justify-between">
          <div className="flex justify-between my-5">
            <div className="flex ml-5 text-2xl font-bold  text-blue-800">
              Warehouse Logistics
            </div>
          </div>

          <div className="flex flex-col ">
            {itSelfWork.map((el) => (
              <div
                key={el.id}
                className={`${
                  el.status === "COMPLETE"
                    ? "hidden"
                    : "flex justify-between ml-20 w-11/12 my-3 h-30 bg-sky-500 rounded-lg hover:scale-105 duration-300 hover:bg-blue-400 mt-1 pt-3 shadow-xl"
                }`}
              >
                <div className="flex justify-between ml-10">
                  <div className=" w-96 flex justify-between items-center ml-5 font-bold text-xl">
                    <div className=" text-gray-50 ml-3">
                      Order No: {el.itemId}
                    </div>
                    <div className="text-gray-50"> Task: {el.task}</div>
                    <div className="text-gray-50 ">Status: {el.status}</div>
                  </div>
                </div>

                <div className="flex">
                  <button
                    onClick={() => updateStatusStockIn(el.id)}
                    className=" m-3  bg-blue-600 rounded-lg p-1 text-sm text-white hover:bg-blue-300 shadow-xl"
                  >
                    Approve
                  </button>
                  <button className=" m-3 bg-red-500 rounded-lg p-1 text-white hover:bg-red-200 shadow-xl">
                    Cancel
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative  flex-col mt-10 flex justify-between min-h-screen overflow-hidden h-14 mr-10 "></div>
    </div>
  );
}
