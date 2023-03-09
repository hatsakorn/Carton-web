import jwtDecode from "jwt-decode";
import QRCode from "qrcode.react";

export default function qrForm({ onClose, link, data }) {
  const text = JSON.stringify(link);
  const payload = jwtDecode(localStorage.getItem("ACCESS_TOKEN"));
  console.log(payload);
  return (
    <div className="flex justify-between">
      <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl ">
        <div className="flex-col h-96  m-9 w-96 rounded-2xl shadow-xl hover:scale-105 duration-300 ">
          <h1 className="text-3xl font-semibold text-center  text-blue-700 h-10">
            QR Code
          </h1>
          <div className=" ml-16  h-52 w-64 text-xl  bg-white text-black mt-10 font-bold">
            <p>Customer Id:{payload.id}</p>
            <p>Customer Name:{payload.firstName}</p>
            <p>Item Name: {data.Items[0].details}</p>
          </div>
        </div>
        <div className=" h-96 p-6 m-auto bg-white rounded-md lg:max-w-xl">
          <div className="flex justify-center m-10">
            <QRCode size={200} value={text} renderAs="canvas" />
          </div>
        </div>
      </div>
    </div>
  );
}
