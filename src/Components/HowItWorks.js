import React from "react";
import HowItWork from "../assets/HowItWorks.png";

export const HowItWorks = () => {
  return (
    <div className="how-it-works h-[100vh] flex justify-center items-center gap-x-10">
        <div className="w-6/12">
          <iframe
            className="w-full aspect-video rounded-2xl"
            src="https://www.youtube.com/embed/NekZK0vXyqc?si=m8SDn-fI_MV0ZKOi"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-3/12">
            <img src={HowItWork} className="w-full"/>
            <button className="bg-transparent text-white w-1/2 py-3 uppercase border border-white mt-7 hover:scale-110 transition-all">know more</button>
        </div>
    </div>
  );
};
