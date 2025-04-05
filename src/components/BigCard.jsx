import React from 'react'
import Button from './Button'

const BigCard = ({tag, title, duration, access, desc, img, button}) => {
  return (
    <div className='px-3 sm:px-4 md:px-5 py-4 sm:py-5 md:py-7'>
      <div className='bg-gray-900 border border-gray-800 rounded-lg overflow-hidden'>
        <div className='p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col md:flex-row md:justify-between md:items-center gap-6 md:gap-8 lg:gap-12'>
          {/* Content Section */}
          <div className='text-white space-y-3 sm:space-y-4 md:space-y-5 order-2 md:order-1 md:flex-1'>
            {/* Tag */}
            <div>
              <span className='inline-block px-3 sm:px-4 py-1 text-xs sm:text-sm uppercase rounded-2xl bg-gradient-to-r from-gray-800 to-gray-700'>
                {tag}
              </span>
            </div>
            
            {/* Title */}
            <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>
              {title}
            </h2>
            
            {/* Course Details */}
            <div className='text-gray-400 text-sm sm:text-base flex flex-wrap gap-4'>
              <span>{duration}</span>
              <span>{access}</span>
            </div>
            
            {/* Description */}
            <p className='text-gray-300 text-sm sm:text-base'>
              {desc}
            </p>
            
            {/* Button */}
            <div className='pt-2'>
              <Button className="px-4 sm:px-6 md:px-8 py-2 text-sm sm:text-base rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 text-black focus:ring-2 focus:ring-yellow-800 hover:shadow-xl transition duration-200 font-semibold w-full sm:w-auto">
                {button}
              </Button>
            </div>
          </div>
          
          {/* Image Section */}
          <div className='md:w-2/5 lg:w-1/3 order-1 md:order-2'>
            <img 
              src={img} 
              alt={title} 
              className='w-full h-auto rounded-lg shadow-lg object-cover' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BigCard