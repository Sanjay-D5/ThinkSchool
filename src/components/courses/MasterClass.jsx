import React from 'react'
import BigCard from '../BigCard'
import { masterClass } from '../../constents'

const MasterClass = () => {
  return (
    <div className='px-4 sm:px-5 md:px-7 py-6 sm:py-8 md:py-10 max-w-7xl mx-auto'>
      <BigCard {...masterClass} />
    </div>
  )
}

export default MasterClass