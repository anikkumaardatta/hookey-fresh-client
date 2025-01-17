import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';
import React from 'react';
import OutletsPage from './outlets';

const page = () => {
  return (
    <>
      <Breadcrumb aria-label='Default breadcrumb example' className='mb-10'>
        <BreadcrumbItem href='/'>Home</BreadcrumbItem>
        <BreadcrumbItem>Outlets</BreadcrumbItem>
      </Breadcrumb>
      <OutletsPage />
    </>
  );
};

export default page;
