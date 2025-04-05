import React from 'react';
import Slider from 'react-slick';
import ComingSoonOverlay from './ComingSoon';
import Contest1 from "../assets/Contest-1.png";

export const ContestCarousel = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
  return (
    <div className='mb-10 w-10/12 mx-auto'>
        <h1 className="my-10 text-center text-2xl font-medium">
          Upcoming <span className="text-[#00603A]">Contests</span>
        </h1>
       <Slider {...settings}>
       <div>
            <ComingSoonOverlay>
              <img src={Contest1} alt="contest-prize-1" />
              <p className="text-slate-600 text-xs mx-7 my-4">
                Description about the contest There are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered{" "}
              </p>
            </ComingSoonOverlay>
          </div>
       <div>
            <ComingSoonOverlay>
              <img src={Contest1} alt="contest-prize-1" />
              <p className="text-slate-600 text-xs mx-7 my-4">
                Description about the contest There are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered{" "}
              </p>
            </ComingSoonOverlay>
          </div>
       <div>
            <ComingSoonOverlay>
              <img src={Contest1} alt="contest-prize-1" />
              <p className="text-slate-600 text-xs mx-7 my-4">
                Description about the contest There are many variations of
                passages of Lorem Ipsum available, but the majority have
                suffered{" "}
              </p>
            </ComingSoonOverlay>
          </div>
       </Slider>
    </div>
  )
}
