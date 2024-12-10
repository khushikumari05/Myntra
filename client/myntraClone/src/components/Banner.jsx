import React from "react";
import upImage from "../images/upImage.png";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import pic1 from "../images/pic1.png";
import pic2 from "../images/pic2.png";
import pic3 from "../images/pic3.png";
import pic4 from "../images/pic4.png";
import pic5 from "../images/pic5.png";
import pic6 from "../images/pic6.png";
import pic7 from "../images/pic7.png";
import pic8 from "../images/pic8.png";

const Banner = () => {
  return (
    <>
      <div className="h-[20px] bg-gradient-to-b from-[rgb(245,245,245)] "></div>
      <div className="px-8 md:px-16 lg:px-24">
        {/* Banner Section */}
        <div className="bg-red-500 mt-2">
          <img src={upImage} alt="Banner" className="w-full" />
        </div>
      </div>
      

      {/* 3 Image Row */}
      <div className="flex w-full px-8 md:px-16 lg:px-24 ">
        <div className="flex-1">
          <img src={img1} alt="Image 1" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <img src={img2} alt="Image 2" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <img src={img3} alt="Image 3" className="w-full h-full object-cover" />
        </div>
      </div>
      {/* 7 pics in row */}
        <div className="flex w-full justify-between px-8 md:px-16 lg:px-24">
          <div className="flex-1 ">
            <img src={pic1} alt="Image 1" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <img src={pic2} alt="Image 2" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <img src={pic3} alt="Image 3" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <img src={pic4} alt="Image 4" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <img src={pic5} alt="Image 5" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <img src={pic6} alt="Image 6" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <img src={pic7} alt="Image 7" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="px-8 md:px-16 lg:px-24 mb-[20px]">
        {/* Banner Section */}
        <div>
          <img src={pic8} alt="pic8" className="w-full" />
        </div>
      </div>
    </>
  );
};

export default Banner;
