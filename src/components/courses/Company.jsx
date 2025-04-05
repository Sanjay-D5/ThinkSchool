import React from 'react'
import { motion } from "framer-motion";
import { company } from "../../constents";

const Company = () => {
  return (
    <div className="overflow-hidden bg-black text-white py-8 sm:py-12 md:py-16 px-4">
      <div className='max-w-6xl mx-auto'>
      <h2 className="text-center text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8 md:mb-10">
          Students from <span className="font-semibold">Top Companies</span>
        </h2>
      </div>
      
      <div  className="mb-6 sm:mb-8">
        <motion.div
          className="flex gap-6 sm:gap-8 md:gap-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 60, 
            ease: "linear" 
          }}
          style={{ display: "flex", minWidth: "max-content" }}
        >
          {[...company, ...company].map((item, index) => (
            <div 
              key={index} 
              className="min-w-[80px] sm:min-w-[100px] md:min-w-[120px] p-2 sm:p-3 md:p-4 flex items-center justify-center"
            >
              <img 
                src={item.url} 
                alt={item.id} 
                className="w-auto h-8 sm:h-10 md:h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </div>
          ))}
        </motion.div>
      </div>
      
    
      <div>
        <motion.div
          className="flex gap-6 sm:gap-8 md:gap-10"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ 
            repeat: Infinity, 
            duration: 60, 
            ease: "linear" 
          }}
          style={{ display: "flex", minWidth: "max-content" }}
        >
          {[...company, ...company].map((item, index) => (
            <div 
              key={index} 
              className="min-w-[80px] sm:min-w-[100px] md:min-w-[120px] p-2 sm:p-3 md:p-4 flex items-center justify-center"
            >
              <img 
                src={item.url} 
                alt={item.id} 
                className="w-auto h-8 sm:h-10 md:h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
              />
            </div>
          ))}
        </motion.div>
      </div>
      
    </div>
  )
}

export default Company