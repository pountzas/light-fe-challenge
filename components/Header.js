import Link from 'next/link'
import ChevronDown from '../public/assets/svg/icons/chevronDown'
import Search from '../public/assets/svg/icons/search'

function Header() {
  const pages = [
    { name: 'Home', href: '/' },
    { name: 'Invoices', href: '/', count: 32 },
    { name: 'Vendors', href: '/' },
    { name: 'Insights', href: '/' },
  ]

  return (
    <nav className='sticky z-10 top-0 h-[52px] w-full bg-gray-800 text-white flex items-center justify-between' >
      <section className='flex items-center justify-between'>
        {/* Left section */}
        <div className=''>
          {/* logo section */}
          <div className='flex items-center py-2 pl-6 pr-4 border-r border-gray-700 h-9'>
            <div className='h-9 w-9 rounded-[4px] bg-white opacity-20'></div>
            <Link href='/'>
              <div className='flex items-center pl-6 space-x-4'>
                <h1 className='text-lg font-medium whitespace-nowrap'>Acme Inc</h1>
                <ChevronDown />
              </div>
            </Link>
          </div>
        </div>
        <div className='items-center pl-5 text-sm font-medium'>
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
                  <Search stroke='#FAFAF9' />
                </div>
                <input className='w-full h-full pl-4 text-sm font-normal text-white bg-transparent' placeholder='Ask Ray...' />
              </div>
              <h5 className='text-xs font-medium opacity-50 text-gray-50'>CMD+K</h5>
            </div>
          </div>
          <div className='flex items-center pl-5 space-x-10 text-sm font-medium '>
            <Link href='/'>
              Logs
            </Link>
            <Link href='/'>
              Liquidity
            </Link>
            <Link href='/'>
              Policies
            </Link>

            <div className='flex items-center pr-4 space-x-2'>
              <div className='bg-black rounded-full w-9 h-9'></div>
              <ChevronDown />
            </div>

          </div>
        </div>
      </section>
    </nav>
  )
}

export default Header