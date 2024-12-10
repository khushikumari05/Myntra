import React from 'react'
import img1 from "../images/categoriesSlider/img1.png";
import img2 from "../images/categoriesSlider/img2.png";
import img3 from "../images/categoriesSlider/img3.png";
import img4 from "../images/categoriesSlider/img4.png";
import img5 from "../images/categoriesSlider/img5.png";
import img6 from "../images/categoriesSlider/img6.png";
import img7 from "../images/categoriesSlider/img7.png";
import img22 from "../images/categoriesSlider/img22.png";
import img23 from "../images/categoriesSlider/img23.png";
import img24 from "../images/categoriesSlider/img24.png";
import img25 from "../images/categoriesSlider/img25.png";
import img26 from "../images/categoriesSlider/img26.png";
import img27 from "../images/categoriesSlider/img27.png";
import img28 from "../images/categoriesSlider/img28.png";
import img29 from "../images/categoriesSlider/img29.png";



const CatgoriesSlider = () => {
  return (
    <div>
      <div className='flex flex-row px-8 md:px-16 lg:px-24'>
        <div>
          <img src = {img1}></img>
        </div>
        <div>
        <img src = {img2}></img>
        </div>
        <div>
        <img src = {img3}></img>

        </div>
        <div>
        <img src = {img4}></img>

        </div>
        <div>
        <img src = {img5}></img>

        </div>
        <div>
        <img src = {img6}></img>

        </div>
        <div>
        <img src = {img7}></img>

        </div>
      </div>

      {/* first time on discount */}
      <div>
        <div className='flex flex-col items-center mb-[20px] mt-[40px]'>
          <div>
            <img src={img22}></img>
          </div>
        </div>
      </div>

      {/* 2nd category */}

      <div className='flex flex-row px-8 md:px-16 lg:px-24'>
        <div>
          <img src = {img23}></img>
        </div>
        <div>
        <img src = {img24}></img>
        </div>
        <div>
        <img src = {img25}></img>

        </div>
        <div>
        <img src = {img26}></img>

        </div>
        <div>
        <img src = {img27}></img>

        </div>
        <div>
        <img src = {img28}></img>

        </div>
        <div>
        <img src = {img29}></img>

        </div>
      </div>

       
    </div>
  )
}

export default CatgoriesSlider


