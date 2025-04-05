import React from 'react'
import { blogs } from '../../constents'

const Blog = () => {
  return (
    <section className='py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
        {blogs.map((blog) => (
          <div key={blog.id}  className='bg-gradient-to-r from-gray-900 to-black rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105'>
            <div className='py-20 px-20 text-white'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center'>{blog.title}</h2>
              <p className='text-gray-400 font-medium text-sm sm:text-base line-clamp-3 sm:line-clamp-4'>{blog.desc}</p>  
            </div>
          </div> 
        ))}
      </div>
    </section>
  )
}

export default Blog