import React from 'react';
import Address from "../assets/Map.png";
import Location from "../assets/Location.png";
import Phone from "../assets/Phone.png";
import Mail from "../assets/Mail.png";

export const Maps = () => {
  return (
    <div className='py-7 md:py-14'>
        <h1 className='text-4xl text-center mb-10'>Get In <span className='text-[#00603A]'>Touch</span></h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 w-11/12 md:w-8/12 mx-auto md:space-x-10 items-center'>
            <img src={Address} className='rounded-md' alt='location'/>
            <div className='w-11/12 mt-5 md:mt-0 md:w-full mx-auto'>
                <div className='flex mb-6 items-center'>
                    <img src={Location} className='w-10 h-10'/>
                    <p className='inline ml-4 text-slate-700'>315 W 36th St. Bangalore 10018</p>
                </div>
                <div className='flex mb-6 items-center'>
                    <img src={Phone} className='w-10 h-10'/>
                    <p className='inline ml-4 text-slate-700'>79775908692</p>
                </div>
                <div className='flex mb-6 items-center'>
                    <img src={Mail} className='w-10 h-10'/>
                    <p className='inline ml-4 text-slate-700'>afzal@howl.in</p>
                </div>
            </div>
        </div>
    </div>
  )
}
