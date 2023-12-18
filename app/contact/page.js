import React from 'react'
import ContactHero from './components/ContactHero'
import Marquee from '../components/ui/Marquee'
import FAQ from '../about/components/FAQ'
import ContactForm from './components/ContactForm'

const page = () => {
  return (
    <div>
      <ContactHero/>
      <Marquee
       title="* contact us * contact us * contact us * contact us * contact us * contact us * contact us * contact us 
       * contact us * contact us * contact us * contact us * contact us * contact us * contact us * contact us "
      />
      <ContactForm/>
      <Marquee
        title=" * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S
        * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S * FAQ'S"/>
      <FAQ/>
    </div>
  )
}

export default page
