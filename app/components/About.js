import React from 'react'
import Image from 'next/image'
import AboutImg from "../../public/image/aboutimg.png"
import playBtn from "../../public/icon/playbtn.svg"
import Link from 'next/link'

const About = () => {
  return (
    <section className='h-full  w-[100%] flex justify-center mt-36 mb-36'>
        <div className='w-[80%] flex flex-col justify-center items-center relative '>
            <div className='flex flex-col sm:flex-row'>
                <div className='w-[100%] sm:w-[50%] max-sm:w-[100%] text-4xl sm:text-6xl font-bold pt-32 max-sm:text-center'>
                    <h1 className='text-[#3087C8]' >FORGE AHEAD ON </h1>
                    <h1 className='blue-heading text-[#fff] sm:ml-20 mt-4 ml-0'>YOUR JOURNEY</h1>
                </div>
                <div className='w-[50%] max-sm:w-full sm:mt-0 mt-10'><Image src={AboutImg}/></div>
            </div>
            <div className='grid grid-cols-2 max-sm:grid-cols-1 mt-20'>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-row items-center '>
                        <div className='p-8 bg-[#D9D9D9] rounded-full '><Image src={playBtn} /></div>
                        <h3 className='pl-4 font-bold text-[#6A6A6A]'>Video Introduction</h3>
                    </div>
                    <p className='text-[#6A6A6A] text-lg font-light'>Take a close look at growth, as Ignytes Lab's technology makes possibilities a reality.</p>
                    <Link href="/" className='text-[#6A6A6A] text-xl  underline decoration-light-blue hover:decoration-dark-blue underline-offset-8 '>Learn More</Link>
                </div>
                <div className=' flex flex-col'>
                    <div className='grid grid-cols-3 max-sm:grid-cols-2 gap-4 border-b-2 border-light-blue text-[#6A6A6A] pb-8 pt-8'>
                        <h1 className='text-3xl font-bold max-sm:col-span-2 '>Who We Are</h1>
                        <p className='col-span-2 max-sm:col-span-2 text-lg font-normal italic '>We are the creative catalysts that create digital solutions that reshape the future.</p>
                    </div>
                    <div className='grid grid-cols-3 max-sm:grid-cols-2 gap-4 border-b-2 border-light-blue text-[#6A6A6A] pb-8 pt-8'>
                        <h1 className='text-3xl font-bold max-sm:col-span-2'>Our Vision</h1>
                        <p className='col-span-2  text-lg font-normal italic'>As we shape a breakthrough future, we envision highly innovative solutions.</p>
                    </div>
                    <div className='grid grid-cols-3 max-sm:col-span-2 max-sm:col-span-2 gap-4 border-b-2 border-light-blue text-[#6A6A6A] pb-8 pt-8'>
                        <h1 className='text-3xl font-bold max-sm:col-span-2 '>Our Mission</h1>
                        <p className='col-span-2 text-lg font-normal italic'>Here at Ignytes Lab, it's evident that our goal is to spur progress with the latest software.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
