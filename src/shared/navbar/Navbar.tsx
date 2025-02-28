'use client';
import {
  Modal,
  Button,
  MegaMenu,
  MegaMenuDropdown,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';
import { useState } from 'react';

const Navbar = () => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <>
      <MegaMenu>
        <div className='mx-auto flex flex-wrap items-center justify-between p-4 md:space-x-8'>
          <NavbarBrand href='/'>
            <img alt='' src='https://i.ibb.co.com/NYPZHrN/logo.png' className=' w-40 sm:h-10' />
          </NavbarBrand>
          <div className='order-2 hidden items-center md:flex'>
            <button onClick={() => setOpenModal(true)} className='font-medium text-gray-700 hover:text-gray-800'>
              Login / Register
            </button>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
              <div
                id='login-popup'
                className='bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex'>
                <div className='relative p-4 w-full max-w-md h-full md:h-auto'>
                  <div className='relative bg-white rounded-lg shadow'>
                    <button
                      onClick={() => setOpenModal(false)}
                      type='button'
                      className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close'>
                      <svg
                        aria-hidden='true'
                        className='w-5 h-5'
                        fill='#c6c7c7'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                          fillRule='evenodd'
                          d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'></path>
                      </svg>
                      <span className='sr-only'>Close popup</span>
                    </button>

                    <div className='p-5'>
                      <h3 className='text-2xl mb-0.5 font-medium'></h3>
                      <p className='mb-4 text-sm font-normal text-gray-800'></p>

                      <div className='text-center'>
                        <p className='mb-3 text-2xl font-semibold leading-5 text-slate-900'>Login to your account</p>
                        <p className='mt-2 text-sm leading-4 text-slate-600'>
                          You must be logged in to perform this action.
                        </p>
                      </div>

                      <div className='mt-7 flex flex-col gap-2'>
                        <button className='inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60'>
                          <img
                            src='https://www.svgrepo.com/show/512317/github-142.svg'
                            alt='GitHub'
                            className='h-[18px] w-[18px] '
                          />
                          Continue with GitHub
                        </button>

                        <button className='inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60'>
                          <img
                            src='https://www.svgrepo.com/show/475656/google-color.svg'
                            alt='Google'
                            className='h-[18px] w-[18px] '
                          />
                          Continue with Google
                        </button>

                        <button className='inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60'>
                          <img
                            src='https://www.svgrepo.com/show/448234/linkedin.svg'
                            alt='Google'
                            className='h-[18px] w-[18px] '
                          />
                          Continue with LinkedIn
                        </button>
                      </div>

                      <div className='flex w-full items-center gap-2 py-6 text-sm text-slate-600'>
                        <div className='h-px w-full bg-slate-200'></div>
                        OR
                        <div className='h-px w-full bg-slate-200'></div>
                      </div>

                      <form className='w-full'>
                        <label htmlFor='email' className='sr-only'>
                          Email address
                        </label>
                        <input
                          name='email'
                          type='email'
                          className='block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1'
                          placeholder='Email Address'
                        />
                        <label htmlFor='password' className='sr-only'>
                          Password
                        </label>
                        <input
                          name='password'
                          type='password'
                          className='mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1'
                          placeholder='Password'
                        />
                        <p className='mb-3 mt-2 text-sm text-gray-500'>
                          <a href='/forgot-password' className='text-blue-800 hover:text-blue-600'>
                            Reset your password?
                          </a>
                        </p>
                        <button
                          type='submit'
                          className='inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400'>
                          Continue
                        </button>
                      </form>

                      <div className='mt-6 text-center text-sm text-slate-600'>
                        Don't have an account?
                        <a href='/signup' className='font-medium text-[#4285f4]'>
                          Sign up
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          </div>
          <NavbarToggle />
          <NavbarCollapse>
            <NavbarLink href='/'>Home</NavbarLink>
            <NavbarLink>
              <MegaMenuDropdown toggle={<>Company</>}>
                <ul className='grid grid-cols-3'>
                  <div className='space-y-4 p-4'>
                    <li>
                      <a href='#' className='hover:text-primary-600 dark:hover:text-primary-500'>
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:text-primary-600 dark:hover:text-primary-500'>
                        Library
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:text-primary-600 dark:hover:text-primary-500'>
                        Resources
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:text-primary-600 dark:hover:text-primary-500'>
                        Pro Version
                      </a>
                    </li>
                  </div>
                  <div className='space-y-4 p-4'>
                    <li>
                      <a href='#' className='hover:text-primary-600 dark:hover:text-primary-500'>
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:text-primary-600 dark:hover:text-primary-500'>
                        Support Center
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:text-primary-600 dark:hover:text-primary-500'>
                        Terms
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:text-primary-600 dark:hover:text-primary-500'>
                        Blog
                      </a>
                    </li>
                  </div>
                  <div className='space-y-4 p-4'>
                    <li>
                      <a href='#' className='hover:text-primary-600 dark:hover:text-primary-500'>
                        Newsletter
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:text-primary-600 dark:hover:text-primary-500'>
                        Playground
                      </a>
                    </li>
                    <li>
                      <a href='#' className='hover:text-primary-600 dark:hover:text-primary-500'>
                        License
                      </a>
                    </li>
                  </div>
                </ul>
              </MegaMenuDropdown>
            </NavbarLink>
            <NavbarLink href='/products'>Products</NavbarLink>
            <NavbarLink href='/outlets'>Outlets</NavbarLink>
            <NavbarLink href='/contract-us'>Contact</NavbarLink>
            <NavbarLink href='/cart'>Cart</NavbarLink>
            <NavbarLink href='/my-account'>My Account</NavbarLink>
          </NavbarCollapse>
        </div>
      </MegaMenu>
    </>
  );
};

export default Navbar;
