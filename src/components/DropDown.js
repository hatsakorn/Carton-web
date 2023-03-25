import { useEffect, useRef, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, Navigate } from "react-router-dom";

export default function DropDown() {
  const [isOpen, setOpen] = useState(false);
  const dropdownEl = useRef();
  const { logout, authenticatedUser } = useAuth();

  const handleDropDown = () => {
    setOpen(!isOpen);
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
    <div className=" dropdown flex " ref={dropdownEl}>
      <button>
        <i
          className="fa-solid fa-arrow-right-from-bracket text-zinc-50 text-3xl p-5 relative"
          onClick={handleDropDown}
        ></i>
      </button>

      <div
        id="dropdown"
        className={`z-10  bg-white divide-gray-100  divide-y  absolute left-24 rounded ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {authenticatedUser.role === "ADMIN" && (
          <ul className=" z-10 w-52 bg-white rounded divide-y divide-gray-100 shadow ">
            <li>
              <Link to="/employee">
                <button
                  // onClick={logout}
                  className=" text-blue-600 block py-2 px-4 hover:bg-gray-100 pr-[90px]"
                >
                  Register Employee
                </button>
              </Link>
            </li>
          </ul>
        )}
        <ul className=" z-10 w-52 bg-white rounded divide-y divide-gray-100 shadow ">
          <li>
            <Link to="/mainpage">
              <button
                onClick={logout}
                className=" text-blue-600 block py-2 px-4 hover:bg-gray-100 pr-[90px]"
              >
                Log out
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
