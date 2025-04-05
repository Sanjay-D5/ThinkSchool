import React from 'react'

const Cards = ({id, img, title, desc}) => {
  return (
    <div key={id} className='flex flex-col h-full rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-102 hover:shadow-xl'>
      <div className='relative w-full overflow-hidden'>
        <img src={img} alt="image" className='w-full h-full object-cover'/>
      </div>
        
        <div className='p-4 sm:p-5 bg-gray-900 flex-grow rounded-b-lg'> 
          <h2 className='text-lg sm:text-xl font-semibold line-clamp-2'>{title}</h2>
          <p className='text-xs sm:text-sm text-gray-300 mt-2 sm:mt-3 line-clamp-3'>{desc}</p>
        </div>
    </div>
  )
}

export default Cards