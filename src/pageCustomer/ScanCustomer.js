import { useState } from "react";
import QrForm from "../QR/qrForm";
import Modal from "../components/Modal";
import useCustomer from "../hooks/useCustomer";
import * as itemsApi from "../api/items-api";
import useAuth from "../hooks/useAuth";

export default function ScanCustomer() {
  const { customerItem } = useCustomer();
  const { authenticatedUser } = useAuth();
  const [modalStates, setModalStates] = useState({});

  const handleToggleModal = (itemId) => {
    setModalStates((prevStates) => ({
      ...prevStates,
      [itemId]: !prevStates[itemId]
    }));
  };

  // console.log(customerItem.Items[0], "123123");

  return (
    <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
      <div className="  min-h-screen w-full overflow-hidden flex flex-col items-center ">
        <div className="w-8/12 bg-white mt-10">
          {customerItem &&
            customerItem?.map((el) => {
              return (
                <div
                  className="bg-white  rounded-l-xl shadow-xl  my-6   "
                  key={el.id}
                >
                  <div className="flex items-center justify-between align-middle">
                    <div className="ml-8">
                      <i className="fa-solid fa-qrcode mr-5 h-10 w-10 text-center justify-center text-5xl mt-4 text-blue-500 hover:scale-105 duration-300 rounded-l-xl shadow-md" />
                      Item Id : {el.Items[0]?.id}
                    </div>

                    <button
                      onClick={() => handleToggleModal(el.id)}
                      className="bg-sky-600 rounded m-3 p-1 hover:opacity-70 text-white "
                    >
                      Customer QRCode
                    </button>
                  </div>
                  {modalStates[el.id] && (
                    <Modal
                      open={modalStates[el.id]}
                      onClose={() => handleToggleModal(el.id)}
                    >
                      <QrForm
                        onClose={() => handleToggleModal(el.id)}
                        link={{
                          invoiceId: el.id,
                          customerId: authenticatedUser.id
                        }}
                        data={el}
                      />
                    </Modal>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
