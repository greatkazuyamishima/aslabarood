import React from 'react'

export default function Hero() {
  return (
    <div className='relative flex flex-col p-16 overflow-hidden border-b border-[#ff6a1a37] w-full'>
        <div className='z-10'>
            <p className='bg-[#FF6A1A] text-black font-bold py-1.5 px-3 mb-6 text-xs tracking-[3px] inline-block w-fit'>ASLA & BAROOD DATABASE</p>
            <p className='text-white font-orbitron font-bold text-6xl'>THE DATABASE FOR<br /><span className='italic text-[#FF6A1A]'>ASLA & BAROOD</span></p>
            <p className='text-[#919191] mt-6 max-w-2xl border-l-3 border-[#FF6A1A] pl-4'>Explore our comprehensive database of firearms, ammunition, and accessories. Whether you're a collector, enthusiast, or professional, find detailed information on a wide range of products.</p>
        </div>
        
        <div className='absolute top-0 left-0 w-full h-full opacity-80'>
            <img src="/images/background.png" alt="Hero Background" className='w-full h-full object-cover' />
        </div>
    </div>
  )
}
