import { useState } from "react";
import Modal from "../components/Modal";
import RegisterEmployeeForm from "../pageCustomer/RegisterEmployeeForm";

export default function Employee() {
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
      <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
        <div className="relative  flex flex-col justify-center items-center  min-h-screen overflow-hidden  h-14 mr-20 w-screen">
          <div className=" w-9/12">
            {/* header */}
            <div className="flex justify-between">
              <h1 className="font-semibold text-4xl">Employee</h1>
              <button
                onClick={() => setOpen(true)}
                className="bg-cyan-600 text-white font-semibold text-[18px] w-[200px] rounded-xl hover:opacity-80"
              >
                Register Employee +
              </button>
              <Modal open={open} onClose={() => setOpen(false)}>
                <RegisterEmployeeForm onClose={() => setOpen(false)} />
              </Modal>
            </div>
            {/* body */}
            <div className="mt-20 space-y-6 flex flex-col justify-center items-center">
              {/* employee list */}
              <div className="flex justify-between  w-[650px] h-30 bg-sky-500 rounded-lg ">
                <div className="flex justify-between ">
                  <div className=" w-96 flex justify-between items-center">
                    <div className=" text-gray-50 ml-3 font-semibold text-[16px]">
                      Employee Name:
                    </div>
                    <div className="text-gray-50 font-semibold text-[16px]">
                      User id:
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  {/* <div className=" m-3  "></div> */}
                  <button className=" m-3  bg-rose-600 w-20 flex justify-center rounded-lg p-1 text-white hover:opacity-90">
                    Delete
                  </button>
                </div>
              </div>
              {/* em2 */}
              <div className="flex justify-between  w-[650px] h-30 bg-sky-500 rounded-lg ">
                <div className="flex justify-between ">
                  <div className=" w-96 flex justify-between items-center">
                    <div className=" text-gray-50 ml-3 font-semibold text-[16px]">
                      Employee Name:
                    </div>
                    <div className="text-gray-50 font-semibold text-[16px]">
                      User id:
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  {/* <div className=" m-3  "></div> */}
                  <div className=" m-3  bg-rose-600 w-20 flex justify-center rounded-lg p-1 text-white">
                    Delete
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
