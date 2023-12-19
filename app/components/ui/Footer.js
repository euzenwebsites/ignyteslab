import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Logo from "../../../public/icon/logo.svg"
import Ignytes from '../animations/Ignytes'

const Footer = () => {
  return (
    <section className='h-full  w-[100%] flex justify-center mt-36 '>
    <div className='w-[80%]  relative mb-10 '>
        <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-20'>
            <div className=' bg-light-blue uppercase text-white flex flex-col px-10 py-8'>
            <div className='mb-6'>
                <h1 className='text-3xl text-white '>office</h1>
                <p className='text-lg'>18601 FM 1431 Ste 104 #2053 Jonestown, TX 78645</p>
            </div>
            <div className='mb-6'>
                <h1 className='text-3xl text-white'>email</h1>
                <Link href="mailto:inquiry@ignyteslab.com">inquiry@ignyteslab.com</Link>
            </div>
            
            </div>
            <div className='flex flex-row gap-10'>
                <div>
                    <h3 className='text-xl max-sm:text-lg font-bold mb-8'>Our Company</h3>
                    <ul className='flex flex-col gap-6'>
                        <li className='hover:text-light-blue'><Link href="/">Home</Link> </li>
                        <li className='hover:text-light-blue'><Link href="/about">About</Link></li>
                        <li className='hover:text-light-blue'><Link href="/portfolio">Portfolio</Link></li>
                        <li className='hover:text-light-blue'><Link href="/pricing">Pricing</Link></li>
                        <li className='hover:text-light-blue'><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className='text-xl max-sm:text-lg font-bold mb-8'>Social Media</h3>
                    <ul className='flex flex-col gap-6'>
                        <li className='hover:text-light-blue'><Link href="/">Facebook</Link> </li>
                        <li className='hover:text-light-blue'><Link href="/">Twitter</Link></li>
                        <li className='hover:text-light-blue'><Link href="/">Linkedin</Link></li>
                    </ul>
                </div>
                <div>
                    
                </div>
            </div>
            <div>
                    <h1 className='text-2xl font-bold mb-10'>Weekly Newsletter</h1>
                    <p className='mb-10'>With our special weekly newsletter, which is filled with updates, trends, and industry insights, stay ahead of the game. 
                    Sign up now to receive informative content directly in your inbox.</p>
                    <form>
                        <input placeholder='Your Email' className='bg-gray p-4 mr-4'/>
                        <button className='bg-light-blue text-white p-4'>Send</button>
                    </form>
            </div>
        </div>

        <div className='flex flex-row max-sm:flex-col justify-between border-t-2 border-light-blue mt-10 pt-4'>
            <Ignytes/>
            <p className='opacit-50'>© Copyright 2023 IGNYTESLAB. All rights reserved</p>
        </div>
    </div>

    
    </section>
    
  )
}

export default Footer
