import { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import Modal from "../components/Modal";
import PackageForm from "../feature/package/PackageForm";

export default function Package() {
  const [open, setOpen] = useState(false);

  const showPackageModal = () => {
    setOpen(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex justify-between">
        <div className="flex-col flex justify-evenly text-center w-20">
          <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl ">
            <i className="fa-solid fa-circle-user text-zinc-50 text-3xl m-4"></i>
          </div>

          <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
            <i className="fa-solid fa-house  text-zinc-50 text-3xl m-4"></i>
          </div>
          <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
            <i className="fa-solid fa-dolly  text-zinc-50 text-3xl m-4"></i>
          </div>

          <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
            <i className="fa-solid fa-car  text-zinc-50 text-3xl m-4"></i>
          </div>
          <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
            <i className="fa-solid fa-qrcode  text-zinc-50 text-3xl m-4"></i>
          </div>
          <div className=" hover:bg-blue-400 m-1 rounded-xl shadow-xl">
            <i className="fa-solid fa-gear  text-zinc-50 text-3xl m-4"></i>
          </div>
        </div>
        <div className="flex justify-center bg-gradient-to-r bg-white  rounded-l-xl shadow-md w-full">
          <div className="relative  flex flex-col justify-center min-h-screen overflow-hidden  h-14 mr-20 w-screen">
            <div className="flex justify-center">
              <div className=" w-11/12 ">
                <h1 className="text-2xl font-semibold">Package</h1>
                <div className=" grid grid-cols-2 mt-10 gap-y-10  ">
                  {/* p1 */}
                  <div className="  w-11/12 grid justify-items-stretch space-y-3 bg-white drop-shadow-2xl rounded p-6">
                    <h1>Package A</h1>
                    <div className="ml-8 pb-10 pt-4 ">
                      <h1>Detail:</h1>
                      <h1>Price:</h1>
                      <h1>Status:</h1>
                      <h1>Duration:</h1>
                    </div>
                    <div className="justify-self-center  bg-blue-600 rounded-md  ">
                      <button
                        className="w-72 h-10 text-white text-xl font-semibold "
                        onClick={showPackageModal}
                      >
                        Select
                      </button>
                    </div>
                  </div>
                  {/* p2 */}
                  <div className="  w-11/12 grid justify-items-stretch space-y-3 bg-white drop-shadow-2xl rounded p-6">
                    <h1>Package A</h1>
                    <div className="ml-8 pb-10 pt-4 ">
                      <h1>Detail:</h1>
                      <h1>Price:</h1>
                      <h1>Status:</h1>
                      <h1>Duration:</h1>
                    </div>
                    <div className="justify-self-center  bg-blue-600 rounded-md  ">
                      <button
                        className="w-72 h-10 text-white text-xl font-semibold "
                        onClick={showPackageModal}
                      >
                        Select
                      </button>
                    </div>
                  </div>
                  {/* p3 */}
                  <div className="  w-11/12 grid justify-items-stretch space-y-3 bg-white drop-shadow-2xl rounded p-6">
                    <h1>Package A</h1>
                    <div className="ml-8 pb-10 pt-4 ">
                      <h1>Detail:</h1>
                      <h1>Price:</h1>
                      <h1>Status:</h1>
                      <h1>Duration</h1>
                    </div>
                    <div className="justify-self-center  bg-blue-600 rounded-md  ">
                      <button
                        className="w-72 h-10 text-white text-xl font-semibold"
                        onClick={showPackageModal}
                      >
                        Select
                      </button>
                    </div>
                  </div>
                  {/* p4 */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <Modal setOpen={setOpen} open={open} onClose={() => setOpen(false)}>
          <form onSubmit={handleSubmitForm}>
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
