import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import Modal from "../components/Modal";
import useCustomer from "../hooks/useCustomer";
import Script from "react-load-script";
import axios from "axios";
import useAuth from "../hooks/useAuth";

export default function HomePageCustomer() {
  const { customerItem } = useCustomer();
  const { authenticatedUser } = useAuth();
  const [showModalIndex, setShowModalIndex] = useState(null);
  const [isOmiseLoaded, setIsOmiseLoaded] = useState(false);

  const handleToggleModal = (index) => {
    setShowModalIndex(index);
  };

  const handleLoadScript = () => {
    window.OmiseCard.configure({
      publicKey: process.env.REACT_APP_OMISE_PUBLIC_KEY,
      currency: "THB",
      frameLabel: "Carton",
      submitLabel: "Pay NOW",
      buttonLabel: "Pay with Omise"
    });
    setIsOmiseLoaded(true);
  };

  const creditCardConfigure = () => {
    window.OmiseCard.configure({
      defaultPaymentMethod: "credit_card",
      otherPaymentMethods: []
    });
    window.OmiseCard.configureButton("#credit-card");
    window.OmiseCard.attach();
  };

  const omiseCardHandler = (invoiceId) => {
    window.OmiseCard.open({
      amount: "10000",
      onCreateTokenSuccess: (token) => {
        axios
          .post(`/invoice/omise/`, {
            email: authenticatedUser.email,
            name: authenticatedUser.firstName,
            amount: "10000",
            token: token,
            invoiceId: invoiceId
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      onFormClosed: () => {}
    });
  };

  const handleClick = (e, id) => {
    e.preventDefault();
    creditCardConfigure();
    omiseCardHandler(id);
  };


  return (
    <>
    <Script  url="https://cdn.omise.co/omise.js" onLoad={handleLoadScript}/>
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
                        <form>
                          <div id="credit-card"
                            type="button"
                            onClick={(e) => handleClick(e, el.id)}
                          >
                            <button className="bg-gradient-to-r from-pink-500 hover:to-yellow-600  h-10 w-20 rounded-xl shadow-md  text-white">
                              Payment
                            </button>
                          </div>
                        </form>
                      

                      {showModalIndex === index && (
                        <div className=" bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl shadow-md pb-2 pl-5  text-white py-4 my-3">
                          <h2 className="font-semibold	">Details</h2>
                          <p>Invoice Id: {el.id}</p>
                          <p>Package Id: {el.Items[0].packageId}</p>
                          <p>Shelf Id: {el.Items[0].shelfId}</p>
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
