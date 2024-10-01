// ===================== All Imports
import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'

const CommonButton = () => {
    return (
        <>
            {/* ================== Common Button ================== */}
            <button className='w-[211px] bg-brandColor py-[13px] font-inter font-medium text-lg text-[#ffffff] flex justify-center items-center gap-4 hover:bg-[#ff4242] rounded-[5px] duration-200'><FaCartShopping />Add to Cart</button>
        </>
    )
}

export default CommonButton