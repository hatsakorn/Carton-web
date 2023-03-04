import { useState } from "react";
import Modal from "../components/Modal";
import QrEmployee from "../QR/qrEmployee";
import { useZxing } from "react-zxing";

export default function ScanEmployee() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
  });

  return (
    <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden h-14 mr-20">
        <div>
        <video ref={ref} />
        <p>
          <span>Last result:</span>
          <span>{result}</span>
        </p>
          <button
            onClick={() => setOpen(true)}
            className="bg-sky-600 rounded m-3 p-1 hover:opacity-70 text-white "
          >
            QR button
          </button>
          <Modal open={open} onClose={() => setOpen(false)}>
            <QrEmployee onClose={() => setOpen(false)} />
          </Modal>
        </div>
      </div>
    </div>
  );
}
