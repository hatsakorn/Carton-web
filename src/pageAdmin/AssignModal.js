export default function AssignModal() {
  return (
    <>
      <div className="w-[900px] mb-5 mx-10 rounded-xl">
        <div>order</div>
        <div>Move 3 Cartons to sector 5 row 2</div>
        <div>
          <div className=" w-70 h-96 pr-10 bg-gray-600 rounded-md  flex-row ">
            <div className="flex justify-between bg-gray-50">
              <div className="flex  bg-blue-700 hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
                <i className=" fa-solid fa-box   text-slate-100 text-3xl m-4"></i>
              </div>
              <span className="flex ml-10">sdfsdfs</span>
            </div>

            <div className="flex justify-between">
              <div className="flex  bg-blue-700 hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
                <i className=" fa-solid fa-box text-slate-100 text-3xl m-4 "></i>
              </div>
              <span className="flex ml-10 ">sdfsdfs</span>
            </div>

            <div className="flex justify-between">
              <div className="flex bg-blue-700 hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
                <i className=" fa-solid fa-box  text-slate-100 text-3xl m-4 "></i>
              </div>
              <span className="flex ml-10">sdfsdfs</span>
            </div>
          </div>
        </div>
        <button>Complete</button>
      </div>
    </>
  );
}
