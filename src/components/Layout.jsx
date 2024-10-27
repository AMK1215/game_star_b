import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import FooterProviders from './FooterProviders'
import {Toaster} from 'react-hot-toast'
const Layout = () => {
  return (
    <div className='container'>
      <Toaster />
      <Navbar/>
      <Outlet/>
      <FooterProviders/>
      <Footer/>
    </div>
  )
}

export default Layout
