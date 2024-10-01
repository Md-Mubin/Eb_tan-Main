// ===================== All Imports
import React from 'react'

const CommonHead = ({ commonHeading }) => {
  return (
    <>
      {/* ================== Common Line ================== */}
      <h4 className='font-ptSerif font-normal text-xl text-[#F2994A] text-center lg:text-start'>{commonHeading}</h4>
    </>
  )
}

export default CommonHead