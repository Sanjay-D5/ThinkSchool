import React from 'react'
import { blueprint } from '../../constents'
import BigCard from '../BigCard'

const Blueprint = () => {
  return (
    <div className='px-4 sm:px-5 md:px-7 py-6 sm:py-8 md:py-10 max-w-7xl mx-auto'>
      <BigCard {...blueprint} />
    </div>
  )
}

export default Blueprint