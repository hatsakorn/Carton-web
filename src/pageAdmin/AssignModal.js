export default function AssignModal() {
  return (
    <>
      <div className="w-auto  mb-5 mx-10 rounded-xl ">
        <div className="flex justify-between  w-[650px] h-30 bg-sky-500 rounded-lg ">
          <div className="flex justify-between ">
            <div className=" w-96 flex justify-between items-center">
              <div className=" text-gray-50 ml-3">Order no:</div>
              <div className="text-gray-50 ">User id:</div>
            </div>
          </div>

          <div className="flex items-center">
            <div className=" m-3  ">Status:</div>
            <div className=" m-3  bg-sky-600 rounded-lg p-1 text-white">
              Pending
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-11/12 ">
            <div className="mt-10 mb-8 ">Move 3 Cartons to sector 5 row 2</div>

            <div className=" w-70 h-96 pr-10  rounded-md  flex-row space-y-3 ">
              <div className="flex   items-center">
                <div className="flex  bg-blue-700 hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
                  <i className=" fa-solid fa-box   text-slate-100 text-3xl m-4"></i>
                </div>
                <span className="flex ml-10">sdfsdfs</span>
              </div>

              <div className="flex items-center ">
                <div className="flex  bg-blue-700 hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
                  <i className=" fa-solid fa-box text-slate-100 text-3xl m-4 "></i>
                </div>
                <span className="flex ml-10 ">sdfsdfs</span>
              </div>

              <div className="flex items-center">
                <div className="flex bg-blue-700 hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
                  <i className=" fa-solid fa-box  text-slate-100 text-3xl m-4 "></i>
                </div>
                <span className="flex ml-10">sdfsdfs</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end ">
          <button className="bg-blue-600 my-8 w-40 h-12 rounded-xl text-slate-50 font-semibold hover:opacity-80 ">
            Complete
          </button>
        </div>
      </div>
    </>
  );
}
