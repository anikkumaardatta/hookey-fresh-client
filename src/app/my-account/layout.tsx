import { NavbarCollapse, NavbarLink } from 'flowbite-react';
import Link from 'next/link';
import { AiFillLayout, AiFillSnippets } from 'react-icons/ai';
import { BiSolidBookHeart } from 'react-icons/bi';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { MdSwitchAccount } from 'react-icons/md';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='scroll-smooth max-w-[1080px] mx-auto'>
      <div className='flex flex-col md:flex-row justify-center'>
        <aside id='default-sidebar' className=' w-full md:w-72 ' aria-label='Sidebar'>
          <div className='h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'>
            <ul className='space-y-2 font-medium'>
              <li>
                <Link
                  href={'/my-account/'}
                  className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                  <AiFillLayout className='text-2xl text-gray-700' />
                  <span className='ms-3'>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/my-account/orders'}
                  className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                  <AiFillSnippets className='text-2xl text-gray-700' />
                  <span className='flex-1 ms-3 whitespace-nowrap'>Orders</span>
                  <span className='inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300'>
                    3
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/my-account/addresses'}
                  className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                  <FaMapMarkedAlt className='text-2xl text-gray-700' />
                  <span className='flex-1 ms-3 whitespace-nowrap'>Addresses</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/my-account/account-info'}
                  className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                  <MdSwitchAccount className='text-2xl text-gray-700' />
                  <span className='flex-1 ms-3 whitespace-nowrap'>Account Details</span>
                </Link>
              </li>
              <li>
                <Link
                  href={'/my-account/wishlist'}
                  className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'>
                  <BiSolidBookHeart className='text-2xl text-gray-700' />
                  <span className='flex-1 ms-3 whitespace-nowrap'>Wishlist</span>
                  <span className='inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300'>
                    3
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        <div className='w-full p-4 '>
          <div className='p-4 rounded-lg'>{children}</div>
        </div>
      </div>
    </div>
  );
}
