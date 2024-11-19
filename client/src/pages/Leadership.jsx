import React from 'react'
import image1  from '../assets/ACES_KU_BG.png'
import image2  from '../assets/avatar.png'
import acer  from '../assets/Acer_Logo.png'

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
        name: "ACER",
        image: acer
    },
    {
        name: "Partner 2",
        image: image2
    },
    {
        name: "Partner 3",
        image: image2
    },
    {
        name: "Partner 4",
        image: image2
    },
    {
        name: "Partner 5",
        image: image2
    },
    {
        name: "Partner 6",
        image: image2
    }
]
  return (
    <div className=' p-20'>
    {/* title section */}
      <div className='bg-white' style={BannerImg}>
        <div className=''>
        <div className='flex justify-center p-11'>
            <h1 className=' text-right text-2xl sm:text-left sm:text-2xl font-extrabold underline italic'>
            <h1 className='text-2xl underline italic'> <span className='text-yellow-500 font-bold'>ACES-KU</span> <span className='font-bold'>PARTNERS</span></h1>
            </h1>
        </div>
      </div>
    </div>

    {/* founders section  */}
     <div className='flex flex-col p-4'>
     {
        foundersList.map((item) =>
            <div className='flex flex-1 gap-4 mb-2'>
        {/* image div  */}
        <img src={item.image} alt="" className=' rounded-md' />
        {/* text div  */}
        <div>
        <h1 className='text-2xl underline italic'><span className='font-bold'>{item.name}</span></h1>
          <span className=''>
          Association of Civil Engineering Students - Kenyatta University (ACES-KU), was  founded in 2022 as an association for civil engineering students in Kenyatta University. 
          ACES-KU has its doors open to all aspiring civil engineering fraternity eager to learn, collaborate, and make a difference.
          </span>
        </div>
        </div>
        )
     }             
     </div>      
    </div>
  )
}
