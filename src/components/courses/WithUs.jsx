import React from 'react'
import { students, withUs } from '../../constents'

const WithUs = () => {
  return (
    <div className='px-4 sm:px-5 py-6 sm:py-8 space-y-10 sm:space-y-14'>
        <div>
            <h2 className='text-center font-semibold text-2xl sm:text-3xl md:text-4xl text-white'>Why Learn With Us?</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6'>
               {withUs.map((withu) => (
                    <div key={withu.id} className='bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors duration-300'>
                        <div className='p-5 sm:p-7 md:p-9'>
                           <img src={withu.img} alt={withu.title} height={60} width={60} className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16'/>
                           <h1 className='text-white text-base sm:text-lg mt-3 sm:mt-4 font-medium'>{withu.title}</h1>
                           <p className='text-xs sm:text-sm text-gray-300 mt-3 sm:mt-5'>{withu.desc}</p>
                        </div>
                    </div>
                ))} 
            </div>
        </div>
        <div>
            <h2 className='text-center font-semibold text-2xl md:text-4xl mx-auto text-white'>What Makes our courses a <span className='italic'>must-have for students</span></h2>
            <div className='px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 mt-6'>
                {students.map((student, index) => (
                    <div 
                    key={index}
                    className='flex flex-col sm:flex-row items-center sm:items-start md:items-center bg-gray-800/30 p-4 rounded-lg'>
                        <img src={student.img} alt={student.title} height={30} width={30} className="w-14 h-14 sm:w-16 sm:h-18 md:w-10 md:h-10 object-contain"/>
                        <h4 className='text-white text-lg sm:text-xl mt-3 sm:mt-0 sm:ml-4 md:ml-6 font-semibold text-center sm:text-left'>{student.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default WithUs