import { useEffect, useState } from 'react'
import Image from 'next/image'

import Close from '../public/assets/svg/icons/close'
import Trash from '../public/assets/svg/icons/trash'
import ListCheck from '../public/assets/svg/icons/listCheck'
import ChevronLeft from '../public/assets/svg/icons/chevronLeft'
import ChevronRight from '../public/assets/svg/icons/chevronRight'
import ChevronDown from '../public/assets/svg/icons/chevronDown'
import USD from '../public/assets/svg/currencies/USD'
import Slider from '../public/assets/svg/icons/slider'

import Invoice123456 from '../public/assets/png/invoices/invoice123456.png'
import VendorLg from '../public/assets/svg/icons/vendorLg'
import Vendor from '../public/assets/svg/icons/vendor'

function InvoiceModal({ open, onClose }) {
  const [isMounted, setIsMounted] = useState(false);

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
          {/* content */}
          <div className='grid grid-cols-7 h-[95%]'>
            {/* left side */}
            <div className='col-span-2 px-6 bg-white'>
              <div className='grid grid-cols-4 gap-4'>

                <div className='col-span-4 space-x-4 text-sm bg-white border-b border-gray-200 h-[52px] flex items-center'>
                  <h2 className='text-sm font-medium pt-4 border-b border-black h-[100%]'>Details</h2>
                  <h2 className='pt-4 text-sm font-medium text-gray-500 h-[100%]'>History</h2>
                </div>

                <div className='col-span-4 p-4 bg-white border rounded border-gray-200 h-[74px] flex items-center space-x-4'>
                  <div className='rounded-full h-[42px] w-[42px] bg-gray-200 flex items-center justify-center'>
                    <VendorLg stroke='#78716C' />
                  </div>
                  <div>
                    <h2 className='text-base font-medium text-gray-900'>Oracle</h2>
                    <h6 className='text-xs text-gray-500 underline'>oracle.com</h6>
                  </div>
                  <div className='flex items-start pt-3'>
                    <h6 className='pr-4 text-xs text-gray-500'>· billing@oracle.com</h6>
                    <ChevronDown stroke='#78716C' />
                  </div>
                </div>

                <div className='col-span-1 p-4 bg-white border rounded border-gray-200 h-[64px] flex flex-col items-start justify-evenly space-y-1 '>
                  <h6 className='text-xs font-medium text-gray-500'>Currency</h6>
                  <div className="flex space-x-2 item-center">
                    <USD />
                    <h6 className='text-sm font-medium text-gray-800'>USD</h6>
                    <ChevronDown stroke='#78716C' />
                  </div>
                </div>

                <div className='col-span-3 p-4 bg-white border rounded border-gray-200 h-[64px] flex items-center justify-between'>
                  <div>
                    <h6 className='text-xs font-medium text-gray-500'>To be paid</h6>
                    <div className='flex items-baseline gap-1'>
                      <h6 className='text-2xl text-gray-800'>32.159.00</h6>
                      <h6 className='text-xs font-medium text-gray-500'>Tax 2102.12</h6>
                    </div>
                  </div>
                  <ChevronDown stroke='black' />

                </div>


              </div>


              <div className='grid grid-cols-4 gap-[10px]'>

                <h4 className='col-span-4 pt-5 pb-8 text-base font-medium text-gray-800 h-[28px]'>Payment details</h4>

                <div className='col-span-4 p-4 bg-white border rounded border-gray-200 h-[52px] flex items-center justify-between'>
                  <div>
                    <h6 className='text-xs font-medium text-gray-500'>Payment date</h6>
                    <h6 className='text-sm font-medium text-sky-600'>Today</h6>
                  </div>
                  <ChevronDown stroke='#78716C' />
                </div>

                <div className='relative col-span-2 p-4 bg-white border rounded border-gray-200 h-[68px] flex items-center justify-between mr-[11px]'>
                  <div className='space-y-1'>
                    <h6 className='text-xs font-medium text-gray-500'>Pay from account</h6>
                    <div className='flex items-center space-x-2'>

                      <div className='rounded-full h-[32px] w-[32px] bg-gray-200 flex items-center justify-center'>
                        <Vendor stroke='#78716C' />
                      </div>
                      <div className='gap-1 '>
                        <h6 className='text-sm font-medium text-gray-800'>Dansk-Bank_dk</h6>
                        <h6 className='text-xs font-normal text-gray-500'>USD · XXXX 1023</h6>
                      </div>
                    </div>
                  </div>
                  <ChevronDown stroke='#78716C' />
                  <div className='absolute -right-[30px]'><Slider /></div>
                </div>

                <div className='col-span-2 p-4 bg-white border rounded border-gray-200 h-[68px] flex items-center justify-between ml-[11px]'>
                  <div className='space-y-1'>
                    <h6 className='text-xs font-medium text-gray-500'>Send to account</h6>
                    <div className='flex items-center space-x-2'>

                      <div className='rounded-full h-[32px] w-[32px] bg-gray-200 flex items-center justify-center'>
                        <Vendor stroke='#78716C' />
                      </div>
                      <div className='gap-1 '>
                        <h6 className='text-sm font-medium text-gray-800'>Jyske-Bank</h6>
                        <h6 className='text-xs font-normal text-gray-500'>4321</h6>
                      </div>
                    </div>
                  </div>
                  <ChevronDown stroke='#78716C' />

                </div>

                <h4 className='col-span-4 pt-2 pb-8 text-base font-medium text-gray-800 h-[28px]'>Accounting details</h4>

                <div className='col-span-4 p-4 rounded bg-gray-100 h-[52px] flex items-center justify-between'>
                  <div>
                    <h6 className='text-xs font-medium text-gray-500'>Note</h6>
                    <h6 className='text-sm font-normal text-gray-900'>New laptop for the new marketing team</h6>
                  </div>
                </div>

                <div className='col-span-4 p-4 bg-white border rounded border-gray-200 h-[52px] flex items-center justify-between'>
                  <div>
                    <h6 className='text-xs font-medium text-gray-500'>Cost center</h6>
                    <h6 className='text-sm font-medium text-gray-800'>Marketing</h6>
                  </div>
                  <ChevronDown stroke='#78716C' />
                </div>

                <div className='col-span-2 p-4 bg-white border rounded border-gray-200 h-[52px] flex items-center justify-between'>
                  <div>
                    <h6 className='text-xs font-medium text-gray-500'>Entity</h6>
                    <h6 className='text-sm font-medium text-gray-800'>DK-company</h6>
                  </div>
                  <ChevronDown stroke='#78716C' />
                </div>

                <div className='col-span-2 p-4 bg-white border rounded border-gray-200 h-[52px] flex items-center justify-between'>
                  <div>
                    <h6 className='text-xs font-medium text-gray-500'>Sync to Category</h6>
                    <h6 className='text-sm font-medium text-gray-800'>IT & Technology</h6>
                  </div>
                  <ChevronDown stroke='#78716C' />
                </div>

                <div className='col-span-2 p-4 bg-white border rounded border-gray-200 h-[52px] flex items-center justify-between'>
                  <div>
                    <h6 className='text-xs font-medium text-gray-500'>Due date</h6>
                    <h6 className='text-sm font-medium text-gray-800'>22/11/2022</h6>
                  </div>
                  <ChevronDown stroke='#78716C' />
                </div>

                <div className='col-span-2 p-4 bg-white border rounded border-gray-200 h-[52px] flex items-center justify-between'>
                  <div>
                    <h6 className='text-xs font-medium text-gray-500'>Invoice date</h6>
                    <h6 className='text-sm font-medium text-gray-800'>2/11/2022</h6>
                  </div>
                  <ChevronDown stroke='#78716C' />
                </div>

                <div className='col-span-4 p-4 mt-6 bg-white border rounded border-gray-200 h-[52px] flex items-center justify-between'>
                  <div className='flex items-center space-x-2'>
                    <ListCheck />
                    <h6 className='text-sm font-medium text-gray-800'>Approvers</h6>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='border rounded-full border-[#D4D4D4] py-[1px] px-2'>4 left</div>
                    <ChevronRight stroke='#78716C' />
                  </div>
                </div>

              </div>

              <div className=''>
                <h4 className='pt-6 text-base  font-bold text-gray-800 h-[28px]'>Line items</h4>
                <div className='grid grid-cols-4 mt-8 border-t border-gray-200 rounded-t border-x'>

                  <div className='col-span-3 p-4 bg-white border-r border-gray-200 h-[52px] flex items-center justify-between'>
                    <div className=''>
                      <h6 className='text-sm font-normal text-gray-700'>MacBook Pro 16/2.8/Tim</h6>
                      <h6 className='text-xs font-medium text-gray-500'>IT & Technology</h6>
                    </div>
                  </div>
                  <div className='col-span-1 p-4 bg-white h-[52px] text-right text-gray-700'>2,199.00</div>
                </div>

                <div className='grid grid-cols-4 border '>

                  <div className='col-span-3 p-4 bg-white border-r  border-gray-200 h-[52px] flex items-center justify-between'>
                    <div className=''>
                      <h6 className='text-sm font-normal text-gray-700'>Magic Keyboard DK</h6>
                      <h6 className='text-xs font-medium text-gray-500'>IT & Technology</h6>
                    </div>
                  </div>
                  <div className='col-span-1 p-4 bg-white h-[52px] text-right text-gray-700'>295.00</div>
                </div>

                <div className='grid grid-cols-4 mb-4 border-b border-gray-200 rounded-b border-x'>

                  <div className='col-span-3 p-4 bg-white border-r  border-gray-200 h-[52px] flex items-center justify-between'>
                    <div className=''>
                      <h6 className='text-sm font-normal text-gray-700'>Magic Trackpad DK</h6>
                      <h6 className='text-xs font-medium text-gray-500'>IT & Technology</h6>
                    </div>
                  </div>
                  <div className='col-span-1 p-4 bg-white h-[52px] text-right text-gray-700'>199.00</div>
                </div>
              </div>
            </div>

            {/* right side */}
            <div className='h-auto max-w-[inherit] col-span-5 bg-gray-100 overflow-y-scroll flex flex-col items-center pt-4 px-3'>
              {/* invoice file */}
              <Image src={Invoice123456} alt="invoice" />
            </div>
          </div>
        </div>
      </div>
    )
  )
}

export default InvoiceModal