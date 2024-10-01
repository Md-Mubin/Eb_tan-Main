import React  from 'react'
import Banner from '../Components/Banner/Banner'
import ChooseCart from '../Components/ChooseCart/ChooseCart'
import Handwash from '../Components/Handwash/Handwash'
import Cream from '../Components/Cream/Cream'
import Mosture from '../Components/Mosture/Mosture'
import Review from '../Components/Reviews/Review'
import Subscribe from '../Components/Subscribe/Subscribe'

const Home = () => {
  return (
    <>
      <Banner />
      <ChooseCart/>
      <Handwash/>
      <Cream/>
      <Mosture/>
      <Review/>
      <Subscribe/>
    </>
  )
}

export default Home