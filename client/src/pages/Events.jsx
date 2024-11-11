import React from 'react'
import image1  from '../assets/ACES_KU_BG.png'

export default function Events() {
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
    <div className='p-20'>
      {/* Title section  */}
      <div className='bg-white' style={BannerImg}>
       <div className=''>
        <div className='flex justify-center p-11'>
            <h1 className=' text-right text-2xl sm:text-left sm:text-2xl font-extrabold underline italic'>
            Events
            </h1>
        </div>
       </div>
      </div>
      {/* Events body section  */}
      <div className='text-center mt-10'>
        <h1 className='text-3xl sm:text-4xl font-bold underline'>
            <span className=' text-yellow-500'>ACES-KU</span> Upcoming Events 
        </h1>
      </div>
      {/* events list section  */}
      <div className='grid grid-cols-4 md:flex-row gap-4 p-4'>
        <BoxWrapper>
            <div className='flex flex-col'>
                <h1 className='font-normal text-gray-500 text-2xl'>Event Title</h1>
                {/* event details  */}
                <div className='flex flex-col gap-2 pt-1 text-sm'>
                    <span className='font-thin'>Posted By: F.Name L.Name</span>
                    <span className='font-thin'>Date and Time: 25/12/24 (6:00 PM)</span>
                    <span className='font-thin'>Venue: Place Name</span>
                    <span className='font-thin'>Description: Association of Civil Engineering Students - Kenyatta University (ACES-KU), was  founded in 2022 as an association for civil engineering students in Kenyatta University. 
                    ACES-KU has its doors open to all aspiring civil engineering fraternity eager to learn, collaborate, and make a difference.</span>
                </div>
            </div>
        </BoxWrapper>

        <BoxWrapper>
        <div className='flex flex-col'>
                <h1 className='font-normal text-gray-500 text-2xl'>Event Title</h1>
                {/* event details  */}
                <div className='flex flex-col gap-2 pt-1 text-sm'>
                    <span className='font-thin'>Posted By: F.Name L.Name</span>
                    <span className='font-thin'>Date and Time: 25/12/24 (6:00 PM)</span>
                    <span className='font-thin'>Venue: Place Name</span>
                    <span className='font-thin'>Description: Association of Civil Engineering Students - Kenyatta University (ACES-KU), was  founded in 2022 as an association for civil engineering students in Kenyatta University. 
                    ACES-KU has its doors open to all aspiring civil engineering fraternity eager to learn, collaborate, and make a difference.</span>
                </div>
            </div>
        </BoxWrapper>

        <BoxWrapper>
        <div className='flex flex-col'>
                <h1 className='font-normal text-gray-500 text-2xl'>Event Title</h1>
                {/* event details  */}
                <div className='flex flex-col gap-2 pt-1 text-sm'>
                    <span className='font-thin'>Posted By: F.Name L.Name</span>
                    <span className='font-thin'>Date and Time: 25/12/24 (6:00 PM)</span>
                    <span className='font-thin'>Venue: Place Name</span>
                    <span className='font-thin'>Description: Association of Civil Engineering Students - Kenyatta University (ACES-KU), was  founded in 2022 as an association for civil engineering students in Kenyatta University. 
                    ACES-KU has its doors open to all aspiring civil engineering fraternity eager to learn, collaborate, and make a difference.</span>
                </div>
            </div>
        </BoxWrapper>

        <BoxWrapper>
        <div className='flex flex-col'>
                <h1 className='font-normal text-gray-500 text-2xl'>Event Title</h1>
                {/* event details  */}
                <div className='flex flex-col gap-2 pt-1 text-sm'>
                    <span className='font-thin'>Posted By: F.Name L.Name</span>
                    <span className='font-thin'>Date and Time: 25/12/24 (6:00 PM)</span>
                    <span className='font-thin'>Venue: Place Name</span>
                    <span className='font-thin'>Description: Association of Civil Engineering Students - Kenyatta University (ACES-KU), was  founded in 2022 as an association for civil engineering students in Kenyatta University. 
                    ACES-KU has its doors open to all aspiring civil engineering fraternity eager to learn, collaborate, and make a difference.</span>
                </div>
            </div>
        </BoxWrapper>
      </div>
    </div>
    
  )
}

function BoxWrapper({children}) {
    return <div className='bg-white gap-4 rounded-md shadow-lg shadow-yellow-500 border-b-2 border-gray-300 py-2 px-2'>{children}</div>
}
