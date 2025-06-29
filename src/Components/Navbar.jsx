import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const tabLinks = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Collection', path: '/collection' },
    { id: 3, name: 'About', path: '/about' },
    { id: 4, name: 'Contact', path: '/contact' }
]

export default function Navbar() {
    return (
        <nav className='py-5 flex items-center justify-between'>
            <img src="src/assets/logo.png" alt="" className='w-32.5 lg:w-36' />
            <ul className='test'>
                <p className='block sm:hidden py-2'>Back</p>
                {tabLinks.map(({ id, name, path }) => {
                    return <NavLink key={id} to={path}>
                        <p className='max-sm:py-2'>{name}</p>
                        <hr className='w-1/2 mx-auto hidden' />
                    </NavLink>
                })}
            </ul>
            <ul className='flex items-center gap-6'>
                <Link><img src="src/assets/search_icon.png" alt="" className='w-5' /></Link>
                <Link><img src="src/assets/user_icon.png" alt="" className='w-5' /></Link>
                <Link className='relative'>
                    <img src="src/assets/cart_icon.png" alt="" className='w-5' />
                    <p className='custom-cart-quantity'>0</p>
                </Link>
            </ul>
        </nav>
    )
}
