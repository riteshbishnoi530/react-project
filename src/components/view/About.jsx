import React from 'react'
import HeroSec from '../common/Hero'
import Swiper from '../about/Swiper'
import Cards from '../about/Cards'
import Counter from '../about/Counter'
import Footer from '../common/Footer'


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