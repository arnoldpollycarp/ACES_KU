import { useState, useEffect, React}  from 'react'
import image1  from '../assets/ACES_KU_BG.png'
import image2  from '../assets/event_image_ex.jpg'
import Slider from 'react-slick'
import ReactPaginate from 'react-paginate'

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

   // slider funtion 
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true
    };

    // previous events list 
    const prevEventsList = [
        {
            id: 1,
            title: "Event 1",
            venue: "Venue 1",
            owner: "Posted by 1",
            date: "22/12/2024",
            time: "2:00 PM",
            Desc: "Event disc.",
            image: image2
        },
        {
            id: 2,
            title: "Event 2",
            venue: "Venue 2",
            owner: "Posted by 2",
            date: "22/12/2024",
            time: "2:00 PM",
            Desc: "Event disc.",
            image: image2
        },
        {
            id: 3,
            title: "Event 3",
            venue: "Venue 3",
            owner: "Posted by 3",
            date: "22/12/2024",
            time: "2:00 PM",
            Desc: "Event disc.",
            image: image2
        },
        {
            id: 4,
            title: "Event 4",
            venue: "Venue 4",
            owner: "Posted by 4",
            date: "22/12/2024",
            time: "2:00 PM",
            Desc: "Event disc.",
            image: image2
        },
        {
            id: 5,
            title: "Event 5",
            venue: "Venue 5",
            owner: "Posted by 5",
            date: "22/12/2024",
            time: "2:00 PM",
            Desc: "Event disc.",
            image: image2
        },
        {
            id: 6,
            title: "Event 6",
            venue: "Venue 6",
            owner: "Posted by 6",
            date: "22/12/2024",
            time: "2:00 PM",
            Desc: "Event disc.",
            image: image2
        },
        {
            id: 7,
            title: "Event 7",
            venue: "Venue 7",
            owner: "Posted by 7",
            date: "22/12/2024",
            time: "2:00 PM",
            Desc: "Event disc.",
            image: image2
        },
        {
            id: 8,
            title: "Event 8",
            venue: "Venue 8",
            owner: "Posted by 8",
            date: "22/12/2024",
            time: "2:00 PM",
            Desc: "Event disc.",
            image: image2
        },
        {
            id: 9,
            title: "Event 9",
            venue: "Venue 9",
            owner: "Posted by 9",
            date: "22/12/2024",
            time: "2:00 PM",
            Desc: "Event disc.",
            image: image2
        },
        {
            id: 10,
            title: "Event 10",
            venue: "Venue 10",
            owner: "Posted by 10",
            date: "22/12/2024",
            time: "2:00 PM",
            Desc: "Event disc.",
            image: image2
        },
        
    ]

    // pagination function 
    // const []

    const handlePageClick = (data) => {
        console.log(data.selected)
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
                    <span><a href='' className='p-2 bg-yellow-500 rounded-md text-sm'>Register For Event</a></span>
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
                    <span><a href='' className='p-2 bg-yellow-500 rounded-md text-sm'>Register For Event</a></span>
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
                    <span><a href='' className='p-2 bg-yellow-500 rounded-md text-sm'>Register For Event</a></span>
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
                    <span><a href='' className='p-2 bg-yellow-500 rounded-md text-sm'>Register For Event</a></span>
                </div>
            </div>
        </BoxWrapper>
      </div>

      {/* Upcoming Events body section  */}
      <div className='text-center mt-10'>
        <h1 className='text-3xl sm:text-4xl font-bold underline'>
            <span className=' text-yellow-500'>ACES-KU</span> Previous Events 
        </h1>
      </div>

    {/* upcoming events list  */}
    <div className='pt-4'>
        {
            prevEventsList.map((item, i) => 
                <Boxwrapper_2 key={i}>
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image2} alt="" />
                
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.Desc}</p>
                    </div>
                </Boxwrapper_2>
            )
        }
        <ReactPaginate
        breakLabel={"..."}
        nextLabel={"Next"}
        previousLabel={"Previous"}
        pageCount={15}
        marginPagesDisplayed={3}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName='list-style-none flex justify-center'
        pageClassName=''
        pageLinkClassName='relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-yellow-200 focus:bg-yellow-100 focus:text-primary-700 focus:outline-none focus:ring-0 active:bg-neutral-100 active:text-primary-700'
        previousLinkClassName='relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-yellow-200 focus:bg-yellow-100 focus:text-primary-700 focus:outline-none focus:ring-0 active:bg-neutral-100 active:text-primary-700'
        nextLinkClassName='relative block rounded-full bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-yellow-200 focus:bg-yellow-100 focus:text-primary-700 focus:outline-none focus:ring-0 active:bg-neutral-100 active:text-primary-700'
        breakClassName='relative block rounded-md bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-yellow-200 focus:bg-yellow-100 focus:text-primary-700 focus:outline-none focus:ring-0 active:bg-neutral-100 active:text-primary-700'
    />
        
        {/* <Slider {...settings}>
        {
            prevEventsList.map((item, i) => 
                <Boxwrapper_2 key={i}>
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={image2} alt="" />
            
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">{item.title}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.Desc}</p>
                    <span><a href='' className='p-2 bg-yellow-500 rounded-md text-sm'>View Details</a></span>
                </div>
            </Boxwrapper_2>
        )}
        </Slider> */}

    </div>
</div>
    
  )
}

function BoxWrapper({children}) {
    return <div className='bg-white gap-4 rounded-md shadow-lg shadow-yellow-500 border-b-2 border-gray-300 py-2 px-2'>{children}</div>
}

function Boxwrapper_2({children}) {
    return <div className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-yellow-500 md:flex-row md:max-w-xl hover:bg-gray-100'>{children}</div>
}
