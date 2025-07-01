import React from 'react'

export default function Title({ text1, text2 }) {
    return (
        <div className='flex items-center justify-center'>
            <p className='text-3xl text-gray-500'>{text1}
                <span className='text-[#374151] px-1'>{text2}</span>
            </p>
            <hr className='w-12 h-0.5' />
        </div>
    )
}
