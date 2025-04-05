import React from 'react'

const Button = ({children, id, rightIcon, leftIcon, className, onClick}) => {
  return (
    <button id={id} className={`group relative text-center z-10 w-fit cursor-pointer overflow-hidden  ${className ? className : 'rounded-full px-7 py-3 text-black'}`} onClick={onClick}>
        {leftIcon}
        <span className='relative inline-flex overflow-hidden'>
          {children}
        </span>
        {rightIcon}
    </button>
  )
}

export default Button