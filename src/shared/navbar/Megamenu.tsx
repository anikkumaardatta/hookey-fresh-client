'use client';
import React, { useState } from 'react';

import './style.css';
import { FaBars, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import menulist from '@/_mock/navdata/navdata';
import Link from 'next/link';

const MegaMenu: React.FC = () => {
  // State to manage open/close submenus
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  // Function to toggle submenus
  const toggleSubmenu = (category: string) => {
    setOpenSubmenu(openSubmenu === category ? null : category);
  };

  return (
    <div className='relative z-[2]'>
      {/* <!-- component --> */}
      <div className='group inline-block'>
        <button className='px-4 py-3 bg-primary text-white outline-none focus:outline-none border rounded-sm flex items-center min-w-48'>
          <span>
            <FaBars />
          </span>
          <span className='relative px-5 font-semibold flex-1 uppercase'>Browse Categories</span>
          <span className='mr-auto'>
            <FaChevronDown
              className='fill-current h-4 w-4
                  transition duration-150 ease-in-out'
            />
          </span>
        </button>

        <ul
          className='bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
          transition duration-150 ease-in-out origin-top min-w-72'>
          {menulist.map((item, index) => (
            <li key={index} className='rounded-sm px-5 py-2 hover:bg-gray-100'>
              <button className='w-full text-left flex items-center outline-none focus:outline-none'>
                <span className='pr-1 flex-1 font-medium'>{item.nav}</span>
                <span className='mr-auto text-xs text-gray-400'>
                  <FaChevronRight />
                </span>
              </button>

              {item.submenu.length > 0 && (
                <ul
                  className='border rounded-sm absolute top-0 right-1 
            transition duration-150 ease-in-out origin-top-left
            w-[720px] h-96 bg-light
            p-5
            flex justify-stretch
            '>
                  {item.submenu.map((subitems, index) => (
                    <div className='m-4'>
                      <div className='flex justify-between mb-5'>
                        <span className='font-medium'>{subitems.category}</span>
                      </div>
                      <div className='flex flex-col'>
                        {subitems.items.map((item, index) => (
                          <Link key={index} href='3' className='pe-2 py-1 font-normal hover:text-primary duration-100'>
                            {item.menu}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MegaMenu;
