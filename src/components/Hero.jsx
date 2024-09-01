import React from 'react';
import Button from './Button';
Button;

export default function Hero() {
  return (
    <div className=" flex container mx-auto h-[90vh] items-center justify-center text-center bg-hero-pattern bg-cover md:text-left md:justify-start ">
      <div className="md:ml-[144px]">
        <h1 className="text-white text-[28px] md:text-[56px] font-light ">
          The largest community <br /> of photo enthusiasts{' '}
        </h1>
        <Button
        className=''
          text={'Join Today'}
          variant={'btn-white mt-3 text-[14px] px-[38px] py-[8px]'}
        />
      </div>
    </div>
  );
}
