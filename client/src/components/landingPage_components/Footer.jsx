import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaPhone,
    FaRegEnvelope,
    FaTiktok,
    FaLinkedin
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
        { name: "Twitter", icon: FaTwitter, link: "https://twitter.com/aces_ku?t=MIZRH8Ulb2YcxwxbXbRd7Q&s=09" },
        { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/invites/contact/?i=fazvzru58r1y&utm_content=q0u7463" },
        { name: "LinkedIn", icon: FaLinkedin, link: "https://www.linkedin.com/in/aces-ku-244b44256" },
        { name: "TikTok", icon: FaTiktok, link: "https://www.tiktok.com/@aces_ku?_t=8XJYcEXL2ec&_r=1" }
      ];

      // current year 
      const today = new Date();
      const year = today.getFullYear();
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
        <p className="py-4"><span> © {year}</span> ACES-KU. All rights reserved</p>
        <div className="flex gap-3 sm:w-[300px] pt-4 text-2xl">
          {items.map((x, index) => {
            return <a href={x.link}><x.icon key={index} className="hover:text-white" /></a>;
          })}
        </div>
      </div>
    </div>
    </div>
  )
}
