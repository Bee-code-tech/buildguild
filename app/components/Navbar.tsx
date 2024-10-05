import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='w-full px-24 py-4 flex items-center justify-between border-1 border-b '>
        <div className='flex items-center'>
            <Image src={logo} alt={'Build Guild'} className='w-[150px]' />
        </div>
        <div className='flex items-center text-white'>
          <a href='#' className='mr-6'>Contact</a>
          <button className='px-8 py-4 text-white bg-[#496AA7] rounded-m rounded-full'>Connect Wallet</button>
          
        </div>

    </div>
  )
}

export default Navbar