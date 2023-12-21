import Link from 'next/link'
import React from 'react'
import PortfolioBox from './ui/PortfolioBox'
import CTA from './ui/CTA'
import AnimatedButton from './animations/AnimatedButton'
import PortSMM from '../../public/image/socail-media.jpg'
import PortWeb from '../../public/image/website.jpg'
import PortBrand from '../../public/image/branding.jpg'
import PortSEO from '../../public/image/seo.jpg'
import PortApp from '../../public/image/app.jpg'

import PortGraphics from '../../public/image/portimggraphics.jpg'

const Portfolio = () => {
  return (
    <section className='h-full  w-[100%] flex justify-center mt-36 mb-36'>
    <div className='w-[80%] '>
        <div className='flex flex-row max-sm:flex-col max-sm:items-center justify-between items-start uppercase pb-10'>
            <div className='text-6xl max-sm:text-4xl font-bold max-sm:mb-10 max-sm:text-center'>
            <h1 className='text-light-blue' >VIEW OUR </h1>
            <h1 className='blue-heading text-[#fff] ml-20 max-sm:ml-0  mt-4'>PROVEN WORK</h1>
            </div>
            
            <AnimatedButton redirect="/portfolio" content="more work"/>
        </div>
        <div className='grid grid-cols-2 max-sm:grid-cols-1 gap-10'>
            <PortfolioBox heading="WEB DESIGN AND DEVELOPMENT" category="development" 
            portimg={PortWeb}
            description="Converting ideas into captivating, practical digital realities via development and design."/>

            <PortfolioBox heading="SEO" category="optimization" 
            portimg={PortSEO}
            description="Increasing visibility and driving growth through SEO tactics that strengthen your web presence."/>

            <PortfolioBox heading="BRANDING" category="branding" 
            portimg={PortBrand}
            description="Creating brand identities that feel genuine and make an impact on marketplaces worldwide."/>

            <PortfolioBox heading="GRAPHIC DESIGN" category="designing" 
            portimg={PortGraphics}
            description="Bringing ideas to life with visually striking and powerful graphic design solutions."/>

            <PortfolioBox heading="APP DEVELOPMENT" category="development" 
            portimg={PortApp}
            description="Providing smooth, modern mobile solutions to businesses that increase customer engagement."/>

            <PortfolioBox heading="SOCIAL MEDIA MARKETING" category="promotion" 
            portimg={PortSMM}
            description="Growing brands with focused tactics and developing connections on various social media platforms."/>
        </div>
    </div>
    
    </section>
  )
}

export default Portfolio
