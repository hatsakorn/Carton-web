import { useState, useRef, useEffect } from "react";
import useAdmin from "../hooks/useAdmin";
export default function AdminGetEmployee() {
  const [open, setOpen] = useState(false);
  const { getEmployee, setSelectEmployee } = useAdmin();
  const [employeeName, setEmployeeName] = useState("");
  const dropdownEl = useRef();

  const handleOnClickEmployee = (eN, eId) => {
    setSelectEmployee(eId);
    setEmployeeName(eN);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownEl.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className=" w-20 h-6">
      <div ref={dropdownEl} className=" w-20  " onClick={() => setOpen(!open)}>
        : {employeeName}
        <div>
          <div
            className={`relative bg-stone-600 top-[4px]  ${
              open ? "" : "hidden"
            }`}
          >
            <div>
              <div className="absolute flex flex-col bg-cyan-600 w-20 rounded-b-sm px-2 drop-shadow-2xl">
                {getEmployee.map((el) => (
                  <div
                    className=""
                    key={el.id}
                    value={el.id}
                    onClick={() => handleOnClickEmployee(el.firstName, el.id)}
                  >
                    {el.firstName}
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
