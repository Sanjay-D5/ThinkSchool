import React from 'react'
import Cards from '../Cards'
import { featured } from '../../constents'

const Featured = () => {
  return (
    <section className='py-16 md:py-20 lg:py-28'>
      <div className='container mx-auto px-4 md:px-6 flex flex-col items-center text-white overflow-hidden'>
        <h1 className='font-semibold text-3xl sm:text-4xl mb-3'>Featured Case Studies</h1>
        <p className='max-w-2xl text-center mb-8 text-sm sm:text-base'>Uncover the complex strategies of the business world through real-world stories made easy to understand</p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
          {featured.map((feature, index) => (
            <Cards key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Featured