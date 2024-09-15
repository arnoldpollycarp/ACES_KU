import React from 'react'
import image1  from '../assets/ACES_KU_BG.png'

export default function ProfileTitle() {
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
    <div className='bg-white p-14' style={BannerImg}>
        <div className=''>
            <div className='flex justify-center p-11'>
                <h1 className=' text-right text-2xl sm:text-left sm:text-2xl font-extrabold underline italic'>
                Profile
                </h1>
            </div>
        </div>
    </div>
  )
}
