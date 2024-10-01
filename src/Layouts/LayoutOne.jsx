// ===================== All Imports
import React      from 'react'
import Navbar     from '../Components/Navbar/Navbar'
import Footer     from '../Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const LayoutOne = () => {
    return (
        <>
            {/* ==== Navbar ==== */}
            <Navbar />

            {/* ==== Outlet ==== */}
            <Outlet />

            {/* ==== Footer ==== */}
            <Footer />
        </>
    )
}

export default LayoutOne