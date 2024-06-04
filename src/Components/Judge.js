import React from 'react';
import Judge1 from "../assets/Judge1.png";
import Judge2 from "../assets/Judge2.png";
import Judge3 from "../assets/Judge3.png";
import Judge4 from "../assets/Judge4.png";

export const Judge = () => {
  return (
    <div className=' py-10 md:py-14'>
        <h1 className='text-3xl md:text-4xl text-center'>Judging <span className='text-[#00603A]'>Panel</span></h1>
        <h3 className='text-center text-xs sm:text-sm sm:px-7 md:text-lg text-slate-400 mt-5 mb-10'>The panel of judges is formed of experienced sports professionals on a rotating basis, who each offer their best opinion.</h3>
        <div className='grid grid-cols-2 sm:grid-cols-4 sm:space-x-0 md:grid-cols-4 md:w-10/12 md:mx-auto md:space-x-5'>
            <img src={Judge1} alt='judge-1' className='rounded-xl p-2 md:p-0 hover:scale-110 transition-all'/>
            <img src={Judge2} alt='judge-1' className='rounded-xl p-2 md:p-0 hover:scale-110 transition-all'/>
            <img src={Judge3} alt='judge-1' className='rounded-xl p-2 md:p-0 hover:scale-110 transition-all'/>
            <img src={Judge4} alt='judge-1' className='rounded-xl p-2 md:p-0 hover:scale-110 transition-all'/>
        </div>
        <button onClick={()=>alert("COMING SOON")} className='bg-[#00603A] text-white px-10 py-2 uppercase mt-5 md:mt-10 mx-auto text-md flex hover:scale-110 transition-all'>view judging criteria</button>
    </div>
  )
}
