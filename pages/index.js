import Head from 'next/head'
import Invoices from '../utils/Invoices'
import InvoiceListItem from '../components/InvoiceListItem'

// icons
import Search from '../public/assets/svg/icons/search'
import Gear from '../public/assets/svg/icons/gear'
import Plus from '../public/assets/svg/icons/plus'
import Envelope from '../public/assets/svg/icons/envelope'
import ChevronDown from '../public/assets/svg/icons/chevronDown'

export default function Home() {
  const tabs = [
    {
      name: 'Inbox',
      count: 0,
      status: false,
      selected: true,
    },
    {
      name: 'Approving',
      count: 1,
      status: false,
    },
    {
      name: 'Scheduled',
      count: 0,
      status: false,
    },
    {
      name: 'Processing',
      count: 0,
      status: true,
    },
    {
      name: 'Paid',
      count: 321,
      status: false,
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative px-6 pt-10 ">
        {/* invoices header */}
        <div className='flex items-center justify-between '>
          <h3 className='text-2xl font-medium'>Invoices</h3>
          <button className='font-normal text-sm border-gray-400 border rounded py-[6px] px-3'>New Invoice</button>
        </div>

        <div className='flex items-end min-w-full gap-5 pt-6 border-b border-gray-100'>
          {/* invoices tabs */}
          {tabs.map((tab, index) => (
            <div key={index} className='flex items-center justify-between'>
              <div className='relative flex items-center'>
                <h4 className={`relative font-medium text-sm px-2 ${tab.selected ? 'border border-b-gray-900' : 'text-gray-500'}`}>{tab.name}
                  {tab.count > 0 &&
                    <span className='absolute ml-[2px] mb-2 text-xs text-gray-400'>{tab.count}</span>
                  }
                  {tab.status &&
                    <span className='absolute mt-1 ml-[2px] h-1 w-1 rounded-full bg-sky-600'></span>
                  }
                </h4>
              </div>

            </div>
          ))}
        </div>

        <div className='flex items-center justify-between pt-4'>
          {/* search bar */}
          <div className='flex items-center space-x-4'>
            <div className='py-[10px] px-4 rounded w-[402px] h-10 bg-gray-200'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center'>
                  <div className=''>
                    <Search stroke='#A8A29E' />
                  </div>
                  <input className='w-full h-full pl-4 text-sm font-normal text-white bg-transparent' placeholder='Search...' />
                </div>
              </div>
            </div>
            <button className='flex items-center gap-2'>
              <Plus />
              <h6 className='text-sm font-medium'>Add filter</h6>
            </button>
          </div>
          <Gear />
        </div>

        {/* invoices table */}
        <div className='mt-4 border-gray-200 border rounded-[4px] text-xs font-medium whitespace-nowrap'>
          <div className='flex items-center cursor-pointer'>
            <input type='checkbox' className='w-5 h-5 my-2 ml-2 mr-4 bg-gray-400 border' />
            <h6 className='w-[304px]'>Vendor</h6>
            <h6 className='w-[472px]'>Description</h6>
            <h6 className='w-[216px]'>Status</h6>
            <h6 className='w-[128px]'>Time in stage</h6>
            <h6 className='w-[348px]'>Approver</h6>
            <h6 className='w-[152px]'>Paym. date</h6>
            <h6 className='w-[96px]'>To be paid</h6>
          </div>
          {/* map invoices */}
          {Invoices.map((invoice, index) => (
            <InvoiceListItem key={index} invoice={invoice} />
          ))}
        </div>

        <div className='flex items-center justify-between pt-6 pb-14'>
          <div className='flex items-center space-x-2'>
            <Envelope />
            <div>
              <h6 className='text-xs font-medium'>Send or forward invoices to</h6>
              <h6 className='text-xs font-medium text-orange-600'>company@inbox.light.inc</h6>
            </div>
          </div>

          {/* pagination */}
          <div className='flex items-center'>
            <div className='w-8 h-8'>
            </div>
            <div className='flex items-center'>
              <div className='flex items-center justify-center w-8 h-8'>
                <ChevronDown stroke={'black'} />
              </div>
              <h6 className='font-medium text-xs w-8 h-8 bg-sky-100 text-sky-600 text-center p-[6px] rounded-[4px]'>1</h6>
              <h6 className='font-medium text-xs w-8 h-8 bg-white text-gray-500 text-center p-[6px] rounded-[4px]'>2</h6>
              <h6 className='font-medium text-xs w-8 h-8 bg-white text-gray-500 text-center p-[6px] rounded-[4px]'>3</h6>
              <h6 className='font-medium text-xs w-8 h-8 bg-white text-gray-500 text-center p-[6px] rounded-[4px]'>4</h6>
              <h6 className='font-medium text-xs w-8 h-8 bg-white text-gray-500 text-center p-[6px] rounded-[4px]'>...</h6>
              <h6 className='font-medium text-xs w-8 h-8 bg-white text-gray-500 text-center p-[6px] rounded-[4px]'>13</h6>

              <div className='flex items-center justify-center w-8 h-8'>
                <ChevronDown stroke={'black'} />
              </div>

              <button className='flex items-center justify-center border border-gray-200 rounded-[4px] text-sm font-normal text-gray-700 w-[115px] h-[40px]'>50 / page
                <div className='flex items-center justify-center w-8 h-8'>
                  <ChevronDown stroke={'black'} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
