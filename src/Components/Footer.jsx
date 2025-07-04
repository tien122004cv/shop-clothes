import React from 'react'

const Footer = () => {

    return (

        <>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                <div>
                    <img src="src/assets/logo.png" className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam et officiis placeat repellat blanditiis veritatis? Nobis, non distinctio impedit dolorem a, quo facilis quas omnis ducimus aperiam recusandae exercitationem. Debitis?
                    </p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'> COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600 '>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'> GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600 '>
                        <li>+1 111-222-3333</li>
                        <li>info@gmail.com</li>

                    </ul>
                </div>


            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024 @abdulhananabbasi50@gmail.com - All Rights Reserved</p>
            </div>
        </>
    )
}

export default Footer