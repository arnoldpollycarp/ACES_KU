import {React, useState} from 'react'
import { useLocation, Link } from 'react-router-dom';
import avatar from '../assets/avatar.png'
import { FaShoppingBasket, FaBook, FaCalendarCheck, FaUsers, FaPenSquare } from "react-icons/fa";
import { MdOutlineSettings, MdOutlinePowerSettingsNew, MdOutlineHelpOutline, MdKeyboardArrowRight } from "react-icons/md";


export default function ProfileSideNav() {
    // opening and close side menu state 
  const [open, setOpen] = useState(true)
  const { pathname } = useLocation();


  // sidebar menu list 
const menuList = [
    {
      id: 'modal1',
      name: "Library",
      path: "/profLibrary",
      icon: <FaBook className='text-2xl -mt-1'/>
    },
    {
      id: 'modal2',
      name: "Event Sub.",
      path: "/",
      icon: <FaCalendarCheck className='text-2xl -mt-1' />
    },
    {
      id: 'modal3',
      name: "Members",
      path: "/",
      icon: <FaUsers className='text-2xl -mt-1'/>
    },
    {
      id: 'modal4',
      name: "Merchandise",
      path: "/",
      icon: <FaShoppingBasket className='text-2xl -mt-1'/>
    },
    {
      id: 'modal5',
      name: "FAQs",
      path: "/",
      icon: <MdOutlineHelpOutline className='text-2xl -mt-1'/>
    },
    {
      id: 'modal6',
      name: "Blogs",
      path: "/",
      icon: <FaPenSquare className='text-2xl -mt-1'/>,
    }
  ]
  return (
    <div>
      {/* side menu section  */}
      <div className={`bg-gradient-to-t ${open ? "w-60" : "w-20"} duration-500 p-3 from-yellow-600 to-yellow-300 lg:flex flex-col h-full relative`}>
      <div className='flex-1 border-b-2 md:flex-1'>
        {/* Profile details part */}
        <div className='flex flex-row h-[100px] border-b-2'>
            <img src={avatar} alt="logo" className={`h-20 mt-0.1 rounded-full shadow-xl ${!open && "rotate-[360deg]"}`} /> 
            <p className={`text-white font-extrabold pt-6 pl-4 duration-500 ${!open && "hidden"}`}>Profile</p>
        </div>
        <div className='flex flex-col text-white font-bold space-y-4 p-3'>
          {
            menuList.map((item) => (
              <Link to={item.path}
              className={`hover:bg-slate-100 hover:text-gray-400 border-0 rounded-md p-2 flex flex-row gap-2 ${pathname === item.path ? "bg-slate-100 text-gray-400" : ""}`}
            >
               {item.icon}
                <p className={`duration-500 ${!open && "hidden"}`}>{item.name}</p>
              </Link>
            ))
          }
         
         </div>
         
      </div>
      <div className='text-white flex flex-col'>
        <Link to='products' className='hover:bg-slate-100 hover:text-gray-400 border-0 rounded-md p-2 flex flex-row gap-2'><MdOutlineHelpOutline className='text-2xl -mt-1'/> <p className={`duration-500 ${!open && "hidden"}`}>Contact Us</p></Link>
      </div>

      {/* open and close icon  */}
      <MdKeyboardArrowRight className={`absolute cursor-pointer rounded-full text-white border-2 w-10 h-10 p-2 -right-3 top-[90px] bg-yellow-400 ${open && "rotate-180"}`} onClick={() => setOpen(!open)} />
   
      

    </div>
    </div>
  )
}
