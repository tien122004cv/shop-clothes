import { LeftOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const tabLinks = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Collection', path: '/collection' },
    { id: 3, name: 'About', path: '/about' },
    { id: 4, name: 'Contact', path: '/contact' }
]

function navMobile(show, setShow) {
    return <ul className={`sm:hidden fixed top-0 bottom-0 right-0 left-0 z-99 bg-white transition ${!show && 'translate-x-full'}`}>
        <div className='flex items-center gap-2 py-2 pl-6 text-gray-400'
            onClick={() => setShow(false)}
        >
            <LeftOutlined />
            <p>Back</p>
        </div>
        {tabLinks.map(({ id, name, path }) => {
            return <NavLink key={id} to={path} onClick={() => setShow(false)}>
                <p className='py-2 pl-6 text-gray-700'>{name}</p>
            </NavLink>
        })}
    </ul>
}

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
        <nav className='py-5 flex items-center justify-between'>

            <img src="src/assets/logo.png" alt="" className='w-32.5 lg:w-36' />

            <ul className='sm:flex items-center gap-5 hidden'>
                {tabLinks.map(({ id, name, path }) => {
                    return <NavLink key={id} to={path}>
                        <p>{name}</p>
                        <hr className='w-1/2 mx-auto hidden' />
                    </NavLink>
                })}
            </ul>

            <ul className='flex items-center gap-6'>
                <Link><img src="src/assets/search_icon.png" alt="" className='w-5' /></Link>
                <Link><img src="src/assets/user_icon.png" alt="" className='w-5' /></Link>
                <Link className='relative'>
                    <img src="src/assets/cart_icon.png" alt="" className='w-5' />
                    <p className="custom-cart-quantity">0</p>
                </Link>
                <img src="src/assets/category-mobile_icon.png" alt="" className='w-5'
                    onClick={() => setShowSidebar(true)} />
            </ul>

            {navMobile(showSidebar, setShowSidebar)}

        </nav>
    )
}
