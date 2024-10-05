import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-full px-10 py-4 flex items-center justify-between'>
        <div className='flex items-center'>
            <Image src={logo} alt={'Build Guild'} className='w-[150px]' />
        </div>
        <div className='flex items-center'>
          <a href='#' className='mr-4'>About</a>
          <a href='#' className='mr-4'>Contact</a>
          <button className='px-8 py-2 text-white bg-blue-500 rounded-md'>Sign In</button>
        </div>

    </div>
  )
}

export default Navbar