import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ setFilterMuseum, setPage }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <Link
          className='flex items-center space-x-3 rtl:space-x-reverse'
          onClick={() => {
            navigate('/');
          }}
        >
          <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='h-8 navbar-logo'
            alt='Flowbite Logo'
          />
          <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Noona React
          </span>
        </Link>
        <div className='flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse'>
          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='navbar-mobile-btn inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-sticky'
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? '' : 'hidden'
          }`}
          id='navbar-sticky'
        >
          <ul className='navbar-mobile-menu flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            <li>
              <Link
                className=' block py-2 px-3 text-gray-900 rounded hover:bg-[#ff7336] hover:text-white md:hover:bg-transparent md:hover:text-[#ff7336] md:p-0 md:dark:hover:text-[#ff7336] dark:text-white dark:hover:bg-[#ff7336] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                aria-current='page'
                onClick={() => {
                  navigate('/');
                  setPage(1); // 페이지 1로 초기화
                }}
              >
                메인
              </Link>
            </li>
            <li>
              <Link
                className=' block py-2 px-3 text-gray-900 rounded hover:bg-[#ff7336] hover:text-white md:hover:bg-transparent md:hover:text-[#ff7336] md:p-0 md:dark:hover:text-[#ff7336] dark:text-white dark:hover:bg-[#ff7336] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                onClick={() => setPage(1)} // 페이지 1로 초기화
              >
                병원
              </Link>
            </li>
            <li>
              <Link
                className=' block py-2 px-3 text-gray-900 rounded hover:bg-[#ff7336] hover:text-white md:hover:bg-transparent md:hover:text-[#ff7336] md:p-0 md:dark:hover:text-[#ff7336] dark:text-white dark:hover:bg-[#ff7336] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                onClick={() => setPage(1)} // 페이지 1로 초기화
              >
                카페
              </Link>
            </li>
            <li>
              <Link
                className='art-museum-btn block py-2 px-3 text-gray-900 rounded hover:bg-[#ff7336] hover:text-white md:hover:bg-transparent md:hover:text-[#ff7336] md:p-0 md:dark:hover:text-[#ff7336] dark:text-white dark:hover:bg-[#ff7336] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                onClick={() => {
                  setFilterMuseum(true);
                  setPage(1); // 페이지 1로 초기화
                }}
              >
                미술관/박물관
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
