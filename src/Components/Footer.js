import React from 'react';
import FaceBook from "../assets/Facebook.png";
import Insta from "../assets/Instagram.png";
import X from "../assets/Twitter.png";
import BasketBall from "../assets/linkedin_svgrepo.com.svg";
import { useNavigate } from 'react-router-dom';

export const Footer = () => {

  const navigate = useNavigate();

  return (
    <div className='bg-[#1D2123] text-white mx-auto'>
         <div className='flex w-full flex-wrap mx-auto pt-20 justify-center'>
            {/* <h1 className='md:border-r text-xs md:text-sm border-white px-2 md:px-3'>About</h1>
            <h1 className='md:border-r text-xs md:text-sm border-white px-2 md:px-3'>Past Winners</h1>
            <h1 className='md:border-r text-xs md:text-sm border-white px-2 md:px-3'>FAQs</h1>
            <h1 className='md:border-r text-xs md:text-sm border-white px-2 md:px-3'>Contests</h1>
            <h1 className='md:border-r text-xs md:text-sm border-white px-2 md:px-3'>Contact us</h1> */}
            <div className='mt-4 flex sm:mt-0'>
            <h1 onClick={()=>navigate("terms-conditions")} className='md:border-r text-xs md:text-sm border-white px-2 md:px-3 cursor-pointer'>Terms & Conditions</h1>
            <h1 onClick={()=>navigate("privacy-policy")} className='md:border-r text-xs md:text-sm cursor-pointer border-white px-2 md:px-3'>Privacy Policy</h1>
            <h1 onClick={()=>navigate("refund-policy")} className='text-xs md:text-sm border-white px-2 md:px-3 cursor-pointer'>Refund Policy</h1>
            </div>
         </div>
         <div className='flex justify-center space-x-7 mt-7 pb-20 mx-auto w-9/12 md:w-5/12'>
             <a href='https://www.facebook.com/profile.php?id=61560799394255'><img className='w-10 h-10' src={FaceBook} alt='social-icons'/></a>
             <a href='https://www.instagram.com/wishmastersindia'><img className='w-10 h-10' src={Insta} alt='social-icons'/></a>
             <a href='https://x.com/wishmastersin'><img className='w-10 h-10' src={X} alt='social-icons'/></a>
             <a href='https://www.linkedin.com/company/wishmasters'><img className='w-10 h-10' src={BasketBall} alt='social-icons'/></a>
         </div>
         <div className='border-t text-sm md:text-base border-[#E1E1E1] py-6'><p className='text-center text-slate-100'>© 2024 Wishmasters gaming technologies pvt. Ltd, Inc. All rights reserved.</p></div>
    </div>
  )
}
