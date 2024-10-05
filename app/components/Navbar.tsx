import Image from 'next/image'
import React from 'react'
import logo from '../assets/logo.png'
import { LuSunMedium } from 'react-icons/lu'
import { MdOutlineNightsStay } from 'react-icons/md'

const Navbar = () => {
  return (
    <div className='w-full px-24 py-4 flex items-center justify-between  border-b border-[#496AA7]/20 '>
        <div className='flex items-center'>
            <Image src={logo} alt={'Build Guild'} className='w-[150px]' />
        </div>
        <div className='flex items-center text-white justify-center'>
          <a href='#' className='mr-6'>Contact</a>
          <button className='px-8 py-3 text-white bg-[#496AA7] rounded-m rounded-full'>Connect Wallet</button>
          <span className="px-4 py-2 rounded-full flex items-center justify-center bg-[#496AA7]/20 ml-4">
            <LuSunMedium className='text-2xl mr-4'/>
            <MdOutlineNightsStay />
          </span>
          
        </div>

    </div>
  )
}

export default Navbar