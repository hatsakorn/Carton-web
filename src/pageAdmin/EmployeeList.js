import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

export default function EmployeeList() {
  const { getEmployee, fetchEmployee } = useAdmin();
  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployee();
  }, []);

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <>
      {getEmployee.map((el) => (
        <div
          key={el.id}
          className={`${
            el.role === "ADMIN"
              ? "hidden"
              : "mt-20 space-y-6 flex flex-col justify-center items-center"
          }`}
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
              <button className=" m-3  bg-rose-600 w-20 flex justify-center rounded-lg p-1 text-white hover:opacity-90">
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      <div
        className="w-20 text-white bg-sky-600 rounded-lg p-1 text-center hover:opacity-90"
        onClick={handleBackButton}
      >
        <button className="w-16 rounded-lg">Back</button>
      </div>
    </>
  );
}
