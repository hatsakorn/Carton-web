export default function SubmitFormPackage() {
  return (
    <div className="flex justify-between">
      <div className="flex-col flex justify-evenly text-center w-20">
        <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
          <i className="fa-solid fa-circle-user text-zinc-50 text-3xl m-4"></i>
        </div>

        <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
          <i className="fa-solid fa-house  text-zinc-50 text-3xl m-4"></i>
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
      <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
        <div className="relative justify-center flex flex-col  min-h-screen overflow-hidden h-14 mr-20 ">
          <div className="w-full justify-between">
            <div className="flex-row justify-between">
              <div className="">
                <span className="flex">Name Product</span>
                <div className="flex justify-between ml-20 w-[650px] h-30 bg-sky-500 rounded-lg m-10">
                  <div className="flex justify-between h-10">
                    <div className=" text-gray-50 ml-3">Name Product:</div>
                  </div>
                </div>

                <span className="flex">Start Date</span>
                <div className="flex justify-between ml-20 w-[650px] h-30 bg-sky-500 rounded-lg m-10 ">
                  <div className="flex justify-between h-10">
                    <div className=" text-gray-50 ml-3">Start Date:</div>
                  </div>
                </div>

                <span className="flex">End Date</span>
                <div className="flex justify-between ml-20 w-[650px] h-30 bg-sky-500 rounded-lg m-10 ">
                  <div className="flex justify-between h-10">
                    <div className=" text-gray-50 ml-3">End Date:</div>
                  </div>
                </div>

                <span className="flex">Detail of product</span>
                <div className="flex justify-between ml-20 w-[650px] h-30 bg-sky-500 rounded-lg m-10 ">
                  <div className="flex justify-between h-10">
                    <div className=" text-gray-50 ml-3">Detail of product:</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
