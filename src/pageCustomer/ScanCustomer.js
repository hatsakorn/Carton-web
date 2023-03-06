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
      [itemId]: !prevStates[itemId],
    }));
  };

  return (
    <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden h-14 mr-20">
        {customerItem &&
          customerItem?.map((el) => {
            return (
              <div key={el.id}>
                <button
                  onClick={() => handleToggleModal(el.id)}
                  className="bg-sky-600 rounded m-3 p-1 hover:opacity-70 text-white "
                >
                  QR button
                </button>
                {modalStates[el.id] && (
                  <Modal
                    open={modalStates[el.id]}
                    onClose={() => handleToggleModal(el.id)}
                  >
                    <QrForm
                      onClose={() => handleToggleModal(el.id)}
                      link={{ invoiceId: el.id, customerId: authenticatedUser.id }}
                      data={el}
                    />
                  </Modal>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}
