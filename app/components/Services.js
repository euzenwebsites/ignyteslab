import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ServiceBox from './ui/ServiceBox'
import logoIcon from "../../public/icon/logoicon.svg"
import brandIcon from "../../public/icon/brandicon.svg"
import mobIcon from "../../public/icon/mobicon.svg"
import socialIcon from "../../public/icon/socialicon.svg"
import webIcon from "../../public/icon/webicon.svg"
import AnimatedButton from './animations/AnimatedButton'
const Services = () => {
  return (
    <section className='h-full  w-[100%] flex justify-center mt-36 mb-36 relative'>
    <div className='w-[80%] flex flex-row max-sm:flex-col gap-20 relative'>
        <div className='sticky max-sm:relative top-0'>
            <div className='text-6xl max-sm:text-4xl font-bold uppercase max-sm:text-center'>
            <h1 className='text-light-blue' >EXPLORE OUR </h1>
            <h1 className='blue-heading text-[#fff] ml-20 max-sm:ml-0 mt-4'>EXPERT SERVICES</h1>
            </div>
            <p className='text-gray text-lg font-light mt-4'>Enjoy quality that is customized to your specific business objectives and needs  </p>

        </div>
        <div className='flex flex-col items-end max-sm:items-center '>
        <AnimatedButton redirect="/portfolio" content="more work"/>
        {/* <Link href="/" className=' px-10 py-4 bg-light-blue text-[#fff] font-bold '>more work</Link> */}
        <div className=' flex flex-col mt-16'>
            <ServiceBox icon={logoIcon}
            heading="Logo Design"/>
            <ServiceBox icon={webIcon}
            heading="Web Design"/>
            <ServiceBox icon={brandIcon}
            heading="Branding"/>
            <ServiceBox icon={socialIcon}
            heading="Social Media"/>
            <ServiceBox icon={mobIcon}
            heading="App Development"/>
        </div>
        <div className='w-[90%] max-sm:w-[100%] bg-light-blue flex flex-col items-start text-white uppercase p-10 mt-24'>
            <p className='text-3xl max-sm:text-xl'>Let’s request more services you need or start creating your next project with us.</p>
            <Link href="/" className='font-bold text-lg mt-10 '>more work</Link>
        </div>
        </div>
    </div>
    </section>
  )
}

export default Services
