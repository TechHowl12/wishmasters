import React from 'react';
import FaceBook from "../assets/Facebook.png";
import Insta from "../assets/Instagram.png";
import X from "../assets/Twitter.png";
import BasketBall from "../assets/Basketball.png";
import Github from "../assets/Github.png";

export const Footer = () => {
  return (
    <div className='bg-[#1D2123] text-white mx-auto'>
         <div className='flex w-full md:w-5/12 mx-auto pt-20 justify-center'>
            <h1 className='md:border-r text-xs md:text-sm border-white px-2 md:px-3'>About</h1>
            <h1 className='md:border-r text-xs md:text-sm border-white px-2 md:px-3'>Past Winners</h1>
            <h1 className='md:border-r text-xs md:text-sm border-white px-2 md:px-3'>FAQs</h1>
            <h1 className='md:border-r text-xs md:text-sm border-white px-2 md:px-3'>Contests</h1>
            <h1 className='md:border-r text-xs md:text-sm border-white px-2 md:px-3'>Contact us</h1>
         </div>
         <div className='flex justify-center space-x-7 mt-7 pb-20 mx-auto w-5/12'>
             <img src={FaceBook} alt='social-icons'/>
             <img src={Insta} alt='social-icons'/>
             <img src={X} alt='social-icons'/>
             <img src={BasketBall} alt='social-icons'/>
             <img src={Github} alt='social-icons'/>
         </div>
         <div className='border-t text-sm md:text-lg border-[#E1E1E1] py-6'><p className='text-center text-slate-100'>© 2024 Wishmasters Gaming Technologies, Inc. All rights reserved.</p></div>
    </div>
  )
}
