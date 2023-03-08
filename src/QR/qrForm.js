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
          <div className=" ml-16  h-52 w-64 text-xl  bg-white text-black mt-10 font-bold">
            <p>Customer Id:</p>
            <p>Item Id: {data.id}</p>
            <p>Shelf Id:</p>
            <p>Warehouse Location:</p>
          </div>
        </div>
        <div className=" h-96 p-6 m-auto bg-white rounded-md lg:max-w-xl">
          <div className="flex justify-center m-10">
            <QRCode value={text} renderAs="canvas" />
          </div>
          <div className="flex row justify-evenly ml-4">
            <button className="flex h-10  w-20 text-center text-xl  text-white rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Pending
            </button>
            <button className="flex h-10  w-20 text-center text-xl  text-white  bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Reject
            </button>
            <button className="flex h-10  w-20 text-center text-xl  text-white  bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Compete
            </button>
            <button className="flex h-10  w-20 text-center text-xl  text-white  bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Watiing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
