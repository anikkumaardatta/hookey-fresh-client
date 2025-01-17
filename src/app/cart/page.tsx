import React from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa';

const page = () => {
  return (
    <>
      <div className='bg-light py-8'>
        <div className='max-w-[1080px] container mx-auto px-4'>
          <h1 className='text-2xl font-semibold mb-4'>Shopping Cart</h1>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='md:w-3/4'>
              <div className='bg-white rounded-lg shadow-md p-6 mb-4'>
                <table className='w-full'>
                  <thead>
                    <tr>
                      <th className='text-left font-semibold'>Product</th>
                      <th className='text-left font-semibold'>Price</th>
                      <th className='text-left font-semibold'>Quantity</th>
                      <th className='text-left font-semibold'>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='py-5 border'>
                        <div className='flex items-center'>
                          <img
                            className='h-16 w-16 mr-4'
                            src='https://i.ibb.co.com/DCmYVpn/Group-1-1.jpg'
                            alt='Product image'
                          />
                          <span className='font-semibold'>Product name</span>
                        </div>
                      </td>
                      <td className='py-4'>$19.99</td>
                      <td className='py-4'>
                        <div className='flex items-center'>
                          <button className='border rounded-md p-2 text-sm mr-2 hover:bg-primary hover:text-white opacity-80'>
                            <FaMinus />
                          </button>
                          <span className='text-center w-8 text-lg'>1</span>
                          <button className='border rounded-md p-2 text-sm ml-2 hover:bg-primary hover:text-white opacity-80'>
                            <FaPlus />
                          </button>
                        </div>
                      </td>
                      <td className='py-4'>$19.99</td>
                    </tr>
                    {/* More product rows  */}
                    <tr>
                      <td className='py-5 border'>
                        <div className='flex items-center'>
                          <img
                            className='h-16 w-16 mr-4'
                            src='https://i.ibb.co.com/DCmYVpn/Group-1-1.jpg'
                            alt='Product image'
                          />
                          <span className='font-semibold'>Product name</span>
                        </div>
                      </td>
                      <td className='py-4'>$19.99</td>
                      <td className='py-4'>
                        <div className='flex items-center'>
                          <button className='border rounded-md p-2 text-sm mr-2 hover:bg-primary hover:text-white opacity-80'>
                            <FaMinus />
                          </button>
                          <span className='text-center w-8 text-lg'>1</span>
                          <button className='border rounded-md p-2 text-sm ml-2 hover:bg-primary hover:text-white opacity-80'>
                            <FaPlus />
                          </button>
                        </div>
                      </td>
                      <td className='py-4'>$19.99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='md:w-1/4'>
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h2 className='text-lg font-semibold mb-4'>Summary</h2>
                <div className='flex justify-between mb-2'>
                  <span>Subtotal</span>
                  <span>$19.99</span>
                </div>
                <div className='flex justify-between mb-2'>
                  <span>Taxes</span>
                  <span>$1.99</span>
                </div>
                <div className='flex justify-between mb-2'>
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr className='my-2' />
                <div className='flex justify-between mb-2'>
                  <span className='font-semibold'>Total</span>
                  <span className='font-semibold'>$21.98</span>
                </div>
                <button className='bg-secondary text-white font-bold py-2 px-4 rounded-sm mt-4 w-full hover:bg-primary'>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
