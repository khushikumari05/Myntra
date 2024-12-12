import React from 'react'
import img1 from "../images/footer/img1.png"; 
import img2 from "../images/footer/img2.png"; 
import img3 from "../images/footer/img3.png"; 
import img4 from "../images/footer/img4.png"; 
import img5 from "../images/footer/img5.png"; 
import img6 from "../images/footer/img6.png"; 


const Footer = () => {
  return (
    <div>
        <div className='flex bg-[#FAFBFC] pt-[20px] px-8 md:px-16 lg:px-24'>
            <div className='basis-1/6 pl-[10x]'>
               <div>
               <div>
                <p className='mb-[40px]'>ONLINE SHOPPING</p>
                <ul className='mb-[30px]'>
                    <li>
                       Men 
                    </li>
                    <li>
                       Women 
                    </li>
                    <li>
                       Kids 
                    </li>
                    <li>
                       Home & Living 
                    </li>
                    <li>
                       Beauty
                    </li>
                    <li>
                       Gifts Cards
                    </li>
                    <li>
                       Myntra Insider
                    </li>
                </ul>
               </div>
               </div>
               <div>
                <p className='mb-[40px] font-bold'>USEFUL LINKS</p>
                <ul className='mb-[30px]'>
                    <li>
                       Blog 
                    </li>
                    <li>
                       Careers
                    </li>
                    <li>
                       Site Map
                    </li>
                    <li>
                       Corporate Information
                    </li>
                    <li>
                       Whitehat
                    </li>
                    <li>
                       Cleartrip
                    </li>
                </ul>

               </div>
            </div>
            <div className='basis-1/6' >
                <div>
                <p className='mb-[40px] font-bold'>CUSTOMER POLICIES</p>
                <ul className='mb-[30px]'>
                    <li>
                       Contact Us
                    </li>
                    <li>
                       FAQ 
                    </li>
                    <li>
                       T&C 
                    </li>
                    <li>
                       Terms Of Use
                    </li>
                    <li>
                       Track Orders
                    </li>
                    <li>
                       Shipping
                    </li>
                    <li>
                       Cancellation
                    </li>
                    <li>
                       Returns
                    </li>
                    <li>
                       Privacy policy
                    </li>
                    <li>
                       Grievance Officer
                    </li>
                </ul>

                </div>
            </div>
            <div className='basis-1/3'>
                <div>
                    <p className='mb-[40px]'>EXPERIENCE MYNTRA APP ON MOBILE</p>
                    <div className='flex w-[100%] mb-[40px]'>
                        <img className='w-[45%] h-[50px] pr-[10px]'src={img1}></img>
                        <img className='w-[45%] h-[50px] pr-[10px]'src={img2}></img>
                    </div>
                </div>
                <div>
                    <p className='mb-[20px] font-bold'>KEEP IN TOUCH</p>
                    <div className='flex w-[100%] mb-[40px]'>
                        <img className='pr-[10px]'src={img3}></img>
                        <img className='pr-[10px]'src={img4}></img>
                        <img className='pr-[10px]'src={img5}></img>
                        <img className='pr-[10px]'src={img6}></img>


                    </div>
                </div>

            </div>
            <div className='basis-1/3'>
                Part4
            </div>
        </div>
    </div>
  )
}

export default Footer