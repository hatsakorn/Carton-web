import { useState } from "react";
import QrForm from "../QR/qrForm";
import Modal from "../components/Modal";

export default function Scan() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden h-14 mr-20">
        <div>
          <button
            onClick={() => setOpen(true)}
            className="bg-sky-600 rounded m-3 p-1 hover:opacity-70 text-white "
          >
            QR button
          </button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <QrForm onClose={() => setOpen(false)} />
          </Modal>
        </div>
      </div>
    </div>
  );
}
