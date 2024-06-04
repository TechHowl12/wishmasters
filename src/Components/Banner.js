import React from 'react';
import Hero from"../assets/Hero.png";
import Audit from "../assets/Audit.png";
import ComingSoonOverlay from './ComingSoon';

export const Banner = () => {
  return (
    <>
    <ComingSoonOverlay>
    <div className='banner h-[51vh] sm:h-[70vh] md:h-[100vh] flex items-center justify-start'>
          {/* <div className='md:w-3/12 ml-[12%]'>
             <img src={Hero} className='w-full block' alt='triumph-tiger'/>
             <div className='flex justify-between items-center w-full mt-4 gap-x-4'>
                <button className='bg-[#00603A] text-white uppercase w-4/12 whitespace-nowrap py-2 hover:scale-110 transition-all'>enter now</button>
                <button className='bg-white text-[#00603A]  uppercase w-8/12 px-auto py-2 hover:scale-110 transition-all'>view ongoing contests</button>
             </div>
          </div> */}
    </div>
    </ComingSoonOverlay>
    <div className='bg-[#EAEAEA] w-full h-auto py-10 px-5 sm:px-10 md:px-0 flex items-center justify-center'>
         <img src={Audit} className='' alt='audit-partners'/>
    </div>
    </>
  )
}
