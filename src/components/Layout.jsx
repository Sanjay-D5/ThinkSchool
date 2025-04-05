import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main className='relative bg-black'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default Layout