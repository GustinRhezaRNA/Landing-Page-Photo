import { useState } from 'react';
import Logo from '../assets/Sample Logo.svg';
import Button from './Button.jsx';
useState;

export default function Navigation() {
  const open = () => {
    const btn = document.getElementById('menu-btn');
    const nav = document.getElementById('menu');

    btn.addEventListener('click', () => {
      btn.classList.toggle('open');
      nav.classList.toggle('flex');
      nav.classList.toggle('hidden');
    });
  };

  return (
    <nav className="relative container mx-auto p-6 bg-white">
      <div className="flex items-center justify-around md:justify-between ">
        <div className="logo pt-2 flex">
          <img
            className="w-20 md:w-full "
            src={Logo}
            alt=""
          />
        </div>
        <div className="hidden md:flex space-x-12">
          <a
            href=""
            className="hover:text-blue-300"
          >
            Features
          </a>
          <a
            href=""
            className="hover:text-blue-300"
          >
            Pricing
          </a>
          <a
            href=""
            className="hover:text-blue-300"
          >
            Community
          </a>
          <a
            href=""
            className="hover:text-blue-300"
          >
            Support
          </a>
        </div>

        <Button
          className=" "
          text={'register'}
          variant={'btn-black hidden md:inline py-[3px] px-[20px] '}
          // onClick={handleRegistration}
        />

        <button
          id="menu-btn"
          className="flex hamburger md:hidden focus:outline-none"
          onClick={open}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      <div className="md:hidden">
        <div
          id="menu"
          className=" absolute flex-col hidden items-center self-end py-8 mt-10 space-y-6  bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
          <a href="">Features</a>
          <a href="">Pricing</a>
          <a href="">Community</a>
          <a href="">Support</a>
        </div>
      </div>
    </nav>
  );
}
