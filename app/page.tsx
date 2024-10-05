import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <div className="bg-[#101522] min-h-screen ">
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


    </div>
    </>
  );
}
