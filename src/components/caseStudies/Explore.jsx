import React from 'react'
import Cards from '../Cards'
import { caseStudie } from '../../constents'

const Explore = () => {
  return (
    <section className='py-12 md:py-20 lg:py-28'>
      <div className='container mx-auto px-4 md:px-6 flex flex-col items-center text-white overflow-hidden'>
        <h1 className='font-semibold text-2xl sm:text-3xl md:text-4xl mb-3'>Explore Case Studies</h1>
        <p className='max-w-2xl text-center mb-8 text-sm sm:text-base'>Explore the world of business and geopolitics with our easy-to-digest case studies added every week.</p>
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full'>
          {caseStudie.map((study, index) => (
            <Cards key={index} {...study} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Explore