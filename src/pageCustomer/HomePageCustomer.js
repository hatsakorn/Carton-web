import React, { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import useCustomer from "../hooks/useCustomer";
import Script from "react-load-script";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import * as packageApi from "../api/package-api";

export default function HomePageCustomer() {
  const { customerItem } = useCustomer();
  const { authenticatedUser, fetchAuthUser } = useAuth();
  const [showModalIndex, setShowModalIndex] = useState(null);
  const [isOmiseLoaded, setIsOmiseLoaded] = useState(false);
  const [showPackage, setShowPackage] = useState([]);

  console.log(authenticatedUser);

  useEffect(() => {
    const fetchPackage = async () => {
      const res = await packageApi.getPackages();
      setShowPackage(res.data.allPackage);
    };
    fetchPackage();
    fetchAuthUser();
  }, []);

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

  const omiseCardHandler = async (invoiceId, amount) => {
    window.OmiseCard.open({
      amount: amount * 100,
      onCreateTokenSuccess: (token) => {
        axios
          .post(`/invoice/omise/`, {
            email: authenticatedUser.email,
            name: authenticatedUser.firstName,
            amount: amount * 100,
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

  const handleClick = (e, id, amount) => {
    e.preventDefault();
    creditCardConfigure();
    omiseCardHandler(id, amount);
  };

  return (
    <>
      <Script url="https://cdn.omise.co/omise.js" onLoad={handleLoadScript} />
      <div className="flex justify-between">
        <div className="flex justify-center bg-slate-50  rounded-xl shadow-md w-full overflow-scroll">
          <div className="relative  flex flex-col mt-5 min-h-screen  rounded-l-xl h-14 w-screen ">
            <div className=" w-11/12  rounded-r-lg  rounded-xl text-black ">
              {customerItem &&
                customerItem?.map((el, index) => {
                  const startDate = new Date(el.Items[0].contractStartDate);
                  const endDate = new Date(el.Items[0].contractEndDate);
                  const diffTime = Math.abs(endDate - startDate);
                  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
                  const packageId = el.Items[0].packageId;
                  const price = showPackage.find(
                    (pkg) => pkg.id === packageId
                  )?.price;
                  const amount = price * diffDays;
                  return (
                    <div
                      key={el.id}
                      className="flex-col space-x-10 mt-5 mb-3 drop-shadow-xl"
                    >
                      <div className=" bg-white shadow rounded-lg p-4 ml-20">
                        <div className="flex justify-between">
                          <div className="flex font-bold mb-2">ID: {el.id}</div>
                          <div className="flex mb-2">
                            Details: {el.Items[0].details}
                          </div>
                          <div className="flex">Status: {el.status}</div>
                          <div className="flex">
                            Date In:
                            {new Date(el.Items[0].dateIn).toLocaleString(
                              "en-us"
                            )}
                          </div>

                          <div className="flex ">
                            Date Out:
                            {new Date(el.Items[0].dateOut).toLocaleString(
                              "en-us"
                            )}
                          </div>
                        </div>

                        <div className=" flex justify-between">
                          <button
                            className=" flex m-10 h-10 w-28 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl shadow-md  text-white font-semibold"
                            onClick={() => handleToggleModal(index)}
                          >
                            More details
                          </button>
                          <form className="flex">
                            <div
                              id="credit-card"
                              type="button"
                              onClick={(e) => handleClick(e, el.id, amount)}
                              className="mt-10"
                            >
                              <button className=" bg-rose-500 hover:bg-rose-300 h-10 w-20 rounded-xl shadow-md  text-white font-semibold">
                                Payment
                              </button>
                            </div>
                          </form>
                        </div>

                        {showModalIndex === index && (
                          <div className="flex justify-between bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-xl shadow-md pb-2 pl-5  text-white py-4 my-3">
                            <h2 className="font-semibold	">Details</h2>
                            <p>Invoice Id: {el.id}</p>
                            <p>Package Id: {el.Items[0].packageId}</p>
                            <button
                              className="bg-gradient-to-r from-cyan-500 to-blue-500  h-10 w-20 rounded-xl shadow-md  text-white mr-5"
                              onClick={() => handleToggleModal(null)}
                            >
                              Close
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
