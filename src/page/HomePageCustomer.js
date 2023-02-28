import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import Modal from "../components/Modal";
import useCustomer from "../hooks/useCustomer";

export default function HomePageCustomer() {
  const { customerId, customerItem } = useCustomer();

  const [showModalIndex, setShowModalIndex] = useState(null);

  const handleToggleModal = (index) => {
    setShowModalIndex(index);
  };
  useEffect(() => {
    console.log(customerItem);
  }, [customerItem]);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
          <div className="relative  flex flex-col mt-5 min-h-screen overflow-hidden  h-14 mr-20 w-screen">
            <div className="flex justify-center">
              <div className=" w-11/12 bg-sky-600 rounded-r-lg  ">
                <div className="flex justify-between bg-blue-800 text-black rounded-lg p-4 h-20">
                  {customerItem &&
                    customerItem?.map((el, index) => (
                      <div key={el.id} className="flex-col space-x-10">
                        <h2 className="text-lg font-medium mb-2">id {el.id}</h2>
                        <div>id {el.id}</div>
                        <div>details {el.Items[0].details}</div>
                        <div>dateIn {el.Items[0].Shelf?.dateIn}</div>
                        <div>
                          ==== {el.Shelf?.isAvailable ? "true" : "false"}
                        </div>

                        {/* //////////////////////////////////////////////////////// */}
                        {/* payment form  */}
                        <button onClick={() => handleToggleModal(index)}>
                          Toggle Modal
                        </button>
                        {showModalIndex === index && (
                          <div className=" bg-orange-600">
                            <h2>Modal Content</h2>
                            <p>{el.id}.</p>
                            <p>invoiceId {el.invoiceId}.</p>
                            <button onClick={() => handleToggleModal(null)}>
                              Close Modal
                            </button>
                          </div>
                        )}
                        {/* //////////////////////////////////////////////////////// */}
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
