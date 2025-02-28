import React from 'react';
import { CiHeart, CiMap, CiReceipt, CiUser } from 'react-icons/ci';

const page = () => {
  return (
    <div className='container'>
      <div className='font-normal'>
        <p>
          Hello{' '}
          <a
            href=''
            className='font-medium hover:text-primary duration-100 cursor-pointer'
            target='_blank'
            rel='noopener noreferrer'>
            User
          </a>
          ,
        </p>
        <br />
        <p className='text-dark'>
          From your account dashboard you can view your{' '}
          <a
            href=''
            className='font-medium hover:text-primary duration-100 cursor-pointer'
            target='_blank'
            rel='noopener noreferrer'>
            recent orders
          </a>
          , manage your{' '}
          <a
            href=''
            className='font-medium hover:text-primary duration-100 cursor-pointer'
            target='_blank'
            rel='noopener noreferrer'>
            shipping and billing addresses
          </a>
          , and{' '}
          <a
            href=''
            className='font-medium hover:text-primary duration-100 cursor-pointer'
            target='_blank'
            rel='noopener noreferrer'>
            edit your password and account details
          </a>
          .
        </p>
      </div>

      {/* =========================== */}
      <div className='mt-10 flex flex-wrap justify-center items-center gap-4'>
        {/* <!-- Comments --> */}
        <a
          href='#'
          className='flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80'>
          <div className='flex flex-row items-center justify-center'>
            <CiReceipt className='text-3xl me-2' />

            <span className='font-bold text-gray-600'>My Orders </span>
          </div>
        </a>

        {/* <!-- Projects --> */}
        <a
          href='#'
          className='flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80'>
          <div className='flex flex-row items-center justify-center'>
            <CiMap className='text-3xl me-2' />

            <span className='font-bold text-gray-600'> Addresses </span>
          </div>
        </a>

        <a
          href='#'
          className='flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80'>
          <div className='flex flex-row items-center justify-center'>
            <CiHeart className='text-3xl me-2' />

            <span className='font-bold text-gray-600'> My Wishlist </span>
          </div>
        </a>

        {/* <!-- Projects --> */}
        <a
          href='#'
          className='flex h-20 w-40 flex-col items-center justify-center rounded-md border border-dashed border-gray-200 transition-colors duration-100 ease-in-out hover:border-gray-400/80'>
          <div className='flex flex-row items-center justify-center'>
            <CiUser className='text-3xl me-2' />

            <span className='font-bold text-gray-600'> My Account </span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default page;
