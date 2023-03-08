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
    }
  });

  const fetchItem = async (result) => {
    console.log(result);
    const res = await itemsApi.getItemLocationByCustomerIdAndItemId(result);
    setItem(res.data);
  };

  const handleModalClose = () => {
    setOpen(false);
    setResult("");
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
    <div className="flex justify-center  rounded-l-xl shadow-md w-full">
      <div className=" bg-white shadow-2xl w-auto">
        <div className="flex-col justify-center text-center text-2xl mt-10">
          <h1 className=" text-3xl mb-4">Place the QR Code inside the area</h1>
          <h2>Scanning will start automatically</h2>
        </div>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden h-24">
          <div style={{ visibility: cameraOn ? "visible" : "hidden" }}>
            <video ref={ref} />
            <div className=" bg-white h-10 w-auto rounded-l-xl shadow-md mt-4 my-10 text-black text-center ">
              <p className=" text-2xl">
                <span>Last result: {result}</span>
              </p>
            </div>
            <button
              className=" bg-blue-400 h-10 w-24 rounded-xl shadow-md text-xl mt-4 ml-3 hover:scale-105 duration-300  hover:bg-blue-200"
              onClick={() => setCameraOn(false)}
            >
              close
            </button>
          </div>
          <div className=" flex justify-center">
            <button
              onClick={() => setCameraOn(true)}
              className="bg-sky-600 m-3 p-1 hover:opacity-70 text-white rounded-2xl shadow-xl hover:scale-105 duration-300 h-20 w-96 "
            >
              <i className="fa-solid fa-camera text-3xl"> Scan QR Code</i>
            </button>
          </div>

          <Modal open={open} onClose={() => handleModalClose()}>
            <QrEmployee onClose={() => setOpen(false)} data={item} />
          </Modal>
        </div>
      </div>
    </div>
  );
}
