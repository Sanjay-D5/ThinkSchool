import React from 'react'
import Button from '../Button'

const CourseHero = () => {
  return (
    <div className='relative min-h-screen w-full px-4 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-r from-blue-400 to-blue-950 flex flex-col md:flex-row items-center justify-center py-16 md:py-0 gap-8 md:gap-12 text-white overflow-hidden'>
      <div className='w-full md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6 z-10 text-center md:text-left'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'>Learn What College Didn’t Teach You</h1>
        <p className='text-base sm:text-lg md:text-xl text-gray-100'>Just Hands-on skills that directly fuel your career growth and confidence.</p>
        <div className='pt-2'>
          <Button className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 text-black focus:ring-2 focus:ring-yellow-800 hover:shadow-xl transition duration-200 font-semibold w-full sm:w-auto">
            Start Learning
          </Button>
        </div>
      </div>
      <div className='w-full md:w-1/2 flex justify-center z-10 mt-8 md:mt-0'>
        <img 
          src="/iconscs.webp" 
          alt="Course illustration" 
          className='max-w-full h-auto max-h-80 md:max-h-none object-contain'
        />
      </div>
      <div className='absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-0'/>
    </div>
  )
}

export default CourseHero