export default function Modal({ open, onClose, children, title }) {
  return (
    <>
      <div
        onMouseDown={onClose}
        className={` ${
          open ? '' : 'hidden'
        } flex fixed top-0 inset-0  backdrop-blur-sm  justify-center items-center rounded`}
      >
        <div
          onMouseDown={e => e.stopPropagation()}
          className='flex w-auto h-auto shadow-lg shadow-stone-400 rounded-md '
        >
          <div className='bg-green grow'>
            <div className='flex bg-red  '>
              <h1 className=' mx-auto  font-bold text-[40px]'>{title}</h1>
            </div>

            <div className=' mx-auto'>
              {children}
              {/* <div className='w-[600px] h-[500px] bg-stone-600 rounded-md'>
                body
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
