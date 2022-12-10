import Image from 'next/image'
import { useState } from 'react'

import NoLogo from './NoLogo'
import InvoiceModal from './InvoiceModal'

// icons
import Verified from '../public/assets/svg/icons/verified'
import Check from '../public/assets/svg/icons/check'
import CheckReverted from '../public/assets/svg/icons/checkReverted'
import Bell from '../public/assets/svg/icons/bell'
import Reassign from '../public/assets/svg/icons/reassign'

// images
import person from '../public/assets/png/approvers/person.png'

function InvoiceListItem({ invoice }) {
  const [modalState, setModalState] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const getStatus = (status, issues) => {
    switch (status) {
      case 'Scanned':
        return (
          <div className='flex items-center space-x-2'>
            <div className='flex items-center gap-[6px] rounded-full text-gray-500 bg-gray-100 py-[2px] px-2 '>
              <Check />
              {status}
              {issues > 0 ?
                <>
                  <div className='h-[3px] w-[3px] rounded-full bg-gray-500'></div>
                  {issues} issues
                </> : null
              }
            </div>
          </div>
        )
      case 'Pending':
        return (
          <div className='flex items-center space-x-1'>
            <div className='flex items-center gap-1 rounded-full bg-orange-50  py-[2px] px-2 text-orange-600'>
              {status}
            </div>

            <div className='flex items-center gap-1 rounded-full  py-[2px] px-2 text-gray-500 border border-gray-200'>
              <CheckReverted />
              {issues ?
                <>
                  {issues}
                </> : null
              }
            </div>

          </div>
        )
      default:
        null
    };
  };

  const getTimeColor = (time) => {
    switch (time) {
      case '4d 21h':
      case '5d 17h':
      case '5d 2h':
      case '4d 16h':
        return 'text-orange-600 font-normal'
      case '11d 15h':
        return 'text-orange-600 font-medium'
      default:
        return 'text-gray-700'
    };
  };

  const getReminder = (reminder) => {
    switch (reminder) {
      case 'Remind':
        return (
          <div className='flex items-center space-x-1'>
            <Bell stroke='#0284C7' />
            <h6 className='text-sky-600'>{reminder}</h6>
          </div>
        )
      case 'Re-assign':
        return (
          <div className='flex items-center space-x-1'>
            <Reassign stroke='#0284C7' />
            <h6 className='text-sky-600'>{reminder}</h6>
          </div>
        )
      default:
        return null
    }
  };

  const getApprover = (approver, reminder) => {
    switch (approver) {
      case 'Not set':
        return (
          <div className='flex items-center space-x-2'>
            <div className='w-6 h-6 bg-gray-200 rounded-full'></div>
            <h6 className='text-gray-400 text-sm font-medium'>{approver}</h6>
          </div>
        )
      default:
        return (
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <div className='w-6 h-6 bg-gray-200 rounded-full'>
                <Image width={24} height={24} alt={approver} src={person} />
              </div>
              <h6 className='text-gray-800 text-sm font-medium'>{approver}</h6>
            </div>
            <div className='pr-8'>{getReminder(reminder)}</div>
          </div>
        )
    }
  };

  const setInvoiceModal = (vendor) => {
    console.log(vendor);
    switch (vendor) {
      case 'Oracle':
        return () => {
          setModalState(true);

        }
      default:
        null
    }
  };

  return (
    <div className='flex items-center text-gray-800 border-t'>
      <input type='checkbox' className='w-5 h-5 border-b bg-gray-400 mr-4 ml-2 my-4' />
      <div className='w-[304px] flex items-center space-x-2' onClick={setInvoiceModal(invoice.vendor)}>
        <div>
          {
            invoice.logoUrl ? <Image width={24} height={24} alt={invoice.vendor} src={invoice.logoUrl} /> : <NoLogo />
          }
        </div>
        <div>
          {
            invoice.vendor === 'Missing' ?
              <h6 className='text-gray-400'>{invoice.vendor}</h6> :
              <h6>{invoice.vendor}</h6>
          }
        </div>
        <div>
          {
            invoice.verified ? <Verified /> : null
          }
        </div>
      </div>

      <div className='w-[472px]'>
        {invoice.decsription}
      </div>
      <div className='w-[216px]'>{getStatus(invoice.status, invoice.issues)}</div>
      <div className={`w-[128px] ${getTimeColor(invoice.timeInStage)} `}>{invoice.timeInStage}</div>
      <div className='w-[348px]'>{getApprover(invoice.approver, invoice.approverAction)}</div>
      <div className='w-[152px]'>{invoice.paymentDate}</div>
      <div className='w-[96px]'>{invoice.toBePaid}</div>

      <InvoiceModal open={modalState} onClose={() => setModalState(false)} />
    </div>
  )
}

export default InvoiceListItem