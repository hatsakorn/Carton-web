import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import Modal from "../components/Modal";
import * as packageApi from "../api/package-api";
import AllPackage from "../feature/package/AllPackage";
import AddPackageModal from "../feature/package/AddPackageModal";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

export default function Package() {
  const [open, setOpen] = useState(false);
  const [showPackage, setShowPackage] = useState([]);
  const [openAddPackageModal, setOpenAddPackageModal] = useState(false);

  const { authenticatedUser, fetchAuthUser } = useAuth();

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const res = await packageApi.getPackages();
        setShowPackage(res.data.allPackage);
      } catch (error) {
        toast.error(error.response?.data.message);
      }
    };
    fetchPackage();
    fetchAuthUser();
  }, []);

  const addPackageModal = () => {
    setOpenAddPackageModal(true);
  };

  const handleCloseModal = () => {
    setOpenAddPackageModal(false);
  };

  // const handleSubmitForm = (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <div className="flex justify-between ">
        <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
          <div className="relative  flex flex-col justify-center min-h-screen overflow-hidden  h-14 mr-20 w-screen">
            <div className="flex justify-center h-[100%] ">
              <div className=" w-11/12 overflow-scroll ">
                <div className="flex mt-3 ">
                  <h1 className="text-2xl font-semibold">Package</h1>

                  <div>
                    {authenticatedUser.role === "ADMIN" && (
                      <button
                        className="text-right bg-blue-600 rounded-md text-white p-3 mx-3 "
                        onClick={addPackageModal}
                      >
                        Add Package
                      </button>
                    )}
                    {openAddPackageModal && (
                      <Modal
                        setOpenAddPackageModal={setOpenAddPackageModal}
                        open={openAddPackageModal}
                        onClose={() => handleCloseModal()}
                      >
                        <AddPackageModal />
                      </Modal>
                    )}
                  </div>
                </div>
                <div className=" flex">
                  <div className="  mt-10 gap-y-10  w-full">
                    {/* p1 */}
                    <AllPackage
                      showPackage={showPackage}
                      open={open}
                      setOpen={setOpen}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
