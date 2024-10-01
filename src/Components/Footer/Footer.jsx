// ===================== All Imports
import React    from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa6'
import { IoNavigateCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
            {/* ================== Footer Part ================== */}

      <footer className='w-full bg-brandColor py-16'>
        <ul className='container flex flex-col items-center'>
          <li className='font-inter font-black text-[34px] text-white leading-[125%]'>EbTan Cosmetics</li>
          <li className='flex gap-[33px] mt-[43px]'>
            <Link to = "#" className='font-inter font-medium text-lg text-white leading-[125%]'>Home</Link>
            <Link to = "#" className='font-inter font-medium text-lg text-white leading-[125%]'>About</Link>
            <Link to = "#" className='font-inter font-medium text-lg text-white leading-[125%]'>Product</Link>
            <Link to = "#" className='font-inter font-medium text-lg text-white leading-[125%]'>Contact</Link>
          </li>
          <li className='flex gap-[29px] mt-[50px]'>
            <FaInstagram className='text-[22px] text-white'/>
            <IoNavigateCircle className='text-[22px] text-white'/>
            <FaFacebook className='text-[22px] text-white'/>
          </li>
          <li className='font-inter font-medium text-lg text-white leading-[125%] mt-5'>© 2024 All Rights Reserved.</li>
        </ul>
      </footer>
    </>
  )
}

export default Footer