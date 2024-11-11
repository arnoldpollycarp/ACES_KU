import React from 'react'
import image  from '../assets/KU_logo.png'
import image2 from '../assets/hero_page.png'
import { FaChevronCircleRight } from "react-icons/fa";
import image6  from '../assets/mentorship.png'
import image7  from '../assets/site.png'
import image8  from '../assets/even.png'
import image9  from '../assets/network.png'

export default function Home() {

  const benefitsMenu = [
    {
        name: "Mentorship",
        details: "Exclusive access to our mentorship program, where seasoned engineering professionals and alumni offer support,guidance, wisdom, and knowledge to help younavigate your career journey.",
        image: image6
    },
    {
        name: "Site Visits",
        details: "Join us as we explore the vast engineering marvels and delve into the fascinating realms of technology,design, and ingenuity.",
        image: image7
    },
    {
        name: "Events",
        details: "We host events and talks where top speakers who present both technical and informative programs on fundamental topics paramount to an aspiring engineer.",
        image: image8
    },
    {
        name: "Networking",
        details: "We are here for you, Engineer. Whether you are looking to expand your network, opportunities abound, or simply connect with like-minded professionals,ACES-KU provides the ideal environment to grow and thrive in your career journey.",
        image: image9
    },
]


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
      <div className='p-4'>
        {/* about us section  */}
        <div className='flex flex-1 gap-4 mb-2'>
          {/* image div  */}
          <img src={image7} alt="" className=' rounded-md' />
          {/* text div  */}
          <div>
          <h1 className='text-2xl underline italic'><span className='font-bold'>ABOUT</span> <span className='text-yellow-500 font-bold'>US</span> </h1>
            <span className=''>
            Association of Civil Engineering Students - Kenyatta University (ACES-KU), was  founded in 2022 as an association for civil engineering students in Kenyatta University. 
            ACES-KU has its doors open to all aspiring civil engineering fraternity eager to learn, collaborate, and make a difference.
            </span>
          </div>
        </div>
        {/* Our mission section  */}
        <div className='flex flex-1 gap-4 mb-2'>
          {/* text div  */}
          <div>
          <h1 className='text-2xl underline italic'> <span className='text-yellow-500 font-bold'>OUR</span> <span className='font-bold'>MISSION</span></h1>
            <span className=''>
            To collect, disseminate and share information relating to Civil Engineering, all the while ensuring efficient interactions among members and with professionals in the relevant field, in order to provide adequate opportunities for networking and capacity building.
            </span>
          </div>
          {/* image div  */}
          <img src={image8} alt="" className=' rounded-md' />
        </div>
        {/* Our values section  */}
        <div className='flex flex-1 gap-4'>
          {/* image div  */}
          <img src={image6} alt="" className=' rounded-md' />
          {/* text div  */}
          <div>
          <h1 className='text-2xl underline italic'> <span className='text-yellow-500 font-bold'>OUR</span> <span className='font-bold'>VALUES</span></h1>
            <span className=''>
            The mission of ACES-KU is to build and bridge gaps between Academia and Industry thereby fostering professional development of our members in various fundamental aspects such as education, engineering, leadership and business.
            </span>
          </div>
        </div>
      </div>

      {/* benefits section  */}
       <div className='p-5'>
        <h1 className='text-center font-bold text-2xl underline italic pb-4'>Benefits For Joining <span className='text-yellow-500'>ACES-KU</span></h1>
        <div className='grid grid-cols-4 gap-4'>
              {
                  benefitsMenu.map((item) => (
                      <div class="max-w-sm rounded-lg overflow-hidden shadow-yellow-500 shadow-lg">
                      <div class="font-bold text-center underline italic text-yellow-400 text-xl mb-2">{item.name}</div>
                      <img class="w-full" src={item.image} alt="Sunset in the mountains" />
                      <div class="px-6 py-4">
                          <p class="text-gray-700 text-base">
                              {item.details}
                          </p>
                      </div>
                      </div>
                  ))
              }
          </div>
       </div>

       {/* Resources section  */}
      <div className='p-4'>
        <div className='flex flex-col gap-2 shadow-lg shadow-yellow-500 p-8 rounded-3xl w-full'>
              <div className='flex flex-col'>
              <h1 className='text-black text-center font-extrabold text-xl font-mono underline italic'>
                  Resources
              </h1>
              <ul>
                  <li> <span className='font-bold'>AutoCAD recordings</span> - Recordings of AutoCAD sessions from the diffferent
                  mentoship groups.</li>
                  <li><span className='font-bold'>Recorded Talks</span> - Audio and video recordings of hosted events and shows.</li>
                  <li> <span className='font-bold'>Programming Links</span> - Links to the various programming languages and resources.</li>
                  <li><span className='font-bold'>Lecture Notes & Exams</span> - Links to lecture notes and exam past papers for our esteemed 
                  members.</li>
                  <li><span className='font-bold'>Discord Membership</span> - Join ACES Discord channel. <a href="https://discord.gg/9dHT4Gwgu3" className='bg-yellow-500 p-2 text-sm rounded-md'>Join Discord</a></li>
              </ul> 
              
            </div>
        </div>
      </div>

    </div>
  )
}

function BoxWrapper({children}) {
  return <div className='bg-white flex items-center gap-4 flex-1 rounded-md shadow-lg shadow-yellow-500 border-b-2 border-gray-300 py-2 px-2'>{children}</div>
}


