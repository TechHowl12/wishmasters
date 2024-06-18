import React from "react";
import Judge1 from "../assets/Judge1.jpeg";
import Judge2 from "../assets/Judge2.jpeg";
import Judge3 from "../assets/Judge3.jpg";

export const Judge = () => {
  return (
    <div className="py-10 md:py-14">
      <h1 className="text-3xl md:text-4xl text-center">
        Judging <span className="text-[#00603A]">Panel</span>
      </h1>
      <h3 className="text-center text-xs sm:text-sm sm:px-7 md:text-lg text-slate-400 mt-5 mb-10">
        The panel of judges is formed of experienced sports professionals on a
        rotating basis, who each offer their best opinion.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 sm:space-x-0 md:grid-cols-3 md:w-8/12 md:mx-auto gap-y-4 sm:mx-4 sm:gap-4 md:gap-7">
        <div className="relative group">
          <img
            src={Judge1}
            alt="judge-1"
            className="rounded-xl flex mx-auto w-8/12 sm:w-full md:w-full object-cover md:h-96 md:p-0 md:mx-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
            <span className="text-white text-2xl font-bold block">
              Kiran Anja
            </span>
            <span className="text-white text-xs md:text-sm mt-4 block">
              A qualified Board of Control for Cricket in India umpire for 18
              years.
            </span>
            <span className="text-white text-xs md:text-sm mt-2 block">
              A Mumbai Cricket umpire for more than 22 years.
            </span>
            <span className="text-white text-xs md:text-sm mt-2 block">
              A qualified Board of Control for Cricket in India, Curator.{" "}
            </span>
            <span className="text-white text-xs md:text-sm mt-2 block">
              He was with Sachin Tendulkar ground for 6 years and at Sharad
              Pawar BKC ground for one year.{" "}
            </span>
            <span className="text-white text-xs md:text-sm mt-2 block">
              A Committee member on the board of umpires at Mumbai Cricket
              Association for 8 years.
            </span>
          </div>
        </div>
        <div className="relative group">
          <img
            src={Judge2}
            alt="judge-2"
            className="rounded-xl flex mx-auto w-8/12 sm:w-full md:w-full object-cover md:h-96 md:p-0 md:mx-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
            <span className="text-white text-2xl font-bold block">
              Suyog Chaudhary
            </span>
            <span className="text-white text-xs md:text-sm mt-4 block">
              State Panel Umpire of Maharashtra Cricket Association.
            </span>
            <span className="text-white text-xs md:text-sm mt-2 block">
              Anti Curuption Unit officer BCCI for Nine Years.
            </span>
            <span className="text-white text-xs md:text-sm mt-2 block">
              Executive member Raigad Cricket Association.
            </span>
          </div>
        </div>
        <div className="relative group">
          <img
            src={Judge3}
            alt="judge-3"
            className="rounded-xl flex mx-auto w-8/12 sm:w-full md:w-full object-cover md:h-96 md:p-0 md:mx-auto"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl">
            <span className="text-white text-2xl font-bold block">
              Marcus Couto
            </span>
            <span className="text-white text-xs md:text-sm mt-4 block">
              Board of Control for Cricket in India (BCCI) Panel Umpire for 27
              years.
            </span>
            <span className="text-white text-xs md:text-sm mt-2 block">
              Mumbai Cricket Association Gold Medalist umpire for four decades.
            </span>
            <span className="text-white text-xs md:text-sm mt-2 block">
              Have edited, published and written about dozen books.
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={() => alert("COMING SOON")}
        className="bg-[#00603A] text-white px-10 py-2 uppercase mt-5 md:mt-10 mx-auto text-md flex hover:scale-110 transition-transform duration-300"
      >
        View Judging Criteria
      </button>
    </div>
  );
};
