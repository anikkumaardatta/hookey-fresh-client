import React from 'react';
import ContractUs from './contract-us';
import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';

const page = () => {
  return (
    <div>
      <Breadcrumb aria-label='Default breadcrumb example' className='mb-10'>
        <BreadcrumbItem href='/'>Home</BreadcrumbItem>
        <BreadcrumbItem>Contact Us</BreadcrumbItem>
      </Breadcrumb>
      <ContractUs />
    </div>
  );
};

export default page;
