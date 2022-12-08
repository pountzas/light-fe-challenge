import Link from 'next/link'
import React from 'react'
import ChevronDown from '../public/assets/svg/icons/chevronDown'
import Search from '../public/assets/svg/icons/search'

function Header() {
  const pages = [
    { name: 'Home', href: '/' },
    { name: 'Invoices', href: '/invoices', count: 32 },
    { name: 'Vendors', href: '/vendors' },
    { name: 'Insights', href: '/insights' },
  ]

  return (
    <nav className='sticky top-0 h-[52px] w-full bg-gray-800 text-white flex items-center justify-between' >
      <section className='flex items-center justify-between'>
        {/* Left section */}
        <div className=''>
          {/* logo section */}
          <div className='py-2 pl-6 pr-4 flex items-center border-r border-gray-700 h-9'>
            <div className='h-9 w-9 rounded-[4px] bg-white opacity-20'></div>
            <Link href='/'>
              <div className='flex items-center space-x-4 pl-6'>
                <h1 className='font-medium text-lg whitespace-nowrap'>Acme Inc</h1>
                {/* arrow down */}
                <ChevronDown />
              </div>
            </Link>
          </div>
        </div>
        <div className='font-medium text-sm items-center pl-5'>
          {/* nav section */}
          {pages.map((page, index) =>
            <Link
              key={index}
              className='px-5'
              href={page.href}>
              {page.name}
              {page.count && (
                <span className='bg-white text-gray-800 rounded-[4px] px-2 py-1 text-[14px] font-medium ml-1 w-6 h-5'>
                  {page.count}
                </span>
              )}
            </Link>
          )}
        </div>
      </section>
      <section className='flex items-center justify-between'>
        {/* Right section */}
        <div className='flex items-center'>
          {/* search */}
          <div className='py-[10px] px-4 rounded w-[402px] h-10 bg-white/20 shadow-black/20'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <div className='opacity-50'>
                  <Search />
                </div>
                <input className='bg-transparent text-sm font-normal text-white w-full h-full pl-4' placeholder='Ask Ray...' />
              </div>
              <h5 className='text-xs font-medium opacity-50 text-gray-50'>CMD+K</h5>
            </div>
          </div>
          <div className='flex items-center space-x-10 pl-5'>
            <Link href='/'>
              Logs
            </Link>
            <Link href='/'>
              Liquidity
            </Link>
            <Link href='/'>
              Policies
            </Link>

            <div className='flex items-center space-x-2 pr-4'>
              <div className='w-9 h-9 bg-black rounded-full'></div>
              <ChevronDown />
            </div>

          </div>
        </div>
      </section>
    </nav>
  )
}

export default Header