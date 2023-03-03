import { ListGroup, Pagination, Progress } from "flowbite-react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useWarehouse from "../hooks/useWarehouse";
import { useEffect, useState } from "react";
import PopupBox from "../components/popupBox";

export default function HomePageAdmin() {
  const { shelfSql } = useWarehouse(true);
  const [section, setSection] = useState(1);
  const [totalSection, setTotalSection] = useState(1);
  const [itemList, setItemList] = useState([]);
  const [itemPerpage, setItemPerpage] = useState(40);
  const [showBox, setShowBox] = useState(0);

  function updateBackgroundColor(el) {
    return el.isAvailable ? " bg-sky-900" : "bg-blue-300	";
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
    const allItem = () => {
      const a = shelfSql.filter((e) => e.Items);
      const d = a.map((e) => e.Items);
      const b = d.map((e) => e);
      setItemList(b);
      console.log(b);

      console.log(itemList);
    };

    allItem();
  }, [shelfSql]);

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

  const hamdleMouseClick = () => {};
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
                  {itemsToDisplay.map((el, index) => (
                    <PopupBox
                      onClick={() => showDetailBox(index + 1)}
                      key={el.id}
                      text={el.id}
                      available={el.isAvailable ? "true" : "false"}
                    >
                      <div
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
            </div>
            {/* <div className="flex justify-between mt-10 mx-24 "> */}
            <div className="static">
              <div className=" w-auto justify-center absolute">
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
          <div className="flex justify-center">
            <div className=" w-[100%] h-96 pr-10 bg-white rounded-md lg:max-w-xl flex-row ">
              <div className="flex justify-between">
                <div className="flex  bg-blue-700 hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
                  <i className=" fa-solid fa-box text-slate-100 text-3xl m-4 "></i>
                </div>
                <span className="flex ml-10 ">
                  Date In:{showBox?.Items?.map((el) => el.dateIn)}
                  <br></br>
                  Date Out:{showBox?.Items?.map((el) => el.dateOut)}
                  <br></br>
                  Details: {showBox?.Items?.map((el) => el.details)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative flex justify-evenly min-h-screen overflow-hidden h-14  ">
          <div className=" w-70 h-70 p-6  bg-blue-700  rounded-xl shadow-md lg:max-w-xl ">
            <CircularProgressbar
              className=" p-7"
              value={result}
              text={`${result}%`}
            ></CircularProgressbar>

            <div className="flex-col justify-between text-white text-lg">
              <div className="flex">Total Shelf: {count2}</div>
              <div className="flex">Available Shelf: {count}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
