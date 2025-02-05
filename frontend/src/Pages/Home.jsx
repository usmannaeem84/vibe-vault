import React from 'react'
import Hero from '../Components/Hero'
import Latest from '../Components/Latest'
import BestSeller from '../Components/BestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewsLetter from '../Components/NewsLetter'

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Latest></Latest>
      <BestSeller></BestSeller>
      <OurPolicy></OurPolicy>
      <NewsLetter></NewsLetter>
    </div>
  )
}

export default Home
