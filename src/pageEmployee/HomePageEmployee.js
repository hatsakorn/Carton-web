import { Pagination } from "flowbite-react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useWarehouse from "../hooks/useWarehouse";
import { useEffect, useState } from "react";
import PopupBox from "../components/popupBox";
// import Input from "../components/Input";

export default function HomePageEmployee() {
  const { shelfSql, fetchWarehouseData } = useWarehouse(true);
  const [section, setSection] = useState(1);
  const [totalSection, setTotalSection] = useState(1);
  // const [itemList, setItemList] = useState([]);
  const [itemPerpage, setItemPerpage] = useState(40);
  const [showBox, setShowBox] = useState(0);

  function updateBackgroundColor(el) {
    return el.isAvailable ? " bg-amber-900" : "bg-amber-300	";
  }

  const startIndex = (section - 1) * 40;
  const endIndex = startIndex + 40;
  const itemsToDisplay = shelfSql.slice(startIndex, endIndex);

  const items = shelfSql;
  let count = 0;
  items.forEach((el) => {
    if (el.isAvailable) {
      count++;
    }
  });

  let count2 = 0;
  if (shelfSql) {
    count2 = Object.keys(shelfSql).length;
  }

  const result = (((+count2 - +count) / +count2) * 100).toFixed(1);

  useEffect(() => {
    setTotalSection(Math.ceil(shelfSql.length / 40));
    // const allItem = () => {
    // const a = shelfSql.filter((e) => e.Items);
    // const d = a.map((e) => e.Items);
    // const b = d.map((e) => e);
    // setItemList(b);
    // console.log(b);

    // console.log(itemList);
    // };

    // allItem();
  }, [shelfSql]);

  useEffect(() => {
    fetchWarehouseData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangeSection = (event) => {
    const value = +event.target.value;
    setItemPerpage(value);
  };

  const handlePageChange = (page) => {
    setSection(page);
  };

  const showDetailBox = (index) => {
    setShowBox(itemsToDisplay[index - 1]);
    console.log(itemsToDisplay[index - 1]);
    // setShowBox(Items[0].dateIn(index));
  };

  return (
    <>
      <div className="flex justify-between bg-gradient-to-r bg-white  shadow-md w-full">
        <div className="w-full justify-between">
          <div className="flex-row justify-between">
            <div className="flex justify-between my-5">
              <div className="flex ml-5 text-2xl font-bold  text-amber-900">
                Warehouse Logistics
              </div>
            </div>
            <div className="flex flex-col w-[100%]">
              <div className="flex justify-center">
                <div className=" w-11/12 ml-10">
                  <div className="grid p-5  grid-cols-8 gap-3  w-[100%] h-[350px] bg-slate-50 rounded-xl shadow-2xl">
                    {itemsToDisplay.map((el, index) => (
                      <PopupBox
                        onClick={() => showDetailBox(index + 1)}
                        key={el.id}
                        text={el.id}
                        available={el.isAvailable ? "true" : "false"}
                      >
                        <div
                          className={`text-transparent w-6 h-6 m-2 rounded-sm shadow-2xl hover:scale-150 duration-300 ${updateBackgroundColor(
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
            </div>
            {/* <div className="flex justify-between mt-10 mx-24 "> */}
            <div className="flex justify-center my-16">
              <div className=" w-auto">
                <Pagination
                  currentPage={section}
                  onPageChange={handlePageChange}
                  showIcons={true}
                  totalPages={totalSection}
                  itemsperpage={itemPerpage}
                  onChange={handleChangeSection}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center ">
            <div className=" w-8/12 h-96 pr-10 flex-row ">
              <div className="flex justify-evenly bg-white h-32  w-auto rounded-2xl shadow-2xl hover:scale-105 duration-300  mt-1">
                <div className="flex ">
                  <i className="fa-solid fa-box-archive w-10 text-center justify-center text-5xl mt-4 text-amber-900 hover:scale-105 duration-300  " />
                </div>
                <div className="flex justify-between w-80 mt-5 text-blue-900 mr-10">
                  <div className=" bg-amber-300 w-72 h-20 text-center rounded-xl pl-3 shadow-2xl hover:bg-blue-200">
                    Date In:
                    {showBox?.Items?.map((el) => {
                      const date = new Date(el.dateIn);
                      const formattedDate = date.toLocaleDateString();
                      return <div>{formattedDate}</div>;
                    })}
                  </div>
                  <div className="  bg-amber-300 w-72 h-20 text-center rounded-xl pl-3 shadow-2xl hover:bg-blue-200 ml-5">
                    Date Out:
                    {showBox?.Items?.map((el) => {
                      const date = new Date(el.dateOut);
                      const formattedDate = date.toLocaleDateString();
                      return <div>{formattedDate}</div>;
                    })}
                  </div>
                  <div className="flex  bg-amber-300 w-72 h-20 text-center rounded-xl pl-3 shadow-2xl hover:bg-blue-200 ml-5">
                    Details: {showBox?.Items?.map((el) => el.details)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-evenly h-3/6 overflow-hidden mt-5 mr-3 rounded-xl shadow-md">
          <div className=" w-70  p-6  bg-white  rounded-xl shadow-md lg:max-w-xl ">
            <CircularProgressbar
              className=" text-center"
              value={result}
              text={`${result}%`}
            ></CircularProgressbar>

            <div className="flex-col justify-between text-center text-xl mt-10 text-amber-900">
              <div className="flex bg-white  m-1 rounded-xl justify-center shadow-xl hover:scale-105 duration-300 h-9 mt-1">
                Total Shelf: {count2}
              </div>
              <div className="flex bg-white  m-1 rounded-xl  justify-center shadow-xl hover:scale-105 duration-300 h-9 mt-1">
                Available Shelf: {count}
              </div>
              <div className="flex-col bg-white  m-1 rounded-xl  justify-center shadow-xl hover:scale-105 duration-300 h-24 mt-1 pt-3">
                <div className="flex">
                  <div className="text-transparent w-6 h-6 m-2 rounded-sm shadow-2xl hover:scale-150 duration-300 bg-amber-900" />
                  <p>Available</p>
                </div>
                <div className="flex">
                  <div className="text-transparent w-6 h-6 m-2 rounded-sm shadow-2xl hover:scale-150 duration-300 bg-amber-300" />
                  <p>Unavailable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
