import React from 'react'
import Button from '../Button'

const Card = () => {
  return (
    <div className='px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-16 md:py-20'>
      <div className='bg-gray-900 border border-gray-800 rounded-lg shadow-lg'>
        <div className='p-16 sm:p-10 md:p-16'>
          <div className='text-white max-w-2xl mx-auto space-y-4 sm:space-y-6 md:space-y-7 flex flex-col justify-center items-center'>
            <h2 className='text-2xl sm:text-3xl md:text-4xl mt-2 sm:mt-3 md:mt-5 text-center font-bold'>Say Goodbye to Passive Learning and Save Hundreds of Wasted Hours</h2>
            <p className='text-gray-300 text-sm sm:text-base  text-center'>At Think School, you learn practical skills you can immediately apply. You’ll practice, grow, and improve—so you can start using what you’ve learned today, in 2025, and for the rest of your life!</p>
            <Button className="px-4 sm:px-6 md:px-8 py-2 text-sm sm:text-base md:text-lg rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 text-black focus:ring-2 focus:ring-yellow-800 hover:shadow-xl transition duration-200 font-semibold w-full sm:w-auto">Start Learning Today</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card