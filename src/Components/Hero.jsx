import React from 'react'

export default function Hero() {
    return (
        <div className='flex items-center justify-between border border-gray-400'>
            <div className='w-1/2 flex justify-center'>
                <div>
                    <div className='flex items-center gap-2'>
                        <p className='w-11 h-0.5 bg-[#414141]'></p>
                        <p>OUR BESTSELLERS</p>
                    </div>
                    <h1 className='prata-regular text-5xl text-[#374151] py-3'>Latest Arrivals</h1>
                    <div className='flex items-center gap-2'>
                        <p>SHOP NOW</p>
                        <p className='w-11 h-0.5 bg-[#414141]'></p>
                    </div>
                </div>
            </div>
            <img src="src/assets/hero.png" alt="" className='w-1/2' />
        </div>
    )
}
