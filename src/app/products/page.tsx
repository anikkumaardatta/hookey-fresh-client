import React from 'react';
import ProductsPage from './products';
import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';

const page = () => {
  return (
    <div>
      <Breadcrumb aria-label='Default breadcrumb example' className='mb-10'>
        <BreadcrumbItem href='/'>Home</BreadcrumbItem>
        <BreadcrumbItem>Products</BreadcrumbItem>
      </Breadcrumb>
      <ProductsPage />
    </div>
  );
};

export default page;
