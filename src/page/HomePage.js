import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import Modal from "../components/Modal";
import useCustomer from "../hooks/useCustomer";

export default function HomePage1() {
  const { customerId, customerItem } = useCustomer();

  const [showModalIndex, setShowModalIndex] = useState(null);

  const handleToggleModal = (index) => {
    setShowModalIndex(index);
  };

  // console.log(customerId, 123123123213123);
  // useEffect(() => {
  //   console.log(customerItem, "123123123");
  //   console.log(customerItem.Shelf, "meeee");
  // }, [customerItem]);
  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
          <div className="relative  flex flex-col mt-5 min-h-screen overflow-hidden  h-14 mr-20 w-screen">
            <div className="flex justify-center">
              <div className=" w-11/12 bg-sky-600 rounded-r-lg  ">
                {/* <h1 className="text-2xl font-semibold">fgddffgd</h1> */}
                <div className="flex justify-between flex-col space-y-4 my-3">
                  {customerItem?.map((el, index) => (
                    <div key={el.id} className="flex-col space-x-10">
                      <div>id {el.id}</div>
                      <div>details {el.details}</div>
                      <div>dateIn {el.dateIn}</div>
                      <div>dateIn {el.Shelf.Warehouse.location}</div>
                      <div>==== {el.Shelf?.isAvailable ? "true" : "false"}</div>
                      {console.log(el.Shelf?.isAvailable)}
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

                      {/* <PackageFormPayment /> */}
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
