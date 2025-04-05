import React from 'react'
import Button from '../Button'
import { motion } from "framer-motion";
import { images } from '../../constents';


const Podcast = () => {
  return (
    <div className='px-3 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 relative bg-black'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 text-white mb-12'>
          <div className='w-full md:w-1/2 flex justify-center'>
            <iframe 
              className='w-full aspect-video rounded-xl shadow-lg max-w-xl'
              src="https://www.youtube.com/embed/G7Jyzj1FpnU" 
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>

          <div className='w-full md:w-1/2 flex flex-col gap-4 md:gap-6'>
            <h2 className='font-sans font-semibold text-2xl sm:text-3xl md:text-4xl text-center md:text-left'>Indian Business Podcast</h2>
            <div className='text-center md:text-left'>
              <h3 className='text-sm sm:text-base md:text-lg font-medium mb-2'>Learn from Global Business Leaders</h3>
              <p className='text-gray-400 text-xs sm:text-sm md:text-base'>Get unfiltered insights from industry leaders, walkthrough of business trends, and money strategies straight from the experts.</p>
            </div>

            <div className='w-full flex justify-center md:justify-start mt-2 md:mt-4'>
            <Button className='px-4 sm:px-6 md:px-8 py-3 md:py-1.5 text-sm sm:text-base md:text-lg rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 text-black focus:ring-2 focus:ring-yellow-800 hover:shadow-xl transition duration-200 font-semibold w-full sm:w-auto'>Explore Indian Business Podcast</Button>
            </div>
          </div>
        </div>

        <div className='mt-8 md:mt-12 overflow-hidden'>
          <h3 className='text-white text-lg sm:text-xl md:text-2xl font-medium mb-4 text-center'>
              Featured Guests
            </h3>
          <motion.div
            className="flex gap-4 sm:gap-6"
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            style={{ display: "flex", minWidth: "max-content" }}
          >
            {/* Duplicate testimonials for smooth looping */}
            {[...images, ...images].map((image, index) => (
              <div key={index} className="min-w-[20px] sm:min-w-[40px] md:min-w-[60px] p-2 bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
                <img src={image.url} alt={image.id} className="w-auto h-28 rounded-lg" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Podcast