import React from 'react';

export default function Body() {
  return (
    <div className="container mx-auto grid grid-rows-3 grid-flow-col   bg-white">
      <div className="flex items-center justify-center text-center pt-20  md:text-left md:justify-start md:pl-5">
        <h1 className="text-black text-[24px] md:text-[48px]  font-light">
          Snap photos and share <br />
          like never before
        </h1>
      </div>

      <div className="grid grid-cols-2 grid-flow-row gap-20 px-5 border-box">
        <div className="place-self-center">
          <h5 className="font-bold py-3 text-[18px] md:text-[24px]">Sed ut perspiciatis</h5>
          <p className="text-[12px] md:text-[18px]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
        </div>
        <div className="place-self-center">
          <h5 className="font-bold py-3 text-[18px] md:text-[24px]">Lorem ipsum dolor</h5>
          <p className="text-[12px] md:text-[18px]">Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
        </div>
      </div>
      <div className="grid grid-cols-2 grid-flow-row gap-20 px-5 border-box">
        <div className="place-self-center">
          <h5 className="font-bold py-3 text-[18px] md:text-[24px]">Nemo enim ipsam</h5>
          <p className="text-[12px] md:text-[18px]">
            Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam..
          </p>
        </div>
        <div className="place-self-center">
          <h5 className="font-bold py-3 text-[18px] md:text-[24px]">Tempor incididunt</h5>
          <p className="text-[12px] md:text-[18px]">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
        </div>
      </div>
    </div>
  );
}
