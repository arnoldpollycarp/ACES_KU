import React from 'react'
import image3  from '../assets/KU_LOGO_2.png'
import image2  from '../assets/gavel.jpg'
import image1  from '../assets/ACES_KU_BG.png'
import Slider from 'react-slick'
import constitution from '../assets/ACES_FINAL_CONSTITUTION_2_Nov_2022.pdf'

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


      // leadership list 
const leadershipData = [
  {
      id: 1,
      role: "President",
      name: "F.Name L.Name",
      text: "I was impressed by the timely deliver or",
      image: image3
  },
  {
      id: 2,
      role: "Organizing Secretary",
      name: "F.Name L.Name",
      text: "I was impressed by the timely deliver or",
      image: image3
  },
  {
      id: 3,
      role: "Deputy Organizing Sec.",
      name: "F.Name L.Name",
      text: "I was impressed by the timely deliver or", 
      image: image3
  },
  {
      id: 4,
      role:"Secretary General",
      name: "F.Name L.Name",
      text: "I was impressed by the timely deliver or", 
      image: image3
  }
]

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
            To collect, disseminate and share information relating to Civil Engineering, all the while ensuring efficient interactions among members and with professionals in the relevant field, in order to provide adequate opportunities for networking and capacity building.
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
                <a href={constitution} className='bg-yellow-500 w-28 p-1 rounded-md font-semibold text-sm'>Read More &#8811;</a>
            </div>

             {/* image section  */}
             <div data-aos="zoom-in">
                <img src={image2} alt="" className='max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-2xl'/>
            </div>
        </div>
      </div>
    </div>

         {/* leadership board section  */}
         <div className="container pt-10 pb-2 sm:pb-0 text-center">
       <h1 className='font-bold text-2xl underline italic'><span>Leadership</span> <span className='text-yellow-500'>Board</span></h1>
      <Slider {...settings}>
        {
          leadershipData.map((item) =>
            <div className='my-2'>
              <div key={item.id} className='flex flex-col gap-2 shadow-lg shadow-yellow-500 py-8 px-6 mx-4 rounded-md bg-white relative'>
              <div className=''>
                <img src={item.image} alt="" className='rounded-full w-20 h-20'/>
              </div>
              <div className='flex flex-col items-center'>
                <p className='text-sm text-gray-600 font-mono'>{item.text}</p>
                <h1 className='font-semibold text-black'>{item.name}</h1>
                <span className='font-thin text-gray-900 '>{item.role}</span>
              </div>
              <p className='absolute top-0 right-0 text-5xl font-serif text-gray-500'>
                 ”
              </p>
              </div>
            </div>
          )
        }
      </Slider>
     </div>
      
    </div>
  )
}

function BoxWrapper({children}) {
    return <div className='bg-white flex items-center gap-4 flex-1 rounded-md shadow-lg shadow-yellow-500 border-b-2 border-gray-300 py-2 px-2'>{children}</div>
  }
