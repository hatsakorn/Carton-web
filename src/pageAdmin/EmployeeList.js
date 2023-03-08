import useAdmin from "../hooks/useAdmin";

export default function EmployeeList() {
  const { getEmployee } = useAdmin();
  return (
    <>
      {getEmployee.map((el) => (
        <div
          key={el.id}
          className="mt-20 space-y-6 flex flex-col justify-center items-center"
        >
          <div className="flex justify-between  w-[650px] h-30 bg-sky-500 rounded-lg ">
            <div className="flex justify-between ">
              <div className=" w-96 flex justify-between items-center">
                <div className=" text-gray-50 ml-3 font-semibold text-[16px]">
                  Employee Name: {el.firstName} {el.lastName}
                </div>
                <div className="text-gray-50 font-semibold text-[16px]">
                  User id: {el.id}
                </div>
              </div>
            </div>

            <div className="flex items-center">
              {/* <div className=" m-3  "></div> */}
              <button className=" m-3  bg-rose-600 w-20 flex justify-center rounded-lg p-1 text-white hover:opacity-90">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
