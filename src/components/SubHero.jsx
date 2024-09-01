import React from 'react';

export default function SubHero() {
  return (
    <div className="container mx-auto grid grid-rows-2 grid-flow-col h-[90vh]  bg-white">
      <div className=" flex md:ml-[144px] items-center justify-center text-center md:text-left md:justify-start">
        <h1 className="text-black text-[24px] md:text-[48px]  font-light">Learn about all the features <br /> of the Photo app</h1>
      </div>
      <div className="bg-subhero-pattern bg-cover"></div>
    </div>
  );
}

