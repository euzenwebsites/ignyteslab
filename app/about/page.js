import React from 'react'
import AboutHero from './components/AboutHero'
import Marquee from '../components/ui/Marquee'
import About from '../components/About'
import WhyChooseUs from './components/WhyChooseUs'
import FAQ from './components/FAQ'

const page = () => {
  return (
    <main>
        <AboutHero/>
        <Marquee
        title=" * our story * our story * our story * our story * our story * our story * our story
        * our story * our story * our story * our story * our story * our story * our story * our story"/>
        <About/>
        <Marquee
        title="* why choose us * why choose us * why choose us * why choose us * why choose us * why choose us 
        * why choose us * why choose us * why choose us * why choose us * why choose us * why choose us
        * why choose us"/>
        <WhyChooseUs/>
        <Marquee
        title=" * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S
        * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S"/>
        <FAQ/>
        
    </main>
  )
}

export default page
