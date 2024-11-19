import React, { useEffect, useContext, Fragment } from 'react'
import logo from '/src/assets/KU_logo.png'
import { useState } from 'react'
import {HiMenu, HiChevronDown} from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import { Popover, Transition } from '@headlessui/react'

export default function Navbar() {
  const { user } = useContext(UserContext)
  // active menu control
  const { pathname } = useLocation();
  // nav bar menu list
  const menuList = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About Us",
      path: "/about"
    },
    {
      name: "Partners",
      path: "/leadership"
    },
    {
      name: "Events",
      path: "/events"
    },
    {
      name: "Library",
      path: "/library"
    },
    {
      name: "Contact Us",
      path: "/contactus"
    }
  ]

  // small screen toggle menu control
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }
  
    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 0){
          setIsSticky(true);
        }
      };
  
      window.addEventListener("scroll", handleScroll)
    }, [])

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-10">
      <nav className={`py-1 md:px-8 px-4 bg-yellow-400 ${isSticky ? "sticky top-0 right-0 left-0 bg-gold" : ""}`}>
        <div className='flex item-center justify-between'>
         <div className="font-bold text-lg cursor-pointer text-black">
           <Link to="/" className='flex flex-row'>
            <img src={logo} alt="logo" className='h-[60px] w-[60px] mt-0.1 rounded-full shadow-xl' /> 
           </Link>
         </div>

          {/*for large devices*/}
          <div className='lg:flex itme-center gap-3 hidden text-stone-600'>
            {
              menuList.map((item, l) => (
                <Link to={item.path} className={`block hover:text-gray-400 py-2 px-4 ${pathname === item.path ? "text-black font-bold" : ""}`} key={l}>{item.name}</Link>
              ))
            }

          </div>

          {/* login btn */}

            <div className='lg:flex hidden'>
             { user ? (

<Popover className="relative">
{({ open }) => (
  <>
  <Popover.Button
    className={`
      ${open ? 'text-white' : 'text-white/90'}
      group inline-flex items-center rounded-md bg-yellow-400 px-3 py-2 text-base font-medium hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
  >
<span>First Name</span>
    <HiChevronDown
      className={`${open ? 'text-white' : 'text-white'}
        ml-2 h-5 w-5 transition duration-150 ease-in-out group-hover:text-white`}
      aria-hidden="true"
    />

    </Popover.Button>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-[150px] max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-2xl">
      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
        <div className="relative grid gap-8 bg-white p-5 lg:grid-cols-2">
          <Link to='/profile' className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50">Profile</Link>
        </div>
      </div>
      </Popover.Panel> 
    </Transition>
      </>
    )}
    </Popover>
            ) : (
              <a href='https://docs.google.com/forms/d/1WAgBdUDnlyjH-5dGFuPYpMDKG0D2U2oscax93-4US1Q/edit' className='border border-black p-1 h-8 rounded-md'>Register</a>
              // <Link to='/login'><button className='h-8 px-5 text-black transition-colors duration-150 border border-black rounded-lg focus:shadow-outline hover:bg-black hover:text-indigo-100'>Login</button></Link>
            )

             } 
            </div>
            {/* menu for small devices */}
            <button onClick={toggleMenu} className='lg:hidden text-indigo-600 text-3xl mt-1'>
              <HiMenu />
            </button>
          </div>
          {/* nav items for small devices */}
          {isMenuOpen && (
            <div className="mt-4 bg-indigo-500 rounded-md text-white transition duration-500 ease-in-out">
              <a href="/" className="block hover:text-gray-400 py-2 px-4">Home</a>
            </div>
          )}
        
      </nav>
    </header>
  )
}
