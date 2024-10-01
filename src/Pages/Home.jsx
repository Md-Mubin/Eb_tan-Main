import React  from 'react'
import Banner from '../Components/Banner/Banner'
import ChooseCart from '../Components/ChooseCart/ChooseCart'
import Handwash from '../Components/Handwash/Handwash'
import Cream from '../Components/Cream/Cream'
import Mosture from '../Components/Mosture/Mosture'

const Home = () => {
  return (
    <>
      <Banner />
      <ChooseCart/>
      <Handwash/>
      <Cream/>
      <Mosture/>
    </>
  )
}

export default Home