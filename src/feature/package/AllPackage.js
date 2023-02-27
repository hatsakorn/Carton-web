import { Pagination } from "flowbite-react";
import React, { useEffect, useState } from "react";

function AllPackage({ showPackage, showPackageModal }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    const totalPages = () => {
      showPackage.map((el, idx, array) => {
        console.log(Math.ceil(array.length / 4));
        // Math.ceil(el.id.length / 4);
      });
    };
    totalPages();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items) => {
    setItemsPerPage(items);
  };

  return (
    <>
      <div className=" w-full ">
        <div className="flex justify-center">
          <div className="grid  grid-cols-2  w-11/12">
            {showPackage.map((e) => (
              <div
                className="  w-9/12  justify-items-stretch space-y-3  drop-shadow-2xl rounded p-6"
                key={e.id}
              >
                <div>
                  <h1>Package: {e.title}</h1>
                  <div className="ml-8 pb-10 pt-4 ">
                    <h1>Detail: {e.description}</h1>
                    <h1>Price: {e.price}</h1>
                    <h1>Duration:</h1>
                  </div>
                  <div className="flex justify-center  bg-blue-600 rounded-md  ">
                    <button
                      className="w-72 h-10 text-white text-xl font-semibold "
                      onClick={showPackageModal}
                    >
                      Select
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            showIcons={true}
            totalPages={10}
            itemsPerPage={itemsPerPage}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        </div>
      </div>
    </>
  );
}

export default AllPackage;
