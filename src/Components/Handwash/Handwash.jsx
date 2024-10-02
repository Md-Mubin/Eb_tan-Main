// ===================== All Imports
import React                 from 'react'
import CountUp               from 'react-countup'
import CommonHead            from '../../Commons/CommonHead'
import CommonRates           from '../../Commons/CommonRates'
import CommonButton          from '../../Commons/CommonButton'
import { BsFillBoxSeamFill } from 'react-icons/bs'
import { RiShoppingBagFill } from 'react-icons/ri'
import { HiMiniFaceSmile }   from 'react-icons/hi2'

const Handwash = () => {
    return (
        <>
        <section className='w-full bg-[#ECEBE6] pt-[50px] lg:pt-[110px] pb-20 lg:pb-[149px]'>
            <div className="container flex flex-col lg:flex-row lg:justify-between items-center">
                <ul className='flex flex-col items-center'>
                    
                    <li><CommonHead commonHeading={"All skins types"}/></li>
                    <li className='flex gap-10 xl:gap-20 flex-wrap justify-center lg:justify-start mt-10 xl:mt-0'>
                        <CommonRates countIcon={<BsFillBoxSeamFill/>} countNumber={<CountUp end={48}/>} countText={"Products"}/>
                        <CommonRates countIcon={<RiShoppingBagFill/>} countNumber={<CountUp end={200}/>} plusSign={"+"} countText={"Product solds"}/>
                        <CommonRates countIcon={<HiMiniFaceSmile/>} countNumber={<CountUp end={99}/>} plusSign={"+"} countText={"Review"}/>
                    </li>
                    <li className='text-center lg:text-start font-ptSerif font-normal text-[36px] text-brandColor leading-[130%] mt-10'>Men's Hand wash  lorem</li>
                    <li className='flex items-center gap-5 mt-5 lg:mt-[114px]'><CommonButton /> <span className='font-ptSerif font-normal text-2xl lg:text-[31px] text-brandColor leading-[145%]'>৳ 700</span></li>
                </ul>
                <ul className='mt-10 lg:mt-0 pl-8 lg:pl-0 relative'>
                    <img src="images/bg_handwash.png" alt="hand_wash_bg_image" />
                    <img src="images/handwash.png" alt="hand_wash_bg_image" className='absolute top-0 lg:top-[-140px] right-1/4 lg:right-0 handwash w-[100px] sm:w-[200px] lg:w-fit'/>
                </ul>
            </div>
        </section>
        </>
    )
}

export default Handwash