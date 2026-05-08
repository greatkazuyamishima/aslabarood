import React from 'react'

export default function AslaBaroodCard({ data }) {
  return (
    <div className='flex flex-col border border-[#ff6a1a21] hover:cursor-pointer hover:border-[#ff6a1a4f] hover:-translate-y-1.5 transition-transform duration-500 bg-[#0d1117]'>
        <div className='h-48'>
            <img src={data.image} alt={data.name} className='w-full h-full object-cover' />
        </div>
        <div className='p-4 border-t border-[#ff6a1a18]'>
            <p className='text-[#FF6A1A] text-xs tracking-[3px] mb-1.5'>{data.type}</p>
            <p className='text-white text-2xl mb-2.5 font-orbitron line-clamp-1'>{data.name}</p>
            <p className='text-[#7B8494] text-sm font-bold mb-5 line-clamp-1'>{data.shortDescription}</p>
            <div className='w-full border-b border-[#ff6a1a1a]' />
            <div className='flex justify-between mt-3'>
                <div className='flex flex-col text-center'>
                    <p className='text-[#FF6A1A] text-sm'>{data.caliber}</p>
                    <p className='text-[#666] text-[10px]'>CALIBER</p>
                </div>

                <div className='flex flex-col text-center'>
                    <p className='text-[#FF6A1A] text-sm'>{data.year}</p>
                    <p className='text-[#666] text-[10px]'>YEAR</p>
                </div>

                <div className='flex flex-col text-center'>
                    <p className='text-[#FF6A1A] text-sm'>{data.country}</p>
                    <p className='text-[#666] text-[10px]'>ORIGIN</p>
                </div>
            </div>
        </div>
    </div>
  )
}
