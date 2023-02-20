import { useState } from "react";
import Modal from "../components/Modal";
import RegisterModalT from "./RegisterModalT";

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>Example</div>
      <button
        onClick={() => setOpen(true)}
        className="bg-sky-600 rounded m-3 p-3 hover:opacity-70"
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
    </>
  );
}
