import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import useCustomer from "../hooks/useCustomer";

export default function HomePageCustomer() {
  const { customerId, customerItem } = useCustomer();

  const [showModalIndex, setShowModalIndex] = useState(null);

  const handleToggleModal = (index) => {
    setShowModalIndex(index);
  };
  useEffect(() => {}, [customerItem]);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-center bg-gradient-to-r bg-white  rounded-xl shadow-md w-full">
          <div className="relative  flex flex-col mt-5 min-h-screen overflow-hidden  rounded-l-xl h-14 mr-20 w-screen">
            <div className=" w-11/12 bg-sky-600 rounded-r-lg ml-10  rounded-xl text-white">
              {customerItem &&
                customerItem?.map((el, index) => (
                  <div key={el.id} className="flex-col space-x-10 mt-5">
                    <div className="bg-sky-600 shadow rounded-lg p-4">
                      <div className="font-bold mb-2">ID: {el.id}</div>
                      <div className="mb-2">Details: {el.Items[0].details}</div>
                      <div>
                        Available:
                        {el.Shelf?.isAvailable ? "true" : "false"}
                      </div>
                      <div>Date In: {el.Items[0].dateIn}</div>
                      <div>Date Out: {el.Items[0].dateOut}</div>
                      <div>Status: {el.status}</div>

                      <button
                        className="my-5 h-10 w-28 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-md  text-white"
                        onClick={() => handleToggleModal(index)}
                      >
                        More details
                      </button>
                      <button className="bg-gradient-to-r from-pink-500 hover:to-yellow-600  h-10 w-20 rounded-xl shadow-md  text-white">
                        Payment
                      </button>

                      {showModalIndex === index && (
                        <div className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl shadow-md pb-2 pl-5  text-white py-4 my-3">
                          <h2 className="font-semibold	">Details</h2>
                          <p>ID :{el.id}.</p>
                          <p>Invoice Id: {el.invoiceId}</p>
                          <p>Package Id: {el.packageId}</p>
                          <p>Shelf Id: {el.shelfId}</p>
                          <button
                            className="bg-gradient-to-r from-cyan-500 to-blue-500  h-10 w-20 rounded-xl shadow-md  text-white"
                            onClick={() => handleToggleModal(null)}
                          >
                            Close
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
