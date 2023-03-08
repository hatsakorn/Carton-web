import QRCode from "qrcode.react";
export default function qrForm({ onClose, link, data }) {
  const text = JSON.stringify(link);
  return (
    <div className="flex justify-between">
      <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl ">
        <div className="flex-col h-96  m-9 w-96 rounded-2xl shadow-xl hover:scale-105 duration-300 ">
          <h1 className="text-3xl font-semibold text-center  text-blue-700 h-10">
            QR Code
          </h1>
        <div className=" h-96 p-6 m-auto bg-white rounded-md lg:max-w-xl">
          <div className="flex justify-center m-10">
            <QRCode value={text} renderAs="canvas" />
          </div>
        </div>
      </div>
    </div>
          </div>
  );
}
