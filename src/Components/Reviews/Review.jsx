// ===================== All Imports
import React from 'react'
import CommonReview from '../../Commons/CommonReview'

const Review = () => {
    return (
        <>
            {/* ================== Reviews Section ================== */}
            <section className='container flex flex-col gap-[90px] pb-[120px]'>
                <ul className='flex flex-col items-center gap-[21px]'>
                    <h1 className='font-ptSerif font-normal text-5xl text-brandColor'>Review</h1>
                    <p className='lg:w-[526px] text-center font-inter font-medium text-lg text-[#A0A79A] leading-[145%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </ul>

                {/* ------ Reviews ------ */}
                <ul className='flex flex-col lg:flex-row gap-10 lg:gap-[105px] justify-center'>
                    <CommonReview reviewerName={"Ebrahim Ahmed"} reviewerWork={"actor"}/>
                    <CommonReview reviewerName={"Tanvir Shantoh"} reviewerWork={"actor"}/>
                </ul>
            </section>
        </>
    )
}

export default Review