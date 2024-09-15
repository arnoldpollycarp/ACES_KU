import React from 'react'
import image1  from '../assets/ACES_KU_BG.png'
import image2  from '../assets/avatar.png'

export default function Leadership() {
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

// founders list
const foundersList = [
    {
        name: "Name 1",
        image: image2
    },
    {
        name: "Name 2",
        image: image2
    },
    {
        name: "Name 1",
        image: image2
    },
    {
        name: "Name 1",
        image: image2
    },
    {
        name: "Name 1",
        image: image2
    },
    {
        name: "Name 1",
        image: image2
    }
]

// Leadership team list 
const leadersList = [
    {
        name: "name 1",
        position: "President",
        image: image2
    },
    {
        name: "name 2",
        position: "Organizing Secretary",
        image: image2
    },
    {
        name: "name 3",
        position: "Deputy Organizing Secretary",
        image: image2
    },
    {
        name: "name 4",
        position: "Secretary General",
        image: image2
    },
    
]
  return (
    <div className=' p-20'>
    {/* title section */}
      <div className='bg-white' style={BannerImg}>
        <div className=''>
        <div className='flex justify-center p-11'>
            <h1 className=' text-right text-2xl sm:text-left sm:text-2xl font-extrabold underline italic'>
            Leadership
            </h1>
        </div>
      </div>
    </div>

    {/* founders section  */}
    <div className='flex flex-col p-4'>
            <div className='flex flex-col justify-center items-center gap-6 sm:pt-0'>
                <h1 className='text-2xl sm:text-2xl font-bold underline'>
                Founders
                </h1>
                <div className="grid grid-cols-5 gap-2">
                    {
                        foundersList.map((item) => (
                            <div className="flex flex-col items-center">
                                {/* image section */}
                                <img classname="rounded w-36 h-36" src={item.image} alt="Extra large avatar" />
                                {/* name section  */}
                                <p className='text-gray-400 font-bold'>{item.name}</p>
                            </div>
                        ))
                    }
                   
                </div>
            </div>
        </div>

        {/* leadership team section  */}
        <div className='flex flex-col p-4'>
            <div className='flex flex-col justify-center items-center gap-6 sm:pt-0'>
                {/* title section  */}
                <h1 className='text-2xl sm:text-2xl font-extrabold underline'>
                Leadership Team
                </h1>
                <p className='underline'>2023-2024</p>
                {/* image and name section  */}
                {
                    leadersList.map((item) => (
                        <div className=''>
                             <h1 className='text-2xl sm:text-2xl text-center text-gray-400 font-bold underline'>
                                {item.position}
                             </h1>
                             <div className='flex justify-center'>
                                 <img classname="rounded w-36 h-36" src={item.image} alt="Extra large avatar" />
                             </div>
                             <p className='font-bold text-center'>{item.name}</p>
                        </div>
                       
                    ))
                }
            </div>
        </div>

      
    </div>
  )
}
