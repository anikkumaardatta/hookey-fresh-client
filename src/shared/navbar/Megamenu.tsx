'use client';
import React, { useState } from 'react';

import './style.css';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';
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
    <div className=''>
      {/* <!-- component --> */}
      <div className='group inline-block'>
        <button className='outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-48'>
          <span className='relative pr-1 font-semibold flex-1'>Dropdown</span>
          <span className='mr-auto'>
            <FaChevronDown
              className='fill-current h-4 w-4
                  transition duration-150 ease-in-out'
            />
          </span>
        </button>

        <ul
          className='bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
          transition duration-150 ease-in-out origin-top min-w-48'>
          {menulist.map((item, index) => (
            <li key={index} className='rounded-sm  px-3 py-1 hover:bg-gray-100'>
              <button className='w-full text-left flex items-center outline-none focus:outline-none'>
                <span className='pr-1 flex-1 font-medium'>{item.nav}</span>
                <span className='mr-auto'>
                  <FaChevronRight
                    className='fill-current h-4 w-4
                  transition duration-150 ease-in-out'
                  />
                </span>
              </button>

              {item.submenu.length > 0 && (
                <ul
                  className='border rounded-sm absolute top-0 right-1 
            transition duration-150 ease-in-out origin-top-left
            w-96 h-96 bg-light
            grid grid-cols-2
            p-5
            '>
                  {item.submenu.map((subitem, index) => (
                    <Link
                      key={index}
                      href={subitem.path}
                      className='border font-medium hover:text-primary duration-100'>
                      {subitem.menu}
                    </Link>
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
