'use client';
import outlets from '@/_mock/outletes/outlets';
import OutletCard from '@/components/outlet-card/OutletCard';
import { Tabs } from 'flowbite-react';
import React from 'react';

const OutletsPage = () => {
  return (
    <>
      <div className='max-w-[900px] mx-auto'>
        <Tabs aria-label='Tabs with icons' variant='underline'>
          <Tabs.Item active title='Dhaka'>
            This is <span className='font-medium text-gray-800 dark:text-white'>Profile tab's associated content</span>.
            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes
            to control the content visibility and styling.
          </Tabs.Item>
          <Tabs.Item title='Chittagong'>
            This is{' '}
            <span className='font-medium text-gray-800 dark:text-white'>Dashboard tab's associated content</span>.
            Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes
            to control the content visibility and styling.
          </Tabs.Item>
          <Tabs.Item title='Rajshahi'>
            This is <span className='font-medium text-gray-800 dark:text-white'>Settings tab's associated content</span>
            . Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes
            to control the content visibility and styling.
          </Tabs.Item>
          <Tabs.Item title='Comilla'>
            This is <span className='font-medium text-gray-800 dark:text-white'>Contacts tab's associated content</span>
            . Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes
            to control the content visibility and styling.
          </Tabs.Item>
        </Tabs>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1'>
          {outlets.map((outlet, index) => (
            <OutletCard key={index} outlet={outlet} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OutletsPage;
