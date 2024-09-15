import React from 'react'
import image1  from '../assets/ACES_KU_BG.png'
import image2  from '../assets/const.png'
import image3  from '../assets/calenda.png'
import image4  from '../assets/hand.png'
import image5  from '../assets/merch.png'
import image6  from '../assets/mentorship.png'
import image7  from '../assets/site.png'
import image8  from '../assets/even.png'
import image9  from '../assets/network.png'

export default function Benefits() {
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

const benefitsImages = [
    {
        name: "Constitution",
        image: image2
    },
    {
        name: "Events",
        image: image3
    },
    {
        name: "Leadership",
        image: image4
    },
    {
        name: "Merchandise",
        image: image5
    },
]
  return (
    <div className='p-20 gap-3'>
        {/* Title section  */}
        <div className='bg-white' style={BannerImg}>
          <div className=''>
            <div className='flex justify-center p-11'>
                <h1 className=' text-right text-2xl sm:text-left sm:text-2xl font-extrabold underline italic'>
                    Benifits
                </h1>
            </div>
         </div>
        </div>

        {/* m, s, e, n  */}
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

        {/* Resources section  */}
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
            </ul> 
            
           </div>
        </div>


        {/* become a member section  */}
        <div className='flex flex-col gap-2 shadow-lg shadow-yellow-500 p-8 rounded-3xl w-full relative'>
            <div className='flex flex-col items-center'>
            <h1 className='text-black font-extrabold text-xl font-mono underline italic'>
                 Become a Member 
            </h1>
              <div className='flex flex-col items-center gap-4'>
                <p className='text-lg text-black font-thin font-mono'>
                Join ACES KU family and unlock a world of opportunities!
                Become a member today to connect with fellow engineers, participate 
                in exciting events, and embark on unforgettable experiences.
                
                </p>
                <span className='font-bold'>
                    Don`t miss out out - Sign up now and let us elevate our journey together.
                </span> 
              </div>
            </div>
        </div>


        {/* C, E, L, M  */}
        <div className='grid grid-cols-4 mt-4 shadow-lg bg-yellow-400 shadow-yellow-100 p-8 rounded-md w-full relative'>
            {
             benefitsImages.map((item) => (
                <div className="flex flex-col items-center">
                {/* image section */}
                <img class="rounded w-36 h-36" src={item.image} alt="Extra large avatar" />
                {/* name section  */}
                <p className='text-white font-bold'>{item.name}</p>
              </div>
             ))
              
            }
            
            
        </div>

    </div>
  )
}
