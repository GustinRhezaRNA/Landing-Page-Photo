import React from 'react';
import Logo from '../assets/Sample Logo.svg';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 py-10 space-y-8 mt-50px md:mt-[100px]">
        <div className="flex flex-col-reverse md:flex-row  md:flex-row justify-center  md: justify-around items-center md:items-start">
          {/* Logo Section */}
          <div className="flex self-center">
            <img
              src={Logo}
              className="h-8"
              alt="Logo"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:flex-row md:space-x-20 space-y-4 md:space-y-0 mb-10 md:mb-0">
            <div className="flex flex-col space-y-2 text-center">
              <h5 className="font-semibold text-black">Mobile app</h5>
              <a
                href="#"
                className="text-gray-600 hover:underline"
              >
                Features
              </a>
              <a
                href="#"
                className="text-gray-600 hover:underline"
              >
                Live share
              </a>
              <a
                href="#"
                className="text-gray-600 hover:underline"
              >
                Video record
              </a>
            </div>

            <div className="flex flex-col space-y-2 text-center">
              <h5 className="font-semibold text-black">Community</h5>
              <a
                href="#"
                className="text-gray-600 hover:underline"
              >
                Featured artists
              </a>
              <a
                href="#"
                className="text-gray-600 hover:underline"
              >
                The Portal
              </a>
              <a
                href="#"
                className="text-gray-600 hover:underline"
              >
                Live events
              </a>
            </div>

            <div className="flex flex-col space-y-2 text-center">
              <h5 className="font-semibold text-black">Company</h5>
              <a
                href="#"
                className="text-gray-600 hover:underline"
              >
                About us
              </a>
              <a
                href="#"
                className="text-gray-600 hover:underline"
              >
                Contact us
              </a>
              <a
                href="#"
                className="text-gray-600 hover:underline"
              >
                History
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-6 border-gray-300" />

        {/* Bottom Section */}
        <div className="flex justify-between items-center">
          <p className="text-gray-600">&copy; Photo, Inc. 2024. We love our users!</p>

          
        </div>
      </div>
    </footer>
  );
}
