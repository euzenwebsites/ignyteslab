"use client"
import React from 'react'
import Image from 'next/image'
import Image1 from "../../public/image/image1.svg"
import facebookIcon from "../../public/icon/facebook.svg"
import linkedinIcon from "../../public/icon/linkedin.png"
import twitterIcon from "../../public/icon/twitter.svg"


import Link from 'next/link'
import HeadingSwitcher1 from './content-switcher/HeadingSwitcher1'
import HeadingSwitcher2 from './content-switcher/HeadingSwitcher2'
import HeadingSwitcher3 from './content-switcher/HeadingSwitcher3'
import { useState } from 'react'
import "../globals.css"
const contentItems = {
  "+": <HeadingSwitcher1/>,
  "'": <HeadingSwitcher2/>,
  "-": <HeadingSwitcher3/>,
 

};

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState("+"); 
  const handleSwitch = (index) => {
      setActiveIndex(index);
    };
  return (
    <section className='h-full  w-[100%] flex justify-center pt-40 pb-40 max-sm:pt-20 max-sm:pb-20  '>
        <div className='w-[80%] flex justify-center items-center relative '>

          <div className='w-[10%] h-[100%] absolute right-0 max-sm:bottom-0 flex flex-col max-sm:flex-row items-center gap-6 pt-36 z-500'>
                <div className='w-[2px] h-[35%] bg-[#012D56] opacity-75'></div>
                <Link href="https://www.facebook.com/profile.php?id=61552007724555" target='_blank'><Image src={facebookIcon} alt='facebook'/></Link>
                <Link href="https://www.linkedin.com/company/ignytes-lab" target='_blank'><Image src={linkedinIcon} alt='instagram'/></Link>
                <Link href="https://twitter.com/IgnytesL13724" target='_blank'><Image src={twitterIcon} alt='twitter'/></Link>

          </div>

        {contentItems[activeIndex]}

        <div className='absolute left-0 max-sm:left-[25%] max-sm:top-0  flex flex-col max-sm:flex-row gap-10'>
        {Object.keys(contentItems).map((index) => (
            
            <button key={index} onClick={() => handleSwitch(index)} 
            className={`border-4 border-light-blue text-[#fff] w-[6px] h-[6px] p-4 ${activeIndex === index ? 'active-btn' : ''}`}>    
              {index}
            </button>
            
          ))}
        </div>
        </div>
    </section>
  )
}

export default Hero
