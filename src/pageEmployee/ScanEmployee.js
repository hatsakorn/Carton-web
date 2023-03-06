import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import QrEmployee from "../QR/qrEmployee";
import { useZxing } from "react-zxing";
import * as itemsApi from "../api/items-api";

export default function ScanEmployee() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");
  const [cameraOn, setCameraOn] = useState(false);
  const [item, setItem] = useState({});
  const { ref } = useZxing({
    onResult(result) {
      setResult(result.getText());
    },
  });

  const fetchItem = async (result) => {
    console.log(result)
    const res = await itemsApi.getItemLocationByCustomerIdAndItemId(result);
    setItem(res.data);
  };

  useEffect(() => {
    if (result) {
      try {
        const jsonResult = JSON.parse(result);
        setOpen(true);
        fetchItem(jsonResult);
      } catch (error) {
        console.log("Invalid JSON format");
      }
    }
  }, [result]);

  return (
    <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden h-14 mr-20">
        <div>
          <button
            onClick={() => setCameraOn(true)}
            className="bg-sky-600 rounded m-3 p-1 hover:opacity-70 text-white "
          >
            camera
          </button>
        </div>
        <div style={{ visibility: cameraOn ? "visible" : "hidden" }}>
          <video ref={ref} />
          <p>
            <span>Last result:</span>
            <span>{result}</span>
          </p>
          <button onClick={() => setCameraOn(false)}>close</button>
        </div>

        <Modal open={open} onClose={() => setOpen(false)}>
          <QrEmployee onClose={() => setOpen(false)} data = {item} />
        </Modal>
      </div>
    </div>
  );
}
