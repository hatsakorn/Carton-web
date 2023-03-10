import { useState } from "react";
import Modal from "../components/Modal";
// import RegisterModalT from "./RegisterModalT";
import AssignModal from "../pageAdmin/AssignModal";
import RegisterEmployeeForm from "../pageCustomer/RegisterEmployeeForm";

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="bg-sky-600 rounded m-3 p-1 hover:opacity-70"
      >
        Register
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        // title={"Create an Account"}
      >
        {/* <RegisterModalT onClose={() => setOpen(false)} /> */}
        {/* <RegisterEmployeeForm onClose={() => setOpen(false)} /> */}
        <AssignModal onClose={() => setOpen(false)} />
      </Modal>
    </>
  );
}
