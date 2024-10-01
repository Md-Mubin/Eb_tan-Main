// ===================== All Imports
import React from 'react'

const CommonRates = ({ countIcon, countNumber, countText, plusSign }) => {
    return (
        <>
            {/* ================== Common Ratings Part ================== */}
            <section>
                <ul className='flex gap-[10px]'>

                    {/* ----- icons ----- */}
                    <li className='text-[29px] text-[#F2994A]'>
                        {countIcon}
                    </li>

                    {/* ----- ratings ----- */}
                    <li className='leading-[145%] flex flex-col gap-4'>

                        {/* counter */}
                        <p className='font-inter font-bold text-[32px] text-commonColor'>{countNumber}{plusSign}</p> 

                        {/* text info */}
                        <p className='font-inter font-normal text-lg  text-[#A0A79A]'>{countText}</p>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default CommonRates