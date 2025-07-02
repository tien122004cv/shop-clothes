import React from 'react'

export default function Title({ text1, text2 }) {
    return (
        <>
            <p>{text1}
                <span className='text-[#374151] px-1'>{text2}</span>
            </p>
            <hr className='w-12 h-0.5' />
        </>
    )
}
