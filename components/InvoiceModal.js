import { useEffect } from 'react'

import Close from '../public/assets/svg/icons/close'

function InvoiceModal({ open, onClose }) {
  const escKeyDown = (e) => {
    if (e.keyCode === 27 || e.key === "Escape") {
      onClose();
    }
  }

  useEffect(() => {
    setIsMounted(true);
    document.addEventListener("keydown", escKeyDown);
    return () => {
      setIsMounted(false);
      document.removeEventListener("keydown", escKeyDown);
    }
  }, []);


  return (
    open && (
      <div className='flex items-center justify-center'>
        <div onClick={onClose} className="left-[50%] translate-x-[-50%] absolute z-[200] min-h-[140%]  min-w-[100%] bg-gray-800 opacity-70 "></div>
        <div className='absolute z-[200] top-6 rounded-t-[6px] left-[50%] translate-x-[-50%] bg-white h-[92%] w-[100vw] max-w-[1728px]'>
          {/* title bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <h1 className='text-2xl'>Invoice #123456</h1>
            <div className='flex items-center gap-2'>
              <button className='bg-gray-800 text-white h-10 w-[146px] rounded '>Submit for approval</button>
              <button className='flex items-center justify-center w-10 h-10 mr-4 border border-gray-200 rounded'><Trash /></button>
              <div className='flex items-center '>
                <button className='flex items-center justify-center w-8 h-10 border border-gray-200 rounded'><ChevronLeft /></button>
                <h6 className='px-2 text-sm font-medium text-gray-400'>1/12</h6>
                <button className='flex items-center justify-center w-8 h-10 mr-4 border border-gray-200 rounded'><ChevronRight /></button>
              </div>
              <button onClick={onClose} className='flex items-center justify-center w-10 h-10 bg-gray-100 border rounded'><Close /></button>
            </div>
          </div>
      </div>
    )
  )
}

export default InvoiceModal