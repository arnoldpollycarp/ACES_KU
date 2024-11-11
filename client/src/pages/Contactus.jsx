import React from 'react'
import image1  from '../assets/ACES_KU_BG.png'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaPhone,
    FaRegEnvelope,
    FaTiktok,
    FaLinkedin
  } from "react-icons/fa";

export default function Contactus() {
     // Title section image styling 
  const BannerImg = {
    backgroundImage: `url(${image1})`,
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundAttachment: "fixed",
    height: "100%",
    width: "100%"
}

const items = [
  { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/aces_ku?t=MIZRH8Ulb2YcxwxbXbRd7Q&s=09" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/invites/contact/?i=fazvzru58r1y&utm_content=q0u7463" },
  { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/aces-ku-244b44256" },
  { name: "TikTok", icon: FaTiktok, link: "https://www.tiktok.com/@aces_ku?_t=8XJYcEXL2ec&_r=1" }
  ];
  return (
    <div className='p-20'>
      {/* title section  */}
      <div className='bg-white' style={BannerImg}>
        <div className=''>
        <div className='flex justify-center p-11'>
            <h1 className=' text-right text-2xl sm:text-left sm:text-2xl font-extrabold underline italic'>
            Contact Us
            </h1>
        </div>
      </div>
    </div>

    {/* card section  */}
    <div className="container pb-2 sm:pb-0">
        <div className="flex flex-col items-center">
          <div className='grid grid-cols-2 gap-8 shadow-lg shadow-yellow-500 p-8 rounded-3xl w-3/4 relative'>
            {/* form section  */}
            <div className=''>
                <p className='font-bold'>Need Help?</p>
                <form action="#">
                  <div className='flex flex-col items-center gap-4 border-gray-400 '>
                  <input class="appearance-none bg-transparent border-b w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Full Name" aria-label="Full name" />
                  <input class="appearance-none bg-transparent border-b w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" placeholder="Email" aria-label="Full name" />
                  <input class="appearance-none bg-transparent border-b w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Phone Number" aria-label="Full name" />
                  <textarea name="" id="" placeholder='message' className='appearance-none bg-transparent border-b w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'></textarea>
                  <button className='w-full rounded-md bg-yellow-400 text-gray-400'>Submit</button>
                  </div>
                </form>
                
            </div>
            {/* contact details section  */}
            <div className=''>
              <p className='font-bold'>Contact Us</p>
              <div className="flex flex-col gap-3 pt-4">
               <div className=''>
               <ul>
               <li className="py-1 gap-2 flex flex-row text-black hover:text-black">
                 <FaRegEnvelope /> Email: aceskenyattauniversity@gmail.com
                </li>

                <li className="py-1 gap-2 flex flex-row text-black hover:text-black">
                 <FaPhone /> Phone: 07xxxxxxxxx
                </li>
               
               </ul> 
               </div> 
              
               <div className='flex flex-row gap-2'>
               {items.map((x, index) => {
                    return <x.icon key={index} className="hover:text-gray-400" />;
                })}
               </div>
                
            </div>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}
