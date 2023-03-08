import * as itemApi from "../api/items-api";
import { toast } from "react-toastify";

export default function qrEmployee({ onClose, data }) {
  const HandleToggleButtonDateIn = (itemId) => {
    const input = {
      itemId: itemId
    };

    try {
      const res = itemApi.updateDateIn(input);
      toast.success("success.");
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
    } catch (error) {
      toast.error(error.response?.data.message);
    }
  };
  return (
    <div className="flex justify-between">
      <div className="flex bg-gradient-to-r bg-white  rounded-l-xl  w-full  h-96">
        <div className="w-full  p-6 m-auto bg-white rounded-md lg:max-w-xl">
          <h1 className=" text-center text-2xl text-black">Verify</h1>
          <p>customerId: {data[0]?.first_name}</p>
          <p>itemId: {data[0]?.item_id}</p>
          <p>shelfId: {data[0]?.shelf}</p>
          <p>warehouseLocation: {data[0]?.location}</p>
        </div>
        <div className="flex row justify-evenly ml-4">
          <button
            className="flex h-10  w-20 text-center text-xl  text-white rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500"
            onClick={() => HandleToggleButtonDateIn(data[0]?.item_id)}
          >
            check in
          </button>
          <button
            className="flex h-10  w-20 text-center text-xl  text-white  bg-gradient-to-r from-violet-500 to-fuchsia-500"
            onClick={() => HandleToggleButtonDateOut(data[0]?.item_id)}
          >
            check out
          </button>
        </div>
      </div>
    </div>
  );
}
