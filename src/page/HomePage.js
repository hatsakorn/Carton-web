import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function HomePage() {
  const percentage = 66;

  return (
    <div className="flex justify-between">
      <div className="flex-col flex justify-evenly text-center w-20">
        <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
          <i className="fa-solid fa-circle-user text-zinc-50 text-3xl m-4"></i>
        </div>

        <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
          <i clasName="fa-solid fa-house  text-zinc-50 text-3xl m-4"></i>
        </div>

        <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
          <i className="fa-solid fa-dolly  text-zinc-50 text-3xl m-4"></i>
        </div>

        <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
          <i className="fa-solid fa-car  text-zinc-50 text-3xl m-4"></i>
        </div>
        <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
          <i className="fa-solid fa-qrcode  text-zinc-50 text-3xl m-4"></i>
        </div>
        <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
          <i className="fa-solid fa-gear  text-zinc-50 text-3xl m-4"></i>
        </div>
      </div>
      <body className="flex justify-between bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
        <div className="flex-row">
          <div className="flex">sdf</div>
          <div className="flex">ds</div>
          <div className="flex">sdf</div>
        </div>
        <div className="flex">zxczx</div>
        <div className="flex">wqqwe</div>

        <div className="relative  flex-col mt-10 flex justify-between min-h-screen overflow-hidden h-14 mr-20">
          <div className=" w-80 h-80 p-6  bg-blue-700  rounded-xl shadow-md lg:max-w-xl">
            <CircularProgressbar
              className=" p-7"
              value={percentage}
              text={`${percentage}%`}
            ></CircularProgressbar>
          </div>
          <div className=" w-80 p-6  bg-white rounded-md lg:max-w-xl flex row justify-between">
            <div className="flex">Received</div>
            <div className="flex">Sent</div>
            <div className="flex">Expeted</div>
          </div>
          <div className=" w-80 h-96 p-6  bg-white rounded-md lg:max-w-xl flex-row ">
            <div className="flex">
              <div className="flex hover:bg-blue-400 m-1 rounded-xl shadow-xl"></div>
              <i className="fa-solid fa-dolly text-blue-900 text-3xl m-4"></i>
            </div>
            <div className="flex">ds</div>
            <div className="flex">sdf</div>
          </div>
        </div>
      </body>
    </div>
  );
}
