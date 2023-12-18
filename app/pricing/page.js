import React from 'react'
import PricingHero from './components/PricingHero'
import Marquee from '../components/ui/Marquee'
import Pricing from './components/Pricing'
import WhyChooseUs from '../about/components/WhyChooseUs'
import Clients from '../components/Clients'

const page = () => {
  return (
    <div>
      <PricingHero/>
      <Marquee title=" * pricing & plan * pricing & plan * pricing & plan * pricing & plan * pricing & plan
       * pricing & plan * pricing & plan * pricing & plan * pricing & plan * pricing & plan * pricing & plan"/>
      <Pricing/>
      <Marquee
        title="* why choose us * why choose us * why choose us * why choose us * why choose us * why choose us 
        * why choose us * why choose us * why choose us * why choose us * why choose us * why choose us
        * why choose us"/>
      <WhyChooseUs/>
      <Clients/>
    </div>
  )
}

export default page
