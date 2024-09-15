import React from 'react'
import Navbar from '../components/landingPage_components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/landingPage_components/Footer'

export default function Mainlayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
