import React from 'react'
import img1 from "../images/footer/img1.png"; // Use the correct extension
import img2 from "../images/footer/img2.png"; // Use the correct extension


const Footer = () => {
  return (
    <div>
        <div className='flex bg-[#FAFBFC] pt-[20px]'>
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
                <p className='mb-[40px]'>USEFUL LINKS</p>
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
                <p className='mb-[40px]'>CUSTOMER POLICIES</p>
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
                    <div className='flex w-[100%]'>
                        <img className='w-[45%] h-[50px] pr-[10px]'src={img1}></img>
                        <img className='w-[45%] h-[50px] pr-[10px]'src={img2}></img>
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