import { useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import Modal from "../components/Modal";
import PackageForm from "../feature/package/PackageForm";
import * as packageApi from "../api/package-api";
import AllPackage from "../feature/package/AllPackage";
// import { Pagination } from "flowbite-react";

export default function Package() {
  const [open, setOpen] = useState(false);
  const [showPackage, setShowPackage] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPackage = async () => {
      const res = await packageApi.getPackages();
      setShowPackage(res.data.allPackage);
    };
    fetchPackage();
  }, []);

  const showPackageModal = () => {
    setOpen(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  // const onPageChange = () => {};

  return (
    <>
      <div className="flex justify-between ">
        <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
          <div className="relative  flex flex-col justify-center min-h-screen overflow-hidden  h-14 mr-20 w-screen">
            <div className="flex justify-center h-[100%] ">
              <div className=" w-11/12 overflow-scroll ">
                <div className="flex mt-3 ">
                  <h1 className="text-2xl font-semibold">Package</h1>
                  <button className="text-right bg-blue-600 rounded-md text-white p-3 mx-3 ">
                    Add Pacakge
                  </button>
                </div>
                <div className=" flex">
                  <div className="  mt-10 gap-y-10  w-full">
                    {/* p1 */}
                    <AllPackage
                      showPackage={showPackage}
                      showPackageModal={showPackageModal}
                    />
                  </div>
                </div>
                {/* <Pagination
                  currentPage={currentPage}
                  onPageChange={onPageChange}
                  showIcons={true}
                  totalPages={100}
                  itemsPerPage={4}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <Modal setOpen={setOpen} open={open} onClose={() => setOpen(false)}>
          <form className="m-3" onSubmit={handleSubmitForm}>
            <PackageForm />
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
      )}
    </>
  );
}
