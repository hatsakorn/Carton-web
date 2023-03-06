import { Progress } from "flowbite-react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useWarehouse from "../hooks/useWarehouse";
import { useEffect } from "react";
import PopupBox from "../components/popupBox";
import useAdmin from "../hooks/useAdmin";
import { useState } from "react";
import DropDownEmployee from "./DropDownEmployee";
import * as adminApi from "../api/auth-admin";
import { useNavigate } from "react-router-dom";

export default function AdminAssign() {
  const navigate = useNavigate();
  // const [openDropDownSelectEmployee, setOpenDropDownSelectEmployee] =
  //   useState(false);
  const [dropdownStates, setDropdownStates] = useState({});
  const [employeeName, setEmployeeName] = useState("");
  //   const [itemIdI, setItemIdI] = useState([]);
  const { shelfSql } = useWarehouse();
  const { nullShelf, setSelectBox, selectBox, selectEmployee } = useAdmin();
  const { getEmployee, setSelectEmployee } = useAdmin();
  const handleOnClickEmployee = (eN, eId) => {
    setSelectEmployee(eId);
    setEmployeeName(eN);
    // setOpenDropDownSelectEmployee(false);
  };
  function updateBackgroundColor(el) {
    return el.isAvailable ? "bg-amber-500" : "bg-amber-400";
  }

  const percentage = 5;

  useEffect(() => {
    // handleChange(e) {
    //     console.log("Fruit Selected!!");
    //   }
    // console.log(shelfSql);
    // shelfSql;
  }, [shelfSql]);
  //   const handleOnClickRoom = async () => {
  //     const res = await paymentApi.postOrder({
  //       order: '123',
  //       month: selectMonth,
  //       // roomId: selectRoom,
  //       roomId: roomId.id,
  //       totalPrice: totalPriceA,
  //       timeStart: date.startDate,
  //       timeEnd: date.endDate,
  //     });
  const handleOnClickSelectBox = (Box) => setSelectBox(Box);
  //   const handleOnClickEmployee = (e) => setSelectEmployee(e);
  //   const handleOnClickSelectAssignTask = async (e) => {
  //     await adminApi.createAssignTask({
  //       task: "เอาของไปเก็บ",
  //       status: "pending",
  //       employeeId: selectEmployee,
  //       shelf: selectBox,
  //       itemId: e.target.getAttribute("itemidi")
  //     });
  //   };

  const handleOnClickSelectAssignTask = async (itemId) => {
    // const itemidi = e.currentTarget.getAttribute("itemidi");
    // console.log("Item Id ", itemidi);
    try {
      await adminApi.createAssignTask({
        task: "เอาของไปเก็บ",
        status: "pending",
        employeeId: selectEmployee,
        shelf: selectBox,
        itemId: itemId
      });
      navigate(0);
    } catch (error) {
      console.log("It's Error", error);
    }
  };

  // const openDropdownEachId = (itemShelfIsNull) => {};

  const toggleDropdown = (id) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  // const [openDropDownSelectEmployee, setOpenDropDownSelectEmployee] = useState(
  //   {}
  // );

  //   console.log(nullShelf);
  //   console.log(handleOnClickSelectAssignTask, "qweqweqwe");

  //   console.log(selectBox, "a ");

  return (
    <>
      <div className="flex justify-between bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
        <div className="w-full justify-between">
          <div className="flex-row justify-between">
            <div className="flex justify-between my-5">
              <div className="flex ml-5">Warehouse Logistics</div>
            </div>
            <div className="flex flex-col w-[100%]">
              <div className="flex justify-evenly w-[100%]">
                <div className="grid p-5  grid-cols-8 gap-3  w-[100%]">
                  {shelfSql.map((el) => (
                    <PopupBox
                      key={el.id}
                      text={el.id}
                      available={el.isAvailable ? "true" : "false"}
                      // warehouse={el.Items.details}
                    >
                      <div
                        onClick={() => handleOnClickSelectBox(el.id)}
                        className={`text-transparent w-6 h-6 m-2 rounded-sm shadow-xl ${updateBackgroundColor(
                          el
                        )}`}
                      >
                        {el.isAvailable ? "true" : "false"}
                      </div>
                    </PopupBox>
                  ))}
                </div>
              </div>

              <div className=" my-10 pl-10 bg-orange-50">
                List of sections {selectBox} {selectEmployee}
              </div>
              <div className="bg-red-300 flex justify-center items-center ">
                <div className=" flex flex-col w-11/12">
                  {nullShelf.map((el) => (
                    <div
                      key={el.id}
                      className="bg-cyan-600 my-2 flex justify-between items-center p-4 rounded-md text-white font-semibold"
                    >
                      <div>Item no.{el.id}</div>
                      <div>customer.first.name</div>
                      <div className="flex items-center">
                        <div className="mr-3 bg-">emp id</div>
                        <div className="bg-black w-20 h-8">
                          <div
                            className=" w-20 bg-amber-700 "
                            onClick={
                              () => toggleDropdown(el.id)
                              // setOpenDropDownSelectEmployee(
                              //   !openDropDownSelectEmployee
                              // )
                            }
                          >
                            : {employeeName}
                            {/* <DropDownEmployee
                              setEmployeeName={setEmployeeName}
                              openDropDownSelectEmployee={
                                openDropDownSelectEmployee
                              }
                            /> */}
                            <div>
                              <div
                                className={`relative bg-stone-600 top-[10px] ${
                                  dropdownStates[el.id] ? "" : "hidden"
                                }`}
                              >
                                <div>
                                  <div className="absolute flex flex-col bg-zinc-600 w-20">
                                    {getEmployee.map((el) => (
                                      <div
                                        className=""
                                        key={el.id}
                                        value={el.id}
                                        onClick={() =>
                                          handleOnClickEmployee(
                                            el.firstName,
                                            el.id
                                          )
                                        }
                                      >
                                        {el.firstName}
                                        {/* {el.lastName} */}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* ????? */}
                          </div>
                        </div>
                      </div>
                      <div>status:</div>
                      <button
                        key={el.id}
                        className="bg-red-700 p-1 rounded hover:opacity-80"
                        onClick={() => handleOnClickSelectAssignTask(el.id)}
                      >
                        Confirm
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              {/* <div className="flex justify-between mt-10 mx-24 "> */}
              {/* <div className="flex">
                  <span>Section 001</span>
                </div> */}
              {/* <div className="flex  ">
                  <Progress
                    progress={45}
                    label="use"
                    labelPosition="outside"
                    labelProgress={true}
                  />
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>

        <div className="relative  flex-col mt-10 flex justify-evenly min-h-screen overflow-hidden h-14 bg-red-800 ">
          <div className=" w-70 h-70 p-6  bg-blue-700  rounded-xl shadow-md lg:max-w-xl">
            <CircularProgressbar
              className=" p-7"
              value={percentage}
              text={`${percentage}%`}
            ></CircularProgressbar>
          </div>
          <div className=" w-60 p-3 bg-lime-700 rounded-md lg:max-w-xl flex row justify-between mr-10">
            <div className="flex text-xs">Received</div>
            <div className="flex text-xs">Sent</div>
            <div className="flex text-xs">Expeted</div>
          </div>

          <div className=" w-70 h-96 pr-10 bg-zinc-700 rounded-md lg:max-w-xl flex-row ">
            <div className="flex justify-between">
              <div className="flex  bg-blue-700 hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
                <i className=" fa-solid fa-box   text-slate-100 text-3xl m-4"></i>
              </div>
              <span className="flex ml-10">Detail:</span>
            </div>

            <div className="flex justify-between">
              <div className="flex  bg-blue-700 hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
                <i className=" fa-solid fa-box text-slate-100 text-3xl m-4 "></i>
              </div>
              <span className="flex ml-10 ">Detail:</span>
            </div>

            <div className="flex justify-between">
              <div className="flex bg-blue-700 hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
                <i className=" fa-solid fa-box  text-slate-100 text-3xl m-4 "></i>
              </div>
              <span className="flex ml-10">Detail:</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
