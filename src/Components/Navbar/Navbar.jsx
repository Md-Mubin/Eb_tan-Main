// ===================== All Imports
import './Navbar.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
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

                        {/* --------- bar icon button --------- */}
                        <HiBars3BottomLeft onClick={toggleNav} className={navItems ? 'text-4xl cursor-pointer rotate-[-360deg] duration-500' : 'text-4xl rotate-180 duration-500 cursor-pointer'} />

                        {/* toggle effect */}
                        <ul className={navItems ? "slideIn" : "slideOut"}>

                            <li className="w-[150px] flex flex-col text-center gap-3 py-4 bg-[#ff9d9da8] absolute rounded-2xl">
                                <Link to="#" className='font-inter font-normal hover:font-semibold 2xl:py-2 w-full hover:bg-red-300 hover:text-white duration-200 rounded-2xl'>Home</Link>
                                <Link to="#" className='font-inter font-normal hover:font-semibold 2xl:py-2 w-full hover:bg-red-300 hover:text-white duration-200 rounded-2xl'>About us</Link>
                                <Link to="#" className='font-inter font-normal hover:font-semibold 2xl:py-2 w-full hover:bg-red-300 hover:text-white duration-200 rounded-2xl'>Product</Link>
                                <Link to="#" className='font-inter font-normal hover:font-semibold 2xl:py-2 w-full hover:bg-red-300 hover:text-white duration-200 rounded-2xl'>Contact</Link>
                            </li>
                        </ul>

                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar