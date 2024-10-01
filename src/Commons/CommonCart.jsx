// ===================== All Imports
import React from 'react'

const CommonCart = ({cartHead , cartInfo, cartIcon}) => {
    return (
        <>
            <ul className='lg:w-[260px] xl:w-[310px] 2xl:w-[380px] py-8 px-[26px] bg-[#F0EFEA] cursor-pointer lg:hover:shadow-[10px_10px_20px_rgba(0,0,0,0.2)] duration-200 rounded-[5px] flex lg:flex-none flex-col items-center border lg:border-none border-brandColor'>
                <li className='p-4 bg-[#CDD5CA] rounded-full w-fit text-brandColor text-[27px] hover:shadow-[0_6px_10px_rgba(0,0,0,0.6)] duration-200'>{cartIcon}</li>
                <li className='mt-5 font-inter font-bold text-[22px] text-commonColor leading-[145%] text-center lg:text-start'>{cartHead}</li>
                <li className='mt-[11px] font-inter font-medium text-[lg] text-[#A0A79A] text-center lg:text-start'>{cartInfo}</li>
            </ul>
        </>
    )
}

export default CommonCart