// ===================== All Imports
import React from 'react'

const Subscribe = () => {
    return (
        <>
            {/* ================== Subscribe Section ================== */}
            <section className='w-full bg-[#ECEBE6] py-20'>
                <ul className='container flex gap-[111px]'>

                    {/* ----- subscribe ----- */}
                    <li className='w-[356px] font-ptSerif font-normal text-5xl text-commonColor leading-[125%]'>
                        Subscribe to the daily <span className='text-brandColor'>updates</span> 
                    </li>

                    {/* ----- input for email to subscribe ----- */}
                    <li className='relative'>

                        {/* input */}
                        <input type="email" placeholder='Enter your email address' className='w-[700px] py-[33px] pl-6 rounded-full border font-inter font-medium text-lg text-[#A0A79A] leading-[145%] '/>

                        {/* button */}
                        <button className='py-[13px] px-[35px] rounded-full bg-brandColor font-inter font-medium text-lg text-white leading-[145%] absolute right-6 top-[22px] hover:bg-[#ff3939] duration-300'>Subscribe now</button>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Subscribe