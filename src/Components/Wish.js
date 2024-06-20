import React from "react";
import Wish1 from "../assets/Wish1.png";
import Wish2 from "../assets/Wish2.png";
import Wish3 from "../assets/Wish3.png";

export const Wish = () => {
  return (
    <div className="bg-[#eaeaea] pt-7 sm:py-20 md:py-20">
        <h1 className="text-center text-4xl sm:mb-14 mb-10">Behind The <span className="text-[#00603A]">Wish</span></h1>
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 w-full sm:w-11/12 sm:space-x-5 md:w-8/12 mx-auto md:space-x-10">
      <div className="bg-transparent px-5 sm:px-0  flex sm:block sm:text-center gap-5 md:block md:text-center md:h-[20rem]">
        <img src={Wish1} className="h-2/3 md:pl-10 order-2" alt="wish-1" />
        <div className="mt-6 md:mt-0">
        <h1 className="text-[#00603A] md:mt-5 mb-3 text-sm sm:text-lg md:text-xl">Limited Odds</h1>
        <p className="text-slate-600 text-xs md:text-sm">A filtered playground where limited entrants heighten success odds for the final contest.</p>
        </div>
      </div>
      <div className="bg-transparent px-5 sm:px-0 flex sm:block sm:text-center gap-5 md:block md:text-center md:h-[20rem]">
        <img src={Wish2} className="h-2/3" alt="wish-2" />
        <div className="mt-6 md:mt-0">
        <h1 className="text-[#00603A] md:mt-5 mb-3 text-sm sm:text-lg md:text-xl">Gift Tax Credited</h1>
        <p className="text-slate-600 text-xs md:text-sm">Win your dream prize. with Wishmasters no extra dime spent on taxes.</p>
        </div>
      </div>
      <div className="bg-transparent px-5 sm:px-0 flex sm:block sm:text-center gap-5 md:block md:text-center md:h-[20rem]">
        <img src={Wish3} className="h-[60%] md:h-2/3 order-2" alt="wish-3" />
        <div className="mt-6 sm:mt-11 md:mt-0">
        <h1 className="text-[#00603A] md:mt-5 mb-3 text-sm sm:text-lg whitespace-nowrap md:text-xl">Clear Judging Process</h1>
        <p className="text-slate-600 text-xs md:text-sm">Live judging, overseen by a law firm and independent audit, streamed on Wishmasters</p>
        </div>       
      </div>
    </div>
    </div>
  );
};
