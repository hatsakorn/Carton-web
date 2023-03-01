import useAdmin from "../hooks/useAdmin";

export default function DropDownEmployee({
  openDropDownSelectEmployee,
  setEmployeeName
}) {
  const { getEmployee, setSelectEmployee } = useAdmin();
  const handleOnClickEmployee = (eN, eId) => {
    setSelectEmployee(eId);
    setEmployeeName(eN);
  };

  return (
    <>
      <div>
        <div
          className={`relative  bg-stone-600 top-[10px]  ${
            openDropDownSelectEmployee ? "" : "hidden"
          }`}
        >
          <div>
            <div className="absolute flex flex-col bg-zinc-600 w-20">
              {getEmployee.map((el) => (
                <div
                  className=""
                  key={el.id}
                  value={el.id}
                  onClick={() => handleOnClickEmployee(el.firstName, el.id)}
                >
                  {el.firstName}
                  {/* {el.lastName} */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
