import React, { useState } from 'react'
import Button from '../Button'
import { Carousel } from '../../constents';

const Course = () => {
 const [activeTab, setActiveTab] = useState('courses');

  return (
    <div className='bg-black min-h-screen text-white'>
      <div className='px-4 pt-16 pb-8 md:px-8 lg:px-16 text-center '>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl mb-6 md:mb-12'>
            What Sets Us <span className='font-serif italic'>Apart for You</span>
          </h2>

          {/* Navigation Button */}
          <div className='flex items-center justify-center flex-wrap gap-2 md:gap-4 mb-8 md:mb-16'>
          {[
              { id: 'courses', label: 'Explore Courses' },
              { id: 'caseStudies', label: 'Explore Case Studies' },
              { id: 'youtube', label: 'Visit Youtube Channel' }
            ].map(tab => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)} 
                variant={activeTab === tab.id ? 'active' : 'default'}
                className={`px-3 md:px-7 py-2 text-xs md:text-sm lg:text-base rounded-full transition duration-300 ${
                  activeTab === tab.id ? 'bg-gray-800' : ''
                } hover:bg-gray-800`}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {activeTab && (
          <div className='p-1 border border-gray-500 rounded-lg max-w-5xl mx-auto'>
            <div key={Carousel[activeTab].id} className='p-3 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6'>
            <div className='md:w-1/3 flex justify-center'>
                <img 
                  src={Carousel[activeTab].url} 
                  alt={Carousel[activeTab].title} 
                  className='h-auto w-full max-h-60 object-contain'
                />
              </div>
              <div className='md:w-2/3 p-2 text-left'>
                <h2 className='font-sans italic font-semibold text-xl md:text-2xl mb-2 md:mb-4'>
                  {Carousel[activeTab].title}
                </h2>
                <p className='text-gray-400 text-sm md:text-base'>
                  {Carousel[activeTab].desc}
                </p>
                <Button className='px-3 py-1.5 md:py-2 border border-white text-sm md:text-base rounded-full mt-4 md:mt-6'>
                  {Carousel[activeTab].button}
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>  
    </div>
    
  )
}

export default Course