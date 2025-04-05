import React from 'react'
import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const Footer = () => {
  return (
    <div className='px-4 py-10 flex flex-col items-center justify-center space-y-5 border-t border-gray-600'>
      <div className='text-white flex justify-center gap-6 flex-wrap text-sm md:text-base text-center'>
        <span>Privacy Policy</span>
        <span>Refund Policy</span>
        <span>Terms of Use</span>
        <span>Shipping & Delivery Policy</span>
        <span>Support</span>
        <span>Contact us</span>
      </div>  
      <div className='flex gap-3 mt-4 mb-4'>
        <div className='p-2 md:p-4 rounded-full bg-white cursor-pointer'><IoMdMail /></div>
        <div className='p-2 md:p-4 rounded-full bg-white cursor-pointer'><FaYoutube /></div>
        <div className='p-2 md:p-4 rounded-full bg-white cursor-pointer'><FaInstagram /></div>
        <div className='p-2 md:p-4 rounded-full bg-white cursor-pointer'><FaLinkedinIn /></div>
        <div className='p-2 md:p-4 rounded-full bg-white cursor-pointer'><FaTwitter /></div>
        <div className='p-2 md:p-4 rounded-full bg-white cursor-pointer'><FaFacebookSquare /></div>
      </div>
      <p className='text-white text-sm md:text-base text-center mt-3'>Copyright © Think School Private Limited  All rights reserved</p>
      <h3 className='text-white font-semibold uppercase text-xl md:text-2xl'>Think School</h3>
    </div>
  )
}

export default Footer