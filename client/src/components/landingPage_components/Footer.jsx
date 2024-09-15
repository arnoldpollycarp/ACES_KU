import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaPhone,
    FaRegEnvelope
  } from "react-icons/fa";

export default function Footer() {
    const sections = [
        {
          title: "Home",
          items: ["About Us", "Our Mission", "Our Values", "Events", "Shop"],
        },
        {
          title: "About",
          items: ["Leadership", "Benefits", "Gallery", "Merchandise", "Constitution"],
        },
        {
          title: "Library",
          items: ["Blog", "Article", "Magazine", "Newsletter"],
        },
        {
          title: "Partners",
          items: ["Name", "Name", "Name", "Name", "Name"],
        },
      ];

      const items = [
        { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
        { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
        { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/" }
      ];

  return (
    <div>
      <div className="w-full mt-10 bg-yellow-400 text-black py-0">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-black py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2">{section.title}</h6>
            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1 text-black hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">Contact Us</p>
          <ul>
            <li className="py-1 text-black hover:text-black">
            <FaRegEnvelope /> Email: aceskenyattauniversity@gmail.com
            </li>
            <li className="py-1 text-black hover:text-black">
            <FaPhone /> Phone: 07xxxxxxxxx
            </li>
         </ul>
          
        </div>
      </div>

      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-black">
        <p className="py-4">2022 Workflow, LLC. All rights reserved</p>
        <div className="flex gap-3 sm:w-[300px] pt-4 text-2xl">
          {items.map((x, index) => {
            return <x.icon key={index} className="hover:text-white" />;
          })}
        </div>
      </div>
    </div>
    </div>
  )
}
