import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import Modal from "../components/Modal";
import * as packageApi from "../api/package-api";
import AllPackage from "../feature/package/AllPackage";
import AddPackageModal from "../feature/package/AddPackageModal";

export default function Package() {
  const [open, setOpen] = useState(false);
  const [showPackage, setShowPackage] = useState([]);
  const [openAddPackageModal, setOpenAddPackageModal] = useState(false);

  useEffect(() => {
    const fetchPackage = async () => {
      const res = await packageApi.getPackages();
      setShowPackage(res.data.allPackage);
    };
    fetchPackage();
  }, []);

  const addPackageModal = () => {
    setOpenAddPackageModal(true);
  };

  // const handleSubmitForm = (e) => {
  //   e.preventDefault();
  // };

  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
          <div className="relative  flex flex-col justify-center min-h-screen overflow-hidden  h-14 mr-20 w-screen">
            <div className="flex justify-center h-[100%] ">
              <div className=" w-11/12 overflow-scroll ">
                <div className="flex mt-3 ">
                  <h1 className="text-2xl font-semibold">Package</h1>

                  <div>
                    <button
                      className="text-right bg-blue-600 rounded-md text-white p-3 mx-3 "
                      onClick={addPackageModal}
                    >
                      Add Package
                    </button>
                    {openAddPackageModal && (
                      <Modal
                        setOpenAddPackageModal={setOpenAddPackageModal}
                        open={openAddPackageModal}
                        onClose={() => setOpenAddPackageModal(false)}
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
      {/* {open && (
        <Modal
          setOpen={setOpen}
          open={open}
          onClose={() => setOpen(false)}
          className="z-50 inset-0 overflow-y-auto"
        >
          <form onSubmit={handleSubmitForm}>
            <PackageForm showPackage={showPackage} />
            <div className="bg-blue-600 rounded flex justify-center h-[50px] my-7">
              <button
                type="submit"
                className="text-white text-xl font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </Modal>
      )} */}
    </>
  );
}
