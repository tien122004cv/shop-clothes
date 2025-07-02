import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductItem({ products }) {

    return (
        <div className='grid grid-cols-5 gap-x-4 gap-y-6'>
            {products.map(item => (
                <Link key={item._id} to={`/${item._id}`}>
                    <div className='overflow-hidden'>
                        <img src={item.image[0]} alt={item.name} className='hover:scale-110 ease-in-out transition' />
                    </div>
                    <p className='text-sm pt-3 pb-1'>{item.name}</p>
                    <strong className='text-sm'>${item.price}</strong>
                </Link>
            ))}
        </div>
    )
}
