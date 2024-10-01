import React, { useState } from 'react'
import CommonHead from '../../Commons/CommonHead'
import CommonButton from '../../Commons/CommonButton'
import CommonToggle from '../../Commons/CommonToggle'

const Mosture = () => {

    const [open, setOpen] = useState("")

    const handleToggle = (section) => {
        setOpen(open === section ? "" : section)
    }

    return (
        <>
            <section className='w-full pb-[142px] '>
                <div className="container flex flex-col-reverse lg:flex-row mt-20 lg:mt-0 gap-20 lg:gap-0 xl:gap-[190px] items-center">
                    <ul>
                        <CommonHead commonHeading={"Only Skins Types"} />

                        <h1 className='lg:w-[479px] font-ptSerif font-normal text-3xl lg:text-4xl xl:text-5xl text-center lg:text-start text-commonColor leading-[120%] mt-[30px]'>Men's lip balm lasting (25 gr)</h1>

                        <li className='mt-[44px] flex flex-col gap-[18px]'>

                            <CommonToggle info={"How to use"} infoHead={"How to use"} isopen={open === "How to use"} ontoggle={() => handleToggle("How to use")} />

                            <CommonToggle info={"Ingredients"} infoHead={"Ingredients"} isopen={open === "Ingredients"} ontoggle={() => handleToggle("Ingredients")} />
                                
                            <CommonToggle info={"Benefits"} infoHead={"Benefits"} isopen={open === "Benefits"} ontoggle={() => handleToggle("Benefits")} />
                        </li>

                        <li className='mt-[37px] flex items-center gap-4 lg:gap-[27px]'>
                            <CommonButton />
                            <span className='font-ptSerif font-normal text-3xl lg:text-[31px] text-brandColor leading-[145%]'>৳ 300</span>
                        </li>
                    </ul>
                    <ul className='pl-10 lg:pl-0'>
                        <img src="images/mosture.png" alt="mosture_image" />
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Mosture