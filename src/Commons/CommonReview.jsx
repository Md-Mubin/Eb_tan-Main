// ===================== All Imports
import React          from 'react'
import { RiStarFill } from 'react-icons/ri'

const CommonReview = ({ reviewerName, reviewerWork }) => {
    return (
        <>
            {/* ================== Reviwers Part ================== */}
            <ul className='flex flex-col items-center gap-[13px]'>

                {/* ----- Star Icons ----- */}
                <li className='flex gap-[25px]'>
                    <RiStarFill className='text-[41px] text-[#F2994A] hover:rotate-180 duration-500' />
                    <RiStarFill className='text-[41px] text-[#F2994A] hover:rotate-180 duration-500' />
                    <RiStarFill className='text-[41px] text-[#F2994A] hover:rotate-180 duration-500' />
                    <RiStarFill className='text-[41px] text-[#F2994A] hover:rotate-180 duration-500' />
                    <RiStarFill className='text-[41px] text-[#F2994A] hover:rotate-180 duration-500' />
                </li>

                {/* ----- What Reviewers Says ----- */}
                <li className='w-[441px] text-center font-ptSerif font-normal text-xl text-brandColor leading-[130%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</li>

                {/* ----- Reviewers Name ----- */}
                <li className='font-ptSerif font-normal text-4xl text-commonColor leading-[145%]'>{reviewerName}</li>

                {/* ----- Reviewers Works/passion ----- */}
                <li className='font-ptSerif font-normal text-xl text-[#F2994A]'>{reviewerWork}</li>
            </ul>
        </>
    )
}

export default CommonReview