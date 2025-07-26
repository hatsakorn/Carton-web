import { Pagination } from "flowbite-react";
import "react-circular-progressbar/dist/styles.css";
import useWarehouse from "../hooks/useWarehouse";
import { useEffect } from "react";
import PopupBox from "../components/popupBox";
import useAdmin from "../hooks/useAdmin";
import { useState } from "react";
// import DropDownEmployee from "./DropDownEmployee";
import * as adminApi from "../api/auth-admin";
import { useNavigate } from "react-router-dom";
import AdminGetEmployee from "./AdminGetEmployee";
import useAuth from "../hooks/useAuth";

export default function AdminAssign() {
  const navigate = useNavigate();
  // const [dropdownStates, setDropdownStates] = useState({});
  // const [employeeName, setEmployeeName] = useState("");
  const { shelfSql } = useWarehouse();
  const { fetchAuthUser } = useAuth();
  const { nullShelf, setSelectBox, selectBox, selectEmployee } = useAdmin();
  // const { getEmployee, setSelectEmployee } = useAdmin();
  // const handleOnClickEmployee = (eN, eId) => {
  //   setSelectEmployee(eId);
  //   setEmployeeName(eN);
  // };

  const [section, setSection] = useState(1);
  const [totalSection, setTotalSection] = useState(1);
  // const [itemList, setItemList] = useState([]);
  const [itemsperpage, setItemPerPage] = useState(40);

  function updateBackgroundColor(el) {
    return el.isAvailable ? " bg-sky-900" : "bg-blue-300";
  }

  const startIndex = (section - 1) * 40;
  const endIndex = startIndex + 40;
  const itemsToDisplay = shelfSql.slice(startIndex, endIndex);

  useEffect(() => {
    setTotalSection(Math.ceil(shelfSql.length / 40));
    const allItem = () => {
      const a = shelfSql.filter((e) => e.Items);
      const d = a.map((e) => e.Items);
      const b = d.map((e) => e);
      // setItemList(b);
    };
    allItem();
  }, [shelfSql]);

  useEffect(() => {
    fetchAuthUser();
  }, []);

  const handleChangeSection = (event) => {
    const value = +event.target.value;
    setItemPerPage(value);
  };

  const handlePageChange = (page) => {
    setSection(page);
  };

  const handleOnClickSelectBox = (Box, availableMai) => {
    if (availableMai === false) {
      return setSelectBox("Unavailable");
    }
    return setSelectBox(Box);
  };

  // console.log(shelfSql);
  // console.log(nullShelf);
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

  // const toggleDropdown = (id) => {
  //   setDropdownStates((prevState) => ({
  //     ...prevState,
  //     [id]: !prevState[id]
  //   }));
  // };

  // const [openDropDownSelectEmployee, setOpenDropDownSelectEmployee] = useState(
  //   {}
  // );

  //   console.log(nullShelf);
  //   console.log(handleOnClickSelectAssignTask, "qweqweqwe");

  //   console.log(selectBox, "a ");

  return (
    <>
      <div className="flex justify-between bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full min-h-screen">
        <div className="w-full justify-between">
          <div className="flex-row justify-between">
            <div className="flex justify-between my-5">
              <div className="flex ml-5 text-xl font-bold">
                Warehouse Logistics
              </div>
            </div>
            <div className="flex flex-col w-[100%] ">
              <div className="flex justify-center ">
                <div className="flex  w-11/12 ml-36">
                  <div className="grid p-5  grid-cols-8 gap-3  w-[100%] h-[350px] bg-slate-50 rounded-xl shadow-2xl mr-16 ">
                    {itemsToDisplay.map((el) => (
                      <PopupBox
                        key={el.id}
                        text={el.id}
                        available={el.isAvailable ? "true" : "false"}
                        // warehouse={el.Items.details}
                      >
                        <div
                          onClick={() =>
                            handleOnClickSelectBox(el.id, el.isAvailable)
                          }
                          className={`text-transparent w-6 h-6 m-2 rounded-sm shadow-xl hover:scale-150 duration-300 ${updateBackgroundColor(
                            el
                          )}`}
                        >
                          {el.isAvailable ? "true" : "false"}
                        </div>
                      </PopupBox>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-center my-7">
                <div>
                  <Pagination
                    currentPage={section}
                    onPageChange={handlePageChange}
                    showIcons={true}
                    totalPages={totalSection}
                    itemsperpage={itemsperpage}
                    onChange={handleChangeSection}
                  />
                </div>
              </div>
              <div className=" my-10 pl-10 text-xl font-bold">
                List of sections
              </div>
              <div className=" flex justify-center items-center  ">
                <div className=" flex flex-col w-11/12 overflow-y-auto h-80 ">
                  {nullShelf.map((el) => (
                    <div
                      key={el.id}
                      className=" bg-sky-600 my-2 flex justify-between items-center p-4 rounded-md text-white font-semibold m-20 hover:bg-sky-400 "
                    >
                      <div>Item no.{el.id}</div>
                      {/* <div>customer.first.name</div> */}
                      <div>Shelf : {selectBox}</div>
                      <div className="flex items-center">
                        <div className="mr-2">emp name </div>
                        <AdminGetEmployee />
                      </div>
                      {/* <div>status:</div> */}
                      <button
                        key={el.id}
                        className="bg-red-700 p-1 rounded-xl hover:opacity-80"
                        onClick={() => handleOnClickSelectAssignTask(el.id)}
                      >
                        Confirm
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
