import { useState } from "react";
import Modal from "../components/Modal";
import RegisterEmployeeForm from "../pageCustomer/RegisterEmployeeForm";
import EmployeeList from "./EmployeeList";
import { useNavigate } from "react-router-dom";

export default function Employee() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <div className=" bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full   ">
      <div className="  flex flex-col   min-h-screen   w-full  justify-center items-center">
        <div className=" w-9/12 ">
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
          <div className=" space-y-6 flex flex-col items-center  h-96  overflow-y-auto my-20">
            {/* employee list */}
            <EmployeeList />
          </div>
          <div className=" flex justify-center items-center ">
            <div
              className="w-20 text-white bg-sky-600 rounded-lg p-1 text-center hover:opacity-90 "
              onClick={handleBackButton}
            >
              <button className="w-16 rounded-lg">Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
