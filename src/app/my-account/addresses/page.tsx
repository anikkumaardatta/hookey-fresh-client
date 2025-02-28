import { FloatingLabel } from 'flowbite-react';
import React from 'react';

const page = () => {
  return (
    <div>
      <p>The following addresses will be used on the checkout page by default.</p>
      <div className='flex flex-col md:flex-row gap-5 my-10'>
        <div className='w-full md:w-1/2'>
          <h2 className='text-2xl font-semibold uppercase'>Billing address</h2>
          <ul className='my-4'>
            <li>
              <span className='font-medium'>Name:</span> user.firstName
            </li>
            <li>
              <span className='font-medium'>Address:</span> user.address
            </li>
            <li>
              <span className='font-medium'>Phone:</span> user.address
            </li>
          </ul>

          <div className='my-5'>
            <form className=''>
              <FloatingLabel className='mb-5' variant='standard' label='Name' />
              <FloatingLabel className='mb-5' variant='standard' label='District' />
              <FloatingLabel className='mb-5' variant='standard' label='Street address' />
              <FloatingLabel className='mb-5' variant='standard' label='Town / City' />
              <FloatingLabel className='mb-5' variant='standard' label='Postcode / ZIP (optional)' />
              <FloatingLabel className='mb-5' variant='standard' label='Phone' />
              <FloatingLabel className='mb-5' variant='standard' label='Email address (optional)' />
              <button className='px-5 py-2 w-full uppercase font-semibold rounded transition duration-300 bg-secondary hover:bg-primary text-white focus:outline-none'>
                Save Address
              </button>
            </form>
          </div>
        </div>
        <div className='w-full md:w-1/2'>
          <h2 className='text-2xl font-semibold uppercase'>Shipping address </h2>
          <ul className='my-4'>
            <li>
              <span className='font-medium'>Name:</span> user.firstName
            </li>
            <li>
              <span className='font-medium'>Address:</span> user.address
            </li>
            <li>
              <span className='font-medium'>Phone:</span> user.address
            </li>
          </ul>
          <div className='my-5'>
            <form className=''>
              <FloatingLabel className='mb-5' variant='standard' label='Name' />
              <FloatingLabel className='mb-5' variant='standard' label='District' />
              <FloatingLabel className='mb-5' variant='standard' label='Street address' />
              <FloatingLabel className='mb-5' variant='standard' label='Town / City' />
              <FloatingLabel className='mb-5' variant='standard' label='Postcode / ZIP (optional)' />
              <FloatingLabel className='mb-5' variant='standard' label='Phone' />
              <FloatingLabel className='mb-5' variant='standard' label='Email address (optional)' />
              <button className='px-5 py-2 w-full uppercase font-semibold rounded transition duration-300 bg-secondary hover:bg-primary text-white focus:outline-none'>
                Save Address
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
