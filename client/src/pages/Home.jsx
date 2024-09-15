import React from 'react'
import image  from '../assets/KU_logo.png'
import image2 from '../assets/hero_page.png'
import image3 from '../assets/events_image.jpg'
import image4 from '../assets/blog.jpg'
import { FaChevronCircleRight } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/* hero section */}
      <div className="overflow-hidden min-h-[550px] sm:min-h-[650px] flex justify-center items-center text-black bg-no-repeat bg-center bg-contain" style={{backgroundImage: `url(${image2})`}}>
        {/* background shapes */}
        <div className="h-[500px] w-[500px] rounded-full absolute -top-1/4 -z-10 right-0 bg-yellow-300"></div>
        <div className="h-[300px] w-[300px] rounded-full absolute -right-1/4 -z-10 left-0 bg-yellow-200"></div>
        <div className="h-[100px] w-[100px] rounded-full absolute top-1/4 -z-10 right-0 bg-yellow-200"></div>

        {/* hero container */}
        <div className="container pb-2 sm:pb-0">
         <div className="flex flex-col items-center">
          <div className='flex flex-col gap-2 shadow-lg shadow-yellow-500 p-8 rounded-3xl w-3/4 relative'>
            <div className=''>
               <img src={image} alt="" className='rounded-full w-20 h-20'/>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-lg text-black font-thin font-mono'>
                  Association Of Civil Engineering Students - Kenyatta University
                </p>
                <h1 className='text-black font-extrabold text-3xl font-mono'>
                  BRIDGING ACADEMIA AND INDUSTRY
                </h1>
            </div>
          </div>

          <div className='flex flex-col gap-2 shadow-lg shadow-yellow-500 p-8 rounded-3xl w-3/4 relative'>
            <div className='flex flex-col items-center'>
            <h1 className='text-black font-extrabold text-xl font-mono'>
                  Welcome to ACES-KU
                </h1>
              
                <p className='text-lg text-black font-thin font-mono'>
                  We are not just a group of engineers; we are a community; an association driven by curiosity, creativity and collaboration. 
                  Join us on this exciting journey that goes beyond the classroom:
                  Where knowledge meets hands-on experience
                </p>
            </div>
          </div>
         </div>
        </div>
      </div>

      {/* M,A & V section */}
      <div className='flex flex-col p-4'>
      {/* // transactions stat cards */}
        <div className='flex flex-col md:flex-row gap-4 w-full'>
          <BoxWrapper>
          <div className='flex flex-col'>
            <h1 className=''><span className='font-bold'>ABOUT</span> <span className='text-yellow-500 font-bold'>US</span> </h1>
            <span className=''>
            Association of Civil Engineering Students - Kenyatta University (ACES-KU), was  founded in 2022 as an association for civil engineering students in Kenyatta University. 
            ACES-KU has its doors open to all aspiring civil engineering fraternity eager to learn, collaborate, and make a difference.
            </span>
          </div>
          </BoxWrapper>
          <BoxWrapper>
          <div className='flex flex-col'>
            <h1 className=''> <span className='text-yellow-500 font-bold'>OUR</span> <span className='font-bold'>MISSION</span></h1>
            <span className=''>
            The mission of ACES-KU is to build and bridge gaps between Academia and Industry thereby fostering professional development of our members in various fundamental aspects such as education, engineering, leadership and business.
            </span>
          </div>
          </BoxWrapper>
          <BoxWrapper>
          <div className='flex flex-col'>
            <h1 className=''> <span className='text-yellow-500 font-bold'>OUR</span> <span className='font-bold'>VALUES</span></h1>
            <span className=''>
            The mission of ACES-KU is to build and bridge gaps between Academia and Industry thereby fostering professional development of our members in various fundamental aspects such as education, engineering, leadership and business.
            </span>
          </div>
          </BoxWrapper>
        </div>
      </div>

      {/* events section */}
       <div className='min-h-[550px] max-w-[1240px] mx-auto flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-center">
            {/* image section  */}
            <div data-aos="zoom-in">
                <img src={image3} alt="" className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-2xl'/>
            </div>

            {/* text details  */}
            <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                <h1 className='text-3xl sm:text-4xl font-bold'>
                    <span className=' text-yellow-500'>ACES-KU</span> Upcoming Events 
                </h1>
                <p className=' text-sm text-gray-500 tracking-wide leading-5'>
                    something about the sale offer
                </p>
                <div data-aos="fade-up" className=' flex items-center gap-2'>
                    <p className=' text-gray-600'>we are a secure platform to deal with</p>
                </div>
                <div data-aos="fade-up" className=' flex items-center gap-2'>
                    <p className=' text-gray-600'>we are a secure platform to deal with</p>
                </div>
                <div data-aos="fade-up" className=' flex items-center gap-2'>
                    <p className=' text-gray-600'>we are a secure platform to deal with</p>
                </div>
            </div>
        </div>
      </div>
    </div>

    {/* Blog section */}
    <div className='min-h-[550px] max-w-[1240px] mx-auto flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center justify-center">
            {/* text details  */}
            <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                <h1 className='text-3 sm:text-3 font-bold'>
                  Tell Us Your story
                </h1>
                <p className=' text-sm text-gray-500 tracking-wide leading-5'>
                Below are all the links to our Blogs/Articles, 
                Magazines and Newsletters
                </p>
                <div data-aos="fade-up" className=' flex items-center gap-2'>
                    <p className=' text-gray-600'>Blog on Engineering <FaChevronCircleRight /></p>
                </div>
                <div data-aos="fade-up" className=' flex items-center gap-2'>
                    <p className=' text-gray-600'>Blog on Engineering <FaChevronCircleRight /></p>
                </div>
                <div data-aos="fade-up" className='gap-2'>
                    <p className=' text-gray-600'>Blog on Engineering <FaChevronCircleRight /></p>
                </div>
            </div>

            {/* image section  */}
            <div data-aos="zoom-in">
                <img src={image4} alt="" className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-2xl'/>
            </div>
        </div>
      </div>
    </div>

    </div>
  )
}

function BoxWrapper({children}) {
  return <div className='bg-white flex items-center gap-4 flex-1 rounded-md shadow-lg shadow-yellow-500 border-b-2 border-gray-300 py-2 px-2'>{children}</div>
}


