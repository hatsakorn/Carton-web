import { useEffect, useRef, useState } from "react";
import useAuth from "../hooks/useAuth";
import { Link, Navigate } from "react-router-dom";

export default function DropDown() {
  const [isOpen, setOpen] = useState(false);
  const dropdownEl = useRef();
  const { logout } = useAuth();

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
    <div className=" dropdown flex m-3" ref={dropdownEl}>
      <button
        className="text-black hover:text-purple border border-purple-200 hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-full text-sm px-4 py-2.5 text-center inline-flex items-center"
        onClick={handleDropDown}
      >
        <i class="fa-solid fa-grip-lines text-white"></i>
      </button>

      <div
        id="dropdown"
        className={`absolute right-1 top-[65px] z-10 w-40 bg-white divide-gray-100 rounded divide-y  shadow ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className=" z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
          <li>
            <Link to="/mainpage">
              <button
                onClick={logout}
                className=" text-red-600 block py-2 px-4 hover:bg-gray-100 pr-[90px]"
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
