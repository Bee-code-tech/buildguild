import Image from "next/image";
import Navbar from "./components/Navbar";
import TransactionBox from "./components/TransactionBox";

export default function Home() {
  return (
    <>
    <div className="bg-[#101522] min-h-screen overflow-x-hidden">
      {/* Eth value button  */}
      <span className="px-4 py-2 rounded-full border absolute text-[#496AA7] bottom-20 right-32 border-[#496AA733]/20">
      1 ETH= ($2,453.15)
      </span>

     {/* Effects  */}
      <div className="w-[690px] h-[690px] rounded-full z-2 bg-[#496AA733]/20 blur-3xl absolute -left-[600px] top-52">
      </div>

      <div className="w-[690px] h-[690px] rounded-full z-2 bg-[#496AA733]/20 blur-3xl absolute -right-[500px] -top-[400px]">
      </div>
      <div className="w-[690px] h-[690px] rounded-full z-2 bg-[#496AA733]/20 blur-3xl absolute -right-[500px] -bottom-[400px]">
      </div>
      {/* Effects end  */}
     
       {/* Navbar  */}
       <Navbar />

       {/* Transaction Box  */}
       <TransactionBox />


    </div>
    </>
  );
}
