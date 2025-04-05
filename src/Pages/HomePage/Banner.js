import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import Banner1 from "../../assets/Banner1.png";
import Banner2 from "../../assets/Banner2.png";
import Banner3 from "../../assets/Banner3.png";
import MobileBanner1 from "../../assets/Banner1mobile.png";
import MobileBanner2 from "../../assets/Banner2mobile.png";
import MobileBanner3 from "../../assets/Banner3mobile.png";
import Audit from "../../assets/Audit.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const Banner = () => {
  const [isMobile, setIsMobile] = useState(false);

  const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-black/50 p-2 rounded-full"
        onClick={onClick}
      >
       {"<"}
      </div>
    );
  };
  
  const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer text-white bg-black/50 p-2 rounded-full"
        onClick={onClick}
      >
       {">"}
      </div>
    );
  };

  useEffect(() => {
    // Detect screen width to set mobile state
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial state based on screen size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <CustomNextArrow/>,  // Custom next arrow
    prevArrow: <CustomPrevArrow/>  // Custom prev arrow
  };

  return (
    <>
      <Slider {...settings} className='w-full overflow-hidden'>
        <div className='flex justify-center items-center'>
          <img className='w-screen' src={isMobile ? MobileBanner1 : Banner1} alt="Banner 1" />
        </div>
        <div className='flex justify-center items-center'>
          <img className='w-screen' src={isMobile ? MobileBanner2 : Banner2} alt="Banner 2" />
        </div>
        <div className='flex justify-center items-center'>
          <img className='w-screen' src={isMobile ? MobileBanner3 : Banner3} alt="Banner 3" />
        </div>
      </Slider>
      <img src={Audit} className='mx-0 md:mx-auto px-4 md:px-0 py-3 md:py-7'/>
    </>
  );
}
