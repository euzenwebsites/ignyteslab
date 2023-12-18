import React from 'react'
import PortfolioHero from './components/PortfolioHero'
import Marquee from '../components/ui/Marquee'
import Portfolio from '../components/Portfolio'
import CTA from '../components/ui/CTA'

const page = () => {
  return (
    <div>
        <PortfolioHero/>
        <Marquee title="* our work * our work * our work * our work * our work * our work 
        * our work * our work * our work * our work * our work * our work * our work * our work "/>
        <Portfolio/>
        <CTA/>
    </div>
  )
}

export default page
