import React from 'react';

const page = () => {
  return (
    <div>
      <div className='overflow-x-auto'>
        {/* <!-- component --> */}
        <div className=' sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-0'>
          <div className='align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg'>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-primary tracking-wider'>
                    Order
                  </th>
                  <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-primary tracking-wider'>
                    Date
                  </th>
                  <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-primary tracking-wider'>
                    Status
                  </th>
                  <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-primary tracking-wider'>
                    Delivery Date
                  </th>
                  <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-primary tracking-wider'>
                    Total
                  </th>
                  <th className='px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-primary tracking-wider'>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white font-medium'>
                <tr>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>
                    <div className='flex items-center'>
                      <div>
                        <div className='text-sm leading-5 text-gray-800'>#1</div>
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500  text-sm leading-5'>
                    27 Jan, 2025
                  </td>
                  <td className='px-6 py-4 whitespace-no-wrap border-b  border-gray-500 text-sm leading-5'>
                    <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                      <span aria-hidden className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                      <span className='relative text-xs'>active</span>
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500  text-sm leading-5'>
                    27 Jan, 2025
                  </td>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500  text-sm leading-5'>
                    <span className='text-dark'>৳ 275</span> of 1 item
                  </td>
                  <td className='px-6 py- whitespace-no-wrap border-b border-gray-500 text-sm leading-5'>
                    <button className='px-5 py-2 rounded transition duration-300 bg-secondary hover:bg-primary text-white focus:outline-none'>
                      View Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>
                    <div className='flex items-center'>
                      <div>
                        <div className='text-sm leading-5 text-gray-800'>#1</div>
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500  text-sm leading-5'>
                    27 Jan, 2025
                  </td>
                  <td className='px-6 py-4 whitespace-no-wrap border-b  border-gray-500 text-sm leading-5'>
                    <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                      <span aria-hidden className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                      <span className='relative text-xs'>active</span>
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500  text-sm leading-5'>
                    27 Jan, 2025
                  </td>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500  text-sm leading-5'>
                    <span className='text-dark'>৳ 275</span> of 1 item
                  </td>
                  <td className='px-6 py- whitespace-no-wrap border-b border-gray-500 text-sm leading-5'>
                    <button className='px-5 py-2 rounded transition duration-300 bg-secondary hover:bg-primary text-white focus:outline-none'>
                      View Details
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'>
                    <div className='flex items-center'>
                      <div>
                        <div className='text-sm leading-5 text-gray-800'>#1</div>
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500  text-sm leading-5'>
                    27 Jan, 2025
                  </td>
                  <td className='px-6 py-4 whitespace-no-wrap border-b  border-gray-500 text-sm leading-5'>
                    <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                      <span aria-hidden className='absolute inset-0 bg-green-200 opacity-50 rounded-full'></span>
                      <span className='relative text-xs'>active</span>
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500  text-sm leading-5'>
                    27 Jan, 2025
                  </td>
                  <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500  text-sm leading-5'>
                    <span className='text-dark'>৳ 275</span> of 1 item
                  </td>
                  <td className='px-6 py- whitespace-no-wrap border-b border-gray-500 text-sm leading-5'>
                    <button className='px-5 py-2 rounded transition duration-300 bg-secondary hover:bg-primary text-white focus:outline-none'>
                      View Details
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
