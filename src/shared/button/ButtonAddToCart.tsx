import React from 'react';

const ButtonAddToCart = () => {
  return (
    <div className='flex items-center justify-between'>
      <a
        href='#_'
        className='relative inline-flex items-center w-full mt-2 justify-center px-6 py-2 overflow-hidden font-semibold text-white transition duration-300 ease-out bg-secondary rounded-sm shadow-md group'>
        <span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-x-full bg-primary group-hover:translate-x-0 ease'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='mr-2 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
        </span>
        <span className='absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease'>
          Add To Cart
        </span>
        <span className='relative invisible'>Button Text</span>
      </a>
    </div>
  );
};

export default ButtonAddToCart;
