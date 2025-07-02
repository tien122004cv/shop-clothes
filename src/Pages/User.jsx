import { useState } from 'react'
import Footer from '../Components/Footer'
import Title from '../Components/Title'

export default function User() {
    const [login, setLogin] = useState('Sign in')

    return (
        <div className='mt-15'>
            <div className='flex items-center justify-center py-5 text-4xl prata-regular'>
                <Title text1={login !== 'Sign in' && 'Sign'} text2={login === 'Sign in' ? 'Login' : 'up'} />
            </div>
            <form className='flex flex-col w-[400px] mx-auto gap-3'>
                {login !== 'Sign in' && (
                    <input type="text" placeholder='Name' className='border py-2 pl-2' />
                )}
                <input type="email" placeholder='Email' className='border py-2 pl-2' />
                <input type="password" placeholder='Password' className='border py-2 pl-2' />
                <div className='flex items-center justify-between text-sm'>
                    <p className='cursor-pointer'>Forgot your password?</p>
                    <p className='cursor-pointer'
                        onClick={() => setLogin(login === 'Sign in' ? 'Sign up' : 'Sign in')}
                    >
                        {login === 'Sign in' ? 'Create account' : 'Login here'}
                    </p>
                </div>
                <button className='w-fit mx-auto mt-3 border bg-black text-white py-2 px-8 cursor-pointer'>
                    {login}
                </button>
            </form>
            <Footer />
        </div>
    )
}
