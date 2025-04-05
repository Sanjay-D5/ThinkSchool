import React from 'react'
import Button from '../Button'

const NewsLetter = () => {
  return (
    <div className='py-8 px-4 sm:py-12 lg:py-16 sm:px-6 lg:px-8 max-w-6xl mx-auto'>
        <div className='bg-gray-800/90 rounded-lg shadow-lg py-8 sm:py-10 lg:py-12 text-white'>
            <div className='flex flex-col items-center max-w-3xl mx-auto px-4 sm:px-6 lg:px-8'>
                <h2 
                    className='text-2xl sm:text-3xl md:text-4xl font-semibold text-center '>Subscribe to <span className='italic'>our newsletter</span>
                </h2>
                <p className='text-gray-200 text-xs sm:text-sm md:text-base text-center mt-3 mb-6'>Be the first to know about exclusive insights, updates, and resources.</p>
                <div className='w-full mt-2 sm:mt-4'>
                    <form action="" className='flex flex-col space-y-3 sm:space-y-4 md:space-y-0 md:flex-row md:gap-3 w-full'>
                        <div className='flex flex-col sm:flex-row w-full gap-3 sm:gap-4'>
                            <input 
                            type="text"
                            className='flex-1 bg-white px-4 sm:px-5 py-2 rounded-full text-gray-950 font-medium text-sm sm:text-base w-full' 
                            placeholder='Name'
                            />
                            <input 
                            type="email"
                            className='flex-1 bg-white px-4 sm:px-5 py-2 rounded-full text-gray-950 font-medium text-sm sm:text-base w-full' 
                            placeholder='Email'
                            />
                        </div>
                        <Button className="px-8 sm:px-10 md:px-12 py-2 text-sm sm:text-base rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 text-black focus:ring-2 focus:ring-yellow-800 hover:shadow-xl transition duration-200 font-semibold md:whitespace-nowrap">
                            Sign Up
                        </Button>
                    </form>
                    
                </div>
                <p className='text-gray-200 font-medium text-xs sm:text-sm md:text-base text-center mt-4 sm:mt-6'>No spam, only relevant content to help you get ahead.</p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter