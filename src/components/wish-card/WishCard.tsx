import { ProductType } from '@/app/types';
import ButtonAddToCart from '@/shared/button/ButtonAddToCart';
import Link from 'next/link';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaRegTimesCircle } from 'react-icons/fa';
import { HiOutlineViewfinderCircle } from 'react-icons/hi2';

interface WishCardProps {
  key: number;
  wishProduct: ProductType;
}

const WishCard: React.FC<WishCardProps> = ({ wishProduct = {} as ProductType }) => {
  return (
    <>
      <div className='relative mx-auto max-w-[168px] lg:max-w-[200px] overflow-hidden bg-white shadow-md text-center group/card border hover:border-primary duration-300'>
        <a href='#'>
          {wishProduct?.images && wishProduct.images[0] && (
            <img
              className='mx-auto rounded-t-lg object-cover group-hover/card:scale-105 duration-300 delay-75 ease-in-out'
              src={wishProduct.images[0]}
              alt='product image'
            />
          )}
        </a>

        <button className='absolute opacity-10 flex top-0 right-0 p-2 m-4 bg-light shadow-2xl text-center text-3xl align-middle font-semibold text-gray-600 hover:text-primary duration-300 rounded-sm group-hover/card:opacity-100 group/modal'>
          <HiOutlineViewfinderCircle />
        </button>
        <div className='mt-1 lg:mt-4 px-5 pb-5'>
          <Link href={`products/${wishProduct.name.toLowerCase().split(' ').join('-')}`}>
            <h5 className='text-base font-medium tracking-tight text-dark hover:text-primary duration-300'>
              {wishProduct.name}
            </h5>
          </Link>

          <div className=' '>
            <p className='text-lg font-semibold text-dark'>$249</p>
          </div>
          <div className='flex items-center justify-between'>
            <a
              href='#_'
              className='relative inline-flex items-center w-full mt-2 justify-center px-6 py-0 lg:py-2 overflow-hidden font-semibold text-white transition duration-300 ease-out bg-secondary rounded-sm shadow-md group'>
              <span className='absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 translate-y-full bg-primary group-hover:translate-y-0 ease'>
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
              <span className='absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:-translate-y-full ease'>
                Add To Cart
              </span>
              <span className='relative invisible'>Button Text</span>
            </a>
          </div>
          <button
            type='button'
            className='text-white mt-2 bg-red-500 hover:bg-red-600 focus:outline-none font-medium rounded-sm text-sm px-5 py-2 text-center inline-flex items-center '>
            <FaRegTimesCircle className='text-xl me-2' />
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default WishCard;
