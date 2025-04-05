import React, { useEffect, useState } from 'react'
import Button from '../Button'
import { AnimatePresence, motion } from "framer-motion";

const Hero = () => {
  const texts = ["School", "Smart", "Business"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='relative min-h-[100vh] w-full max-w-screen overflow-x-hidden p-2 sm:p-3 md:p-5'>
      <div id='video-frame' className='relative z-10 h-full w-full overflow-hidden rounded-lg bg-blue-75'>
        <div className='relative h-[calc(100vh-16px)] sm:h-[calc(100vh-24px)] md:h-[calc(100vh-40px)]'>
          <video 
            src={'/Showreel-Think-school-1.mp4'}
            autoPlay
            loop
            muted
            playsInline
            className='absolute left-0 top-0 size-full object-cover object-center'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-20'/>
        
          <div className='absolute z-30 flex flex-col justify-center items-center w-full top-1/2 left-1/2 -translate-x-1/2 text-white px-4 sm:px-8 md:px-12'>
            <div>
            <AnimatePresence mode="wait">
              <motion.h1
                key={texts[index]}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center'
              >
                Think <span className="inline-block">{texts[index]}</span>
              </motion.h1>
            </AnimatePresence>
            
            </div>
            <p className='text-center mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg max-w-md md:max-w-xl mx-auto'>Decode World’s Leading Business Strategies, Sharpen Your Thinking, And Learn Anytime, Anywhere.</p>

            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-5 w-full justify-center'>
              <Button className="px-4 sm:px-6 md:px-8 py-1.5 text-sm sm:text-base md:text-lg rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 text-black focus:ring-2 focus:ring-yellow-800 hover:shadow-xl transition duration-200 font-semibold w-full sm:w-auto">Explore Courses</Button>
              <Button className="px-4 sm:px-6 md:px-6 py-1.5 text-sm sm:text-base md:text-lg rounded-full transition duration-200 font-semibold border border-white w-full sm:w-auto mt-2 sm:mt-0">Learn Storytelling</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero