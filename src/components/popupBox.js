import { useState, useEffect } from "react";
import useWarehouse from "../hooks/useWarehouse";

function PopupBox({ warehouse, available, text, children }) {
  const [show, setShow] = useState(false);
  const { shelfSql } = useWarehouse(true);
  // const [detail, setDetail] = useState({});

  const handleMouseEnter = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };
  useEffect(() => {
    // shelfSql;
  }, [shelfSql]);

  // const handleMouseClick = () => {};
  return (
    <div
      className="relative"
      // onClick={handleMouseClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {show && (
        <div className="absolute z-40">
          <div className=" flex-row justify-between popup w-40 h-20 bg-sky-600 rounded-xl shadow-xl text-center text-xl text-white pt-1">
            <div className="flex pl-3">ID: {text}</div>
            <div className="flex pl-3">
              {available === "true" ? "Available" : "Empty"}
            </div>
            {/* <div className="flex">Warehouse: {warehouse}</div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default PopupBox;
