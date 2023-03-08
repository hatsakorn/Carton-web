import { useState } from "react";
import Modal from "../components/Modal";
import RegisterEmployeeForm from "../pageCustomer/RegisterEmployeeForm";
import EmployeeList from "./EmployeeList";

export default function Employee() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between">
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
              <EmployeeList />
              {/* em2 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
