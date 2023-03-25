import * as itemApi from "../api/items-api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function QrEmployee({ onClose, data }) {
  const navigate = useNavigate();
  const HandleToggleButtonDateIn = (itemId) => {
    const input = {
      itemId: itemId
    };

    try {
      const res = itemApi.updateDateIn(input);
      toast.success("success.");
      onClose();
      navigate(0);
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };

  const HandleToggleButtonDateOut = (itemId) => {
    const input = {
      itemId: itemId
    };

    try {
      const res = itemApi.updateDateOut(input);
      toast.success("success.");
      onClose();
      navigate(0);
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };
  return (
    <div className="flex justify-between">
      <div className="flex bg-gradient-to-r bg-white  rounded-l-xl  w-full  h-96">
        <div className="flex-col w-full p-6 m-auto bg-white rounded-md lg:max-w-xl">
          <h1 className=" text-center text-2xl text-black font-bold">Verify</h1>
          <p className="  text-xl text-black">
            Customer Id: {data[0]?.first_name} {data[0]?.last_name}
          </p>
          <p className=" text-xl text-black">Item Id: {data[0]?.item_id}</p>
          <p className=" text-xl text-black">Shelf Id: {data[0]?.shelf}</p>
          <p className=" text-xl text-black">
            Warehouse Location: {data[0]?.location}
          </p>
          <div className="flex justify-evenly ml-4 w-96 mt-9 ">
            <button
              className="flex pt-2 pl-2 h-14 w-20 text-center text-lg text-white rounded-2xl shadow-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-400 "
              onClick={() => HandleToggleButtonDateIn(data[0]?.item_id)}
            >
              check in
            </button>
            <button
              className="flex pt-2 pl-2 h-14 w-24 text-center text-lg text-white rounded-2xl shadow-xl h-14 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-blue-400"
              onClick={() => HandleToggleButtonDateOut(data[0]?.item_id)}
            >
              check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
