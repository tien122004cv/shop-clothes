import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductItem({ products }) {
    return (
        <div className='grid grid-cols-5 gap-x-4 gap-y-6'>
            {products.map(({ id, name, price, image }) => (
                <Link key={id}>
                    <div className='overflow-hidden'>
                        <img src={image} alt={image} className='hover:scale-110 ease-in-out transition' />
                    </div>
                    <p className='text-sm pt-3 pb-1'>{name}</p>
                    <strong className='text-sm'>${price}</strong>
                </Link>
            ))}
        </div>
    )
}
