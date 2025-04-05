import React from 'react'
import { BentoGridDemo } from '../Grid'

const TrustedBy = () => {
  return (
    <div className='px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-12 max-w-7xl mx-auto'>
        <div className='p-4 sm:p-6 md:p-9 bg-gray-900/30 rounded-xl'>
            <div className='flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-12 px-4 sm:px-8 md:px-12 lg:px-16'>
                <div className='text-white space-y-4 sm:space-y-6 md:space-y-7 text-center md:text-left'>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight'><span className='italic'>34,000+ Students</span> have already transformed their lives</h2>

                    <div className='flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-14 text-base sm:text-lg'>
                    <div className='flex flex-col items-center md:items-start'>
                        <div className='text-3xl sm:text-4xl md:text-5xl font-semibold'>4.9/5</div>
                            <span>Average Rating</span>
                            </div>
                            
                            <div className='flex flex-col items-center md:items-start'>
                            <div className='text-3xl sm:text-4xl md:text-5xl font-semibold'>86%</div>
                            <span>Completion Rate</span>
                        </div>
                    </div>
                </div>
                <div className='max-w-xs sm:max-w-sm md:max-w-md'>
                    <img 
                    src="/Frame-5199.webp" 
                    alt="Student success visual" 
                    className='w-full h-auto object-contain'
                    />
                </div>
            </div>
        </div>
        <div className='mt-8 sm:mt-10 md:mt-16'>
            <BentoGridDemo />
        </div>
    </div>
  )
}

export default TrustedBy