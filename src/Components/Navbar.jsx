import { useState } from 'react'
import { IoBagOutline, IoSearchOutline } from 'react-icons/io5'
import { LuUserRound } from 'react-icons/lu'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'
import categoryIconMobile from '../assets/category-mobile_icon.png'
import { IoIosArrowBack } from 'react-icons/io'

const tabLinks = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'Collection', path: '/collection' },
    { id: 3, name: 'About', path: '/about' },
    { id: 4, name: 'Contact', path: '/contact' }
]

export default function Navbar() {
    const [showSidebar, setShowSidebar] = useState(false)
    let show = !showSidebar && 'translate-x-full'

    function navMobile() {
        return (
            <div className={`sm:hidden fixed top-0 bottom-0 right-0 left-0 z-99 bg-white transition ${show}`}>
                <div className='flex items-center gap-2 py-2 pl-6 text-gray-400 bg-gray-100'
                    onClick={() => setShowSidebar(false)}
                >
                    <IoIosArrowBack />
                    <p>Back</p>
                </div>
                {tabLinks.map(({ id, name, path }) => {
                    return <NavLink key={id} to={path} onClick={() => setShowSidebar(false)}>
                        <p className='py-2 pl-6 text-gray-700'>{name}</p>
                    </NavLink>
                })}
            </div>
        )
    }

    return (
        <nav className='py-5 flex items-center justify-between'>

            <Link to='/'><img src={logo} alt="" className='w-32.5 lg:w-36' /></Link>

            <ul className='sm:flex items-center gap-5 hidden'>
                {tabLinks.map(({ id, name, path }) => {
                    return <NavLink key={id} to={path}>
                        <p>{name}</p>
                        <hr className='w-1/2 mx-auto hidden' />
                    </NavLink>
                })}
            </ul>

            <ul className='flex items-center gap-6'>
                <Link to='/collection'><IoSearchOutline className='text-2xl' /></Link>
                <Link to='/user'><LuUserRound className='text-2xl' /></Link>
                <Link to='/cart' className='relative'>
                    <IoBagOutline className='text-2xl' />
                    <p className="custom-cart-quantity">0</p>
                </Link>
                <img src={categoryIconMobile} alt="" className='sm:hidden block w-5'
                    onClick={() => setShowSidebar(true)} />
            </ul>

            {navMobile()}

        </nav>
    )
}
