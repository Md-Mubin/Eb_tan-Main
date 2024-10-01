// ===================== All Imports
import React                from 'react'
import CommonCart           from '../../Commons/CommonCart'
import { IoStar }           from 'react-icons/io5'
import { FaCircleCheck }    from 'react-icons/fa6'
import { BiSolidInjection } from 'react-icons/bi'

const ChooseCart = () => {
    return (
        <>
            <section className='container mb-[121px] flex flex-col items-center'>
                <h1 className='font-ptSerif font-normal text-[40px] lg:text-[48px] text-commonColor'>Why <span className='text-brandColor'>choose</span> us</h1>
                <p className='lg:w-[526px] font-inter font-medium text-lg text-[#A0A79A] leading-[145%] mt-[21px] text-center'>SLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                <ul className='flex flex-wrap gap-5 mt-[60px]'>
                    <CommonCart cartIcon={<IoStar/>} cartHead={"Dermatologist Tested"} cartInfo={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"}/>

                    <CommonCart cartIcon={<BiSolidInjection/>} cartHead={"Allergy tested"} cartInfo={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"}/>

                    <CommonCart cartIcon={<FaCircleCheck/>} cartHead={"Non-comedogenic"} cartInfo={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been"}/>
                </ul>
            </section>
        </>
    )
}

export default ChooseCart