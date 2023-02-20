import PackageForm from "../feature/package/PackageForm";
import Modal from "../components/Modal";
import { useState } from "react";

export default function PackagePage() {
  const [open, setOpen] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div>
        <div className="flex justify-center">
          <button>
            Add New Carton
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
        <Modal setOpen={setOpen} open={open}>
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
      </div>
    </>
  );
}
