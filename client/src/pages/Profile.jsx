import {React, useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import image2  from '../assets/site.png'
import ProfileSideNav from '../components/ProfileSideNav'
import avatar from '../assets/avatar.png'
import events_image from '../assets/events_images.jpeg'
import ProfileTitle from '../components/ProfileTitle'

export default function Profile() {
  const {user} = useContext(UserContext)

  return (
    <div className='m-5'>
      {/* title section  */}
      <ProfileTitle />
      <div className='flex flex-row'>
        <ProfileSideNav />
        <div className='m-5'>
        
        {/* user welcome section  */}
        <div
        class="relative grid w-full flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div
          class="absolute m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-opacity-30 backdrop-blur-sm bg-cover bg-clip-border bg-center text-gray-700 shadow-none" style={{backgroundImage: `url(${image2})`}}>
          <div class="absolute w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50 "></div>
        </div>
        <div class="relative p-6 px-6 py-14 md:px-12">
          <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
          Welcome
          To
          ACES-KU

          We
          Are
          Here
          For
          You,
          </h2>
          <h5 class="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
            Engineer
          </h5>
          <img alt="Tania Andrew"
            src={avatar}
            class="relative inline-block h-[74px] w-[74px] !rounded-full border-2 border-white object-cover object-center" />
        </div>
      </div>  

      {/* Upcomeing events section  */}
      <div
        class="relative grid w-full flex-col items-end justify-center overflow-hidden m-3 rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div
          class="absolute m-0 h-full w-full overflow-hidden rounded-none bg-transparent backdrop-opacity-10 bg-cover bg-clip-border bg-center text-gray-700 shadow-none" style={{backgroundImage: `url(${events_image})`}}>
          <div class="absolute w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50 "></div>
        </div>
        <div class="relative p-6 px-6 py-14 md:px-12 backdrop-opacity-10">
          <h2 class="mb-6 block font-sans text-4xl font-bold leading-[1.5] tracking-normal text-black underline antialiased">
          Upcoming Events
          </h2>
          <button class="block mb-4 hover:bg-slate-100 p-2 rounded-md hover:text-black font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
            View Full Club Calendar
          </button>
        </div>
      </div>            
        </div>
    </div>

    </div>
  )
}
