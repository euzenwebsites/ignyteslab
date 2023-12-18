
import AccordionFAQ from '@/app/components/ui/AccordionFAQ'
import Link from 'next/link'
import React from 'react'
import AnimatedButton from '@/app/components/animations/AnimatedButton'
const FAQ = () => {
  return (
    <section className='h-full  w-[100%] flex justify-center mt-36 mb-36'>
    <div className='w-[80%] flex flex-col justify-center items-center relative '>
        <div className='flex flex-col sm:flex-row '>
            <div className='sm:w-[40%] w-[100%] mb-10 sm:mb-0'>
            <div className='text-4xl sm:text-6xl font-bold uppercase'>
            <h1 className='text-light-blue' >HELP & FAQ</h1>
            <h1 className='blue-heading text-[#fff] ml-0 sm:ml-20 mt-4'>CENTERS</h1>
            </div>
            <p className='text-gray text-lg font-light mt-4 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit sed do eiusmod tempor incididunt ut labore et dolore 
            magna aliqua utenim ad minim veniam quis.</p>
            {/* <AnimatedButton redirect="/portfolio" content="more work"/> */}

            <Link href="/contact" className='px-8 py-4 mt-10 bg-light-blue text-white font-semibold  uppercase'>contact us</Link>
            </div>
            <div className='w-[100%] sm:w-[60%]'>
                <AccordionFAQ/>
            </div>
        </div>
    </div>
    </section>
  )
}

export default FAQ
