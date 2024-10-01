// ===================== All Imports
import React, { useState }   from 'react'
import { HiBars3BottomLeft } from 'react-icons/hi2'

const Navbar = () => {

    // for toggle method
    const [navItems, setNavItems] = useState(false)

    const toggleNav = () => {
        setNavItems(!navItems)
    }

    return (
        <>
            {/* ================== Navbar Part ================== */}
            <nav className='container pt-[33px]'>
                <ul className='flex justify-between items-center'>

                    {/* --------- logo image --------- */}
                    <img src="images/logo.png" alt="logo_image" />

                    <li className='relative'>

                        {/* --------- bar icon --------- */}
                        <HiBars3BottomLeft onClick={toggleNav} className={navItems ? 'text-4xl cursor-pointer rotate-[-360deg] duration-500' : 'text-4xl rotate-180 duration-500 cursor-pointer'} />

                        {/* toggle effect */}
                        <ul className={navItems ? "w-[150px] flex flex-col items-center gap-3 py-4 bg-[#ff9d9da8] absolute translate-x-[-120px] duration-500 opacity-1 rounded-2xl" : "w-[150px] flex flex-col items-center gap-3 py-4 bg-red-200 absolute translate-x-[50px] duration-500 opacity-0 pointer-events-none"}>

                            <button className='font-inter font-normal hover:font-semibold 2xl:py-2 w-full hover:bg-red-300 hover:text-white duration-200 rounded-2xl'>Home</button>
                            <button className='font-inter font-normal hover:font-semibold 2xl:py-2 w-full hover:bg-red-300 hover:text-white duration-200 rounded-2xl'>About us</button>
                            <button className='font-inter font-normal hover:font-semibold 2xl:py-2 w-full hover:bg-red-300 hover:text-white duration-200 rounded-2xl'>Product</button>
                            <button className='font-inter font-normal hover:font-semibold 2xl:py-2 w-full hover:bg-red-300 hover:text-white duration-200 rounded-2xl'>Contact</button>
                        </ul>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar