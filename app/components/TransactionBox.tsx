import Image from 'next/image'
import React from 'react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { LuArrowDownUp, LuCopy } from 'react-icons/lu'
import Eth from '../assets/eth.png'
import { MdOutlineFileUpload } from 'react-icons/md'
import { CiTrash } from 'react-icons/ci'

const TransactionBox = () => {
  return (
    <div className='max-w-[400px] px-3 lg:max-w-[600px] h-auto mx-auto  backdrop-blur-lg rounded-2xl mt-12 overflow-hidden '>

        {/* Tabs for transaction  */}
        <div className="w-full  h-16 flex items-center justify-between ">
            <div className="flex gap-2  text-white">
                <button className='p-1 lg:px-4  rounded-full lg:py-2  bg-[#496AA7]/20 text-[#496AA7] text-[12px] lg:text-lg'>Equal Splits</button>
                <button className='p-1 lg:px-4  rounded-full lg:py-2 text-[#496AA7] text-[12px] lg:text-lg'>Unequal Splits</button>
            </div>
            <div className="flex gap-1 bg-[#496AA7]/20 p-1 rounded-full">
                <button className='p-2 lg:px-4 bg-[#496AA7] text-white rounded-full py-1 text-[12px] lg:text-lg'>Split Eth</button>
                <button className='p-2 lg:px-4 text-white/50 rounded-full py-1 text-[12px] lg:text-lg'>Split Tokens </button>
            </div>

        </div>

        {/* Token Contract container  */}
        <div className="w-full h-auto rounded-2xl mt-4 border overflow-hidden  border-[#496AA733]/20 text-white mb-3">
        <div className="w-full p-3 bg-[#496AA7]/5 border-b border-[#496AA7]/30">
            <h1 className='text-lg'>Token Contract Address</h1>
        </div>

        {/* input Box */}
         <div className="border-b border-[#496AA7]/30 bg-[#496AA7]/5">
           <input type="text" className="w-full px-4 py-2 mt-2 rounded-full border-none focus:outline-none bg-transparent " placeholder="paste token address" />
        </div>

        {/* Token box  */}
        <div className="flex items-center w-full justify-evenly my-3">
            <div className="flex flex-col items-center justify-center ">
                <p>-</p>
                <span > Token </span>
            </div>
            <div className="flex flex-col items-center justify-center ">
                <p>0</p>
                <span>Balance</span>
            </div>
            <div className="flex flex-col items-center justify-center ">
                <p>0</p>
                <span>Allowance</span>
            </div>
        </div>

        {/* Allowance input  */}
        <div className="w-full flex items-center justify-center border-t border-[#496AA7]/20">
            <div className="w-[75%]">
                <input type="text " placeholder='Enter Allowance' className='px-4 bg-transparent w-full h-full py-4 border-none focus:outline-none ' />
            </div>
            <button className="w-[25%] py-4 bg-[#496AA7] text-white">
                Approve
            </button>
        </div>
               
 
        </div>
          
          {/* Transaction container  */}
          <div className="w-full h-[320px] rounded-2xl my-3 flex flex-col overflow-hidden border border-[#496AA7]/30">
            <div className="h-[15%]  border-b border-[#496AA7]/20 px-4 text-white/60 flex items-center">
            <p className="text-lg">
              You are sending
            </p>
            </div>
            <div className="h-[67%] flex flex-col items-center justify-center text-white/60">
                <h1 className='text-9xl'>0</h1>
                <div className='flex items-center justify-center mt-2'>
                    <p className="text-lg">
                    $0.00 USD 
                    </p>
                    <LuArrowDownUp className='ml-2 text-lg' />
                </div>
            </div>
            <div className="h-[17%]  border-t border-[#496AA7]/20 flex items-center justify-between px-4 text-white/70">
            <div className="flex items-center justify-center">
                <Image src={Eth} alt='' className='w-8' />
                <p className="text-lg ml-2">
                    ETH
                </p>
            </div>
            <IoIosArrowDown className='text-2xl' />
            </div>

          </div>

          {/* Upload box  */}
          <div className="w-full auto rounded-2xl my-3 flex flex-col overflow-hidden border border-[#496AA7]/30">
            <div className="py-3  border-b border-[#496AA7]/20 px-4 text-white/60 flex items-center justify-between">
            <p className="text-lg">
              To
            </p>
            <div className="rounded-full px-3 py-2 flex items-center justify-center gap-2 bg-[#496AA7]/30 ">
                <MdOutlineFileUpload />
                <p className='text-md text-white/40'>Upload</p>
            </div>
            </div>

            <div className="flex flex-col px-4 my-3">
                <p className="text-white/40">contract address</p>
                <p className="text-white/40">contract address</p>
            </div>

          </div>

          {/* Valid Address container  */}

          <div className="p-3 border-[#496AA7]/30 rounded-2xl mt-3">

            <h1 className='text-white/40 text-lg border-b border-[#496AA7]/30 pb-3'>Valid addresses (0) </h1>

            {/* contract list  */}
            <div className="my-3">
                <div className=" rounded-full border-[#496AA7]/20 border w-full flex items-center justify-between py-2 px-4">
                <div className="flex items-center gap-1">
                    <p className="text-white/40">contract addresskjkjbkjbjb</p>
                     <LuCopy  className='text-white/40'/>
                </div>
                <div className="flex gap-1">
                   <CiTrash className='text-white/60'/>
                </div>
            </div>
            </div>

          </div>

          {/* Button  */}
          <div className="w-full rounded-full py-4 bg-[#496AA7] text-white flex items-center justify-center text-xl">
            Connect Wallet
          </div>

      

    </div>
  )
}

export default TransactionBox