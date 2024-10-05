import React from 'react'

const TransactionBox = () => {
  return (
    <div className='max-w-[600px] h-auto mx-auto  backdrop-blur-lg rounded-2xl mt-12 overflow-hidden '>

        {/* Tabs for transaction  */}
        <div className="w-full  h-16 flex items-center justify-between ">
            <div className="flex gap-2  text-white">
                <button className='px-4  rounded-full py-2  bg-[#496AA7]/20 text-[#496AA7] '>Equal Splits</button>
                <button className='px-4  rounded-full py-2 text-[#496AA7]'>Unequal Splits</button>
            </div>
            <div className="flex gap-1 bg-[#496AA7]/20 p-1 rounded-full">
                <button className='px-4 bg-[#496AA7] text-white rounded-full py-1'>Split Eth</button>
                <button className='px-4 text-white/50 rounded-full py-1'>Split Tokens </button>
            </div>

        </div>

        {/* Token Contract container  */}
        <div className="w-full h-56 rounded-2xl mt-4 border overflow-hidden  border-[#496AA733]/20 text-white mb-3">
            <div className="w-full p-3 bg-[#496AA7]/20 border-b border-[#496AA7]/20">
                <h1 className='text-lg'>Token Contract Address</h1>
            </div>
                {/* input  */}
         <div className="border-b border-[#496AA7]/20">
           <input type="text" className="w-full px-4 py-2 mt-2 rounded-full border-none focus:outline-none bg-transparent " placeholder="paste token address" />
                </div>
               
 
        </div>
          
          {/* Transaction container  */}
          <div className="w-full bg-yellow-300 h-[342px] rounded-2xl mt-2">

          </div>

          {/* Upload box  */}
          <div className="w-full bg-blue-300 h-[130px] rounded-2xl mt-2 mb-4"> 
          </div>

          {/* Button  */}
          <div className="w-full rounded-full py-4 bg-[#496AA7] text-white flex items-center justify-center text-xl">
            Connect Wallet
          </div>

      

    </div>
  )
}

export default TransactionBox