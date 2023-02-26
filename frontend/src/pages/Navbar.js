import React from 'react'
import { Link } from "react-router-dom";

export default function () {
  return (
    <div className='min-w-full max-w-max bg-[#F6F9F5]'>
           <div className="flex flex-row justify-end p-12">
                   
                   <ul className="hidden md:flex flex-row gap-x-20 justify-end items-center mr-8">
                       <Link to ="/events"><li className="hover:text-[#808080] hover:scale-110 transition duration-300 ease-in-out   text-[#2f2e2e] text-lg font-medium font-grotesk ">EVENTS</li></Link>
                       <Link to ="/healthyfood"><li className="hover:text-[#808080]  hover:scale-110 transition duration-300 ease-in-out   text-[#2f2e2e] text-lg font-medium font-grotesk ">HEALTHY FOOD</li></Link>
                       <Link to ="/sweets"><li className="hover:text-[#808080]  hover:scale-110 transition duration-300 ease-in-out   text-[#2f2e2e] text-lg font-medium font-grotesk ">SWEETS</li></Link>
                       <Link to ="/aroundtheworld"><li className="hover:text-[#808080]  hover:scale-110 transition duration-300 ease-in-out   text-[#2f2e2e] text-lg font-medium font-grotesk ">AROUND THE WORLD</li></Link>
                    

                   </ul>
                  
                     
               </div>

    </div>
  )
}
