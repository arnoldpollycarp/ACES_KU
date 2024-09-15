import React from 'react'
import image3  from '../assets/KU_LOGO_2.png'
import image2  from '../assets/gavel.jpg'
import image1  from '../assets/ACES_KU_BG.png'

export default function About() {
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


  return (
    <div className=' p-20'>
    {/* Title section  */}
    <div className='bg-white' style={BannerImg}>
        <div className=''>
        <div className='flex justify-center p-11'>
            <h1 className=' text-right text-2xl sm:text-left sm:text-2xl font-extrabold underline italic'>
            About Us
            </h1>
        </div>
        </div>
        </div>

        {/* text details  */}
        <div className='flex flex-col p-4'>
            <div className='flex flex-col justify-center items-center gap-6 sm:pt-0'>
                <h1 className='text-2xl sm:text-2xl font-bold underline'>
                Bridging Academia and Industry : <span className=' text-yellow-500'>Uniting Knowledge and Expertise</span>
                </h1>
                <p className=' text-xl text-black tracking-wide leading-5'>
                We facilitate valuable connections, enabling knowledge exchange and  
                creating a dynamic network that accelerates innovation, integration into the 
                real world engineering and drives meaningful impact for aspiring 
                engineers in a rapidly evolving landscape.
                </p>
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

 {/* History section */}
 <div className='min-h-[550px] max-w-[1240px] mx-auto flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center justify-center">
            {/* text details  */}
            <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                <h1 className='text-2xl sm:text-2xl font-bold'>
                     Our <span className=' text-yellow-500'>HISTORY</span>
                </h1>
                <p className=' text-sm text-gray-500 tracking-wide leading-5'>
                    History paragraph
                </p>
            </div>

             {/* image section  */}
             <div data-aos="zoom-in">
                <img src={image3} alt="" className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-2xl'/>
            </div>
        </div>
      </div>
    </div>

    {/* Constitution section */}
 <div className='min-h-[550px] max-w-[1240px] mx-auto flex justify-center items-center py-12 sm:py-0'>
      <div className='container'>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center justify-center">
            {/* text details  */}
            <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                <h1 className='text-2xl sm:text-2xl font-bold'>
                     Our <span className=' text-yellow-500'>Constitution</span>
                </h1>
                <p className=' text-xl text-black font-bold tracking-wide leading-5'>
                “Adapt yourself to the customs of 
                the people among whom you have
                to live.” 
                We urge you to adhere to our
                fundamental principles as 
                stipulated in our constitution."
                </p>
            </div>

             {/* image section  */}
             <div data-aos="zoom-in">
                <img src={image2} alt="" className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-2xl'/>
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
