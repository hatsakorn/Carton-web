import QRCode from 'qrcode.react';
export default function qrForm({ onClose,link,data }) {
  const text = JSON.stringify(link)
  return (
    <div className="flex justify-between">
      <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl  w-full">
        <div className="w-full h-[] p-6 m-auto bg-white rounded-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center  text-blue-700 ">
            QR Code
          </h1>
          <div className="">
            <QRCode value={text} renderAs="canvas" />
          </div>
        </div>
      </div>
    </div>
  );
}
