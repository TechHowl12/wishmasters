import React from "react";
import Contest1 from "../assets/Contest1.png";
import Contest2 from "../assets/Contest2.png";
import Contest3 from "../assets/Contest3.png";
import ComingSoonOverlay from "./ComingSoon";

export const Contests = () => {
  return (
    <>
      <div className="bg-white">
        <h1 className="mt-12 text-center text-4xl font-medium">
          Upcoming <span className="text-[#00603A]">Contests</span>
        </h1>
        <div className="grid grid-cols-3 sm:w-11/12 md:w-9/12 gap-x-7 mx-auto my-10">
          <div className="shadow-xl">
            <ComingSoonOverlay>
              <img src={Contest1} alt="contest-prize-1" />
              <p className="text-slate-600 text-xs mx-7 my-4">
                Description about the contest There are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered{" "}
              </p>
            </ComingSoonOverlay>
          </div>
          <div className="shadow-xl">
            <ComingSoonOverlay>
              <img src={Contest2} alt="contest-prize-2" />
              <p className="text-slate-600 text-xs mx-7 my-4">
                Description about the contest There are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered{" "}
              </p>
            </ComingSoonOverlay>
          </div>
          <div className="shadow-xl">
            <ComingSoonOverlay>
              <img src={Contest3} alt="contest-prize-3" />
              <p className="text-slate-600 text-xs mx-7 my-4">
                Description about the contest There are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered{" "}
              </p>
            </ComingSoonOverlay>
          </div>
        </div>
      </div>
      <div className="how-it-works py-14 text-center text-white">
        <h1 className="text-4xl">Gear Up for Victory</h1>
        <h3 className="text-2xl sm:text-xl mt-3 mb-5">
          Join our ongoing Contest & Win Your Dream Prize!
        </h3>
        <button onClick={()=>alert("COMING SOON")} className="bg-white text-[#00603A] uppercase px-8 py-2 hover:scale-110 transition-all">
          view ongoing contest
        </button>
      </div>
    </>
  );
};
