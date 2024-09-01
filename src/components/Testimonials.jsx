import React from 'react';
import testi from '../assets/testimonial.png';
import freepik from '../assets/freepik.png';
import pexels from '../assets/pexels.png';
import pinterest from '../assets/pinterest.png';
import ps from '../assets/ps.png';
import unsplash from '../assets/unsplash.png';
import ig from '../assets/instagram.png';

export default function Testimonials() {
  return (
    <div className="container mx-auto grid grid-cols-2 grid-flow-col h-[90vh] w-[100vw] bg-white p-5 gap-5 md:gap-20 border-box">
      <div className="flex flex-col  place-self-center ">
        <h1 className="text-[16px]  sm:text-[21px] md:text-[42px] font-bold">You’re in good company</h1>
        <p className="text-[12px] md:text-[30px] mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
        <div className="media flex flex-row md:flex-col w-full">
          <div className="flex flex-col md:flex-row p-2 md:p-5 justify-around w-full">
            <img
              src={ig}
              className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
              alt=""
            />
            <img
              src={freepik}
              className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
              alt=""
            />
            <img
              src={unsplash}
              className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
              alt=""
            />
          </div>
          <div className="flex flex-col md:flex-row p-2 md:p-5 justify-around w-full">
            <img
              src={pexels}
              className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
              alt=""
            />
            <img
              src={pinterest}
              className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
              alt=""
            />
            <img
              src={ps}
              className="w-[30px] h-[30px] md:w-[60px] md:h-[60px]"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="card place-self-center border-2 p-5">
          <img
            src={testi}
            alt=""
          />
          <h1 className="text-[12px] md:text-[24px] font-bold p-3 border-box">Sed ut perspiciatis unde omnis</h1>
          <p className="text-[9px] md:text-[18px] p-3">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
}
