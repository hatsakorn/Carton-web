export default function Modal({ open, onClose, children, title }) {
  return (
    <>
      <div
        onMouseDown={onClose}
        className={` ${
          open ? "" : " hidden"
        } modal fixed  top-0 left-0  backdrop-blur-sm  justify-center items-center  w-full h-full outline-none overflow-x-hidden  overflow-y-auto`}
      >
        <div
          onMouseDown={(e) => e.stopPropagation()}
          className="modal-dialog relative min-w-fit shadow-lg shadow-stone-400 rounded-xl "
        >
          <div className="modal-content relative flex flex-col w-full bg-white rounded-xl ">
            <h1 className="  mt-3 mx-auto font-bold text-[30px] mb-7 ">
              {title}
            </h1>

            <div className=" mx-auto">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}
