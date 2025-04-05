import React from "react";
import Animals from "../../assets/Animals.png";
import Tag from "../../assets/Purpose.png";
import Impact from "../../assets/Impact.png";

export const Purpose = () => {
  return (
    <>
    <div className="how-it-works text-white hidden sm:block md:block">
      <div className="grid grid-cols-2 w-9/12 sm:w-11/12 mx-auto py-14 space-x-4 items-center">
        <img src={Animals} className="w-full" alt="animals" />
        <div>
          <h1 className="text-4xl">Play with Purpose</h1>
          <p className="my-7 sm:text-sm md:text-lg">
            Founded by avid gamers with a passion for making a difference, we're
            not just about high scores – we're about giving back to causes that
            matter. As you embark on your gaming adventures with us,{" "}
            <span className="font-semibold">
              know that 2% of our profit goes towards supporting animal welfare
              through THE FELINE FOUNDATION.
            </span>
            Every virtual victory contributes to real-world impact for our furry
            friends.
          </p>
          <img src={Tag} className="w-7/12" alt="wishmasters-tag"/>
        </div>
      </div>
    </div>
    <img src={Impact} className="w-full block sm:hidden md:hidden"/>
    </>
  );
};
