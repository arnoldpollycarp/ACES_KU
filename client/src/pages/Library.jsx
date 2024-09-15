import React from 'react'
import image1  from '../assets/ACES_KU_BG.png'
import { FaAngleDown, FaSearch } from "react-icons/fa";
import image2  from '../assets/mentorship.png'
import image3  from '../assets/site.png'
import image4  from '../assets/even.png'
import image5  from '../assets/network.png'

export default function Library() {
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
                Library
                </h1>
             </div>
            </div>
        </div>

        {/* search section  */}
        <form className='w-full mx-auto p-4' action="">
            <div className='flex'>
                <button id='dropdown' data-dropdown-toggle='dropdown' className='flex-shrink-0 z-10 gap-2 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100'>
                    All Categories
                    <FaAngleDown />
                </button>
                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
                    </li>
                    <li>
                        <button type="button" class="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
                    </li>
                    </ul>
                </div>

                <div class="relative w-full">
                    <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required />
                    <button type="submit" class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-yellow-400 rounded-e-lg border border-gray-300 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300">
                     <FaSearch />
                        <span class="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>

        {/* image gallery section  */}
        <div className='columns-1 md:columns-2 xl:columns-3 gap-4 bg-black p-2 rounded-md'>
            <div className='break-inside-avoid mb-8'>
                <img src={image2} className='h-auto max-w-full rounded-lg' alt="" />
            </div>
            <div className='break-inside-avoid mb-8'>
              <img src={image3} className='h-auto max-w-full rounded-lg' alt="" />
            </div>
            <div className='break-inside-avoid mb-8'>
             <img src={image4} className='h-auto max-w-full rounded-lg' alt="" />
            </div>
            <div className='break-inside-avoid mb-8'>
              <img src={image5} className='h-auto max-w-full rounded-lg' alt="" />
            </div>
        </div>
    </div>
  )
}
