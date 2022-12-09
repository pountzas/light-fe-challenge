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
      <div onClick={closeModal} className="top-0 left-0 absolute z-[200] min-h-screen max-h-screen min-w-[100%] bg-primary opacity-70 blur-lg">
        <div className='absolute bg-gray-300 h-[90%] min-w-full max-w-[500px]'></div>
      </div>
    )
  )
}

export default InvoiceModal