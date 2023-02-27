import { Progress } from "flowbite-react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useWarehouse from "../hooks/useWarehouse";
import { useEffect } from "react";
import PopupBox from "../components/popupBox";

export default function HomePage() {
  const { shelfSql } = useWarehouse(true);

  function updateBackgroundColor(el) {
    return el.isAvailable ? "bg-amber-500" : "bg-amber-400";
  }

  // const progressbarC

  const percentage = 5;
  useEffect(() => {
    console.log(shelfSql);
    // shelfSql;
  }, [shelfSql]);

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

              <div className=" mt-10 pl-10">List of sections</div>
              <div className="flex justify-between mt-10 mx-24 ">
                <div className="flex">
                  <span>Section 001</span>
                </div>
                <div className="flex  ">
                  <Progress
                    progress={45}
                    label="use"
                    labelPosition="outside"
                    labelProgress={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative  flex-col mt-10 flex justify-evenly min-h-screen overflow-hidden h-14  ">
          <div className=" w-70 h-70 p-6  bg-blue-700  rounded-xl shadow-md lg:max-w-xl">
            <CircularProgressbar
              className=" p-7"
              value={percentage}
              text={`${percentage}%`}
            ></CircularProgressbar>
          </div>
          <div className=" w-60 p-3 bg-white rounded-md lg:max-w-xl flex row justify-between mr-10">
            <div className="flex text-xs">Received</div>
            <div className="flex text-xs">Sent</div>
            <div className="flex text-xs">Expeted</div>
          </div>

          <div className=" w-70 h-96 pr-10 bg-white rounded-md lg:max-w-xl flex-row ">
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
