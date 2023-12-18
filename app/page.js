import Image from 'next/image'
import Hero from './components/Hero'
import Marquee from './components/ui/Marquee'
import About from './components/About'
import Portfolio from './components/Portfolio'
import CTA from './components/ui/CTA'
import Services from './components/Services'
import Pricing from './pricing/components/Pricing'
import Clients from './components/Clients'

export default function Home() {
  return (
    <main>
      <Hero/>
      <Marquee
      title=" * OPEN FOR NEW PROJECT * OPEN FOR NEW PROJECT * OPEN FOR NEW PROJECT * OPEN FOR NEW PROJECT * OPEN FOR NEW PROJECT
      * OPEN FOR NEW PROJECT * OPEN FOR NEW PROJECT * OPEN FOR NEW PROJECT * OPEN FOR NEW PROJECT * OPEN FOR NEW PROJECT
      * OPEN FOR NEW PROJECT * OPEN FOR NEW PROJECT"/>
      <About/>
      <Marquee
      title=" latest work * latest work * latest work * latest work * latest work * latest work * latest work *
      latest work * latest work * latest work * latest work * latest work * latest work * latest work *
      latest work * latest work *"/>
      <Portfolio/>
      <CTA/>
      <Marquee
      title=" * what wo do * what wo do * what wo do * what wo do * what wo do * what wo do * what wo do
      * what wo do * what wo do * what wo do * what wo do * what wo do * what wo do * what wo do * what wo do"/>
      <Services/>
      <Marquee
      title=" * pricing & Plan * pricing & Plan * pricing & Plan * pricing & Plan * pricing & Plan * pricing & Plan
      * pricing & Plan * pricing & Plan * pricing & Plan * pricing & Plan * pricing & Plan * pricing & Plan"/>
      <Pricing/>
      <Clients/>
      

    </main>
  )
}
