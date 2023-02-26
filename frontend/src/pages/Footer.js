import React from 'react'

export default function Footer() {
  return (
    <div className='min-w-full max-w-max bg-[#deb941]'>
        <div className='flex flex-row p-20 justify-around'>
            <div className='text-3xl font-playfair font-medium'>Bring global cuisine straight to your inbox.<br/> Sign up for our weekly<br/> newsletter.</div>
            <input className="mt-6 placeholder:poppins placeholder:[#D5d5d5] required block bg-[#f6f9f5] w-[350px] h-[40px] border border-[#d5d5d5] rounded-md text-black py-1 pl-2 shadow-lg shadow-black focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
            placeholder="Email Address" 
            type="email" 
                  />
                  <button className="mt-6 bg-[#deb941] w-[100px] h-[40px] font-grotesk border border-black  text-black py-1 pl-1 font-semibold focus:outline-none focus:border-black focus:ring-black focus:ring-1 sm:text-sm"
                  >Subscribe</button>

        </div>
    </div>
  )
}
