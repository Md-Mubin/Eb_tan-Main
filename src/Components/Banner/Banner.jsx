// ===================== All Imports
import React                  from 'react'
import CountUp                from 'react-countup'
import CommonHead             from '../../Commons/CommonHead'
import CommonRates            from '../../Commons/CommonRates'
import CommonButton           from '../../Commons/CommonButton'
import { RiStarFill }         from 'react-icons/ri'
import { FaSmileBeam }        from 'react-icons/fa'
import { BiSolidShoppingBag } from 'react-icons/bi'

const Banner = () => {
    return (
        <>
            {/* ================== Banner Section ================== */}
            <section className='container mt-[40px] lg:mt-[98px] pb-[100px] lg:pb-[191px] lg:flex flex-col  lg:flex-row lg:justify-center items-center gap-[77px]'>

                {/* ---------- image part ---------- */}
                <ul className='flex justify-center items-center relative'>
                    <img src="images/bg_banner.png" alt="banner_image" />
                    <img src="images/banner1.png" alt="banner1_image" className='absolute banner1 w-[250px] sm:w-[300px] lg:w-fit lg:top-[-180px] sm:right-20 lg:right-0'/>
                    <img src="images/banner2.png" alt="banner2_image" className='absolute banner2'/>
                </ul>

                {/* ---------- banner text part ---------- */}
                <ul className='flex flex-col lg:w-[350px] 2xl:w-[540px] mt-10 lg:mt-0'>

                    {/* common heading */}
                    <li><CommonHead commonHeading={"Normal to oily skin"} /></li>

                    {/* main heading */}
                    <h1 className='2xl:w-[540px] font-ptSerif font-normal text-[40px] text-center lg:text-start 2xl:text-[72px] text-commonColor leading-[110%] mt-5'>Men's Sunscreen hand & body</h1>

                    {/* infos */}
                    <p className='2xl:w-[526px] text-center lg:text-start font-inter font-normal text-lg text-[#A0A79A] mt-5 leading-[145%]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>

                    {/* button for adding item into cart */}
                    <li className='lg:mt-[71px] mt-[40px] m-auto lg:m-0'>
                        <CommonButton />
                    </li>

                    {/* ratings counts */}
                    <li className='mt-[42px] flex flex-wrap gap-[45px] justify-center lg:justify-start lg:gap-[49px] '>
                        <CommonRates countIcon={<RiStarFill />} countNumber={<CountUp end={4.6} decimal=',' decimals={1} />} countText={"Ratings"} />
                        <CommonRates countIcon={<BiSolidShoppingBag />} countNumber={<CountUp end={200} />} plusSign={"+"} countText={"Product solds"} />
                        <CommonRates countIcon={<FaSmileBeam />} countNumber={<CountUp end={99} />} plusSign={"+"} countText={"Review"} />
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Banner