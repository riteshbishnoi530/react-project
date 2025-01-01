import React from 'react'
import HeroSec from '../common/Hero'
import Swiper from '../about/SwiperPractice'
import Cards from '../about/Cards'
import Footer from '../common/Footer'
import Counter from '../about/Counter'


function About() {
  return (
    <div>
     <HeroSec/>
     <Swiper/>
     <Cards/>
    <Counter/>
     <Footer/>
    </div>
  )
}

export default About