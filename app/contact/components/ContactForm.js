import Form from '@/app/components/ui/Form'
import React from 'react'
import Link from 'next/link'
const ContactForm = () => {
  return (
    <section className='h-full  w-[100%] flex justify-center mt-36 mb-36'>
    <div className='w-[80%] flex gap-8 relative'>
    <div className='w-full grid gridcols-1 sm:grid-cols-2 shadow-2xl  p-10  '>
        <div className='flex flex-col gap-10 mt-28'>
            <div>
            <p className='text-gray text-base font-light '>Our Address</p>
            <h3 className='text-lg font-bold text-light-blue'>18601 FM 1431 Ste 104 #2053 Jonestown, TX 78645</h3>
        </div>
        <div>
            <p className='text-gray text-base font-light '>Our Email</p>
            <h3 className='text-lg font-bold text-light-blue'>
              <Link href="mailto:inquiry@ignyteslab.com">inquiry@ignyteslab.com</Link></h3>
        </div>
        <div></div>
        
      </div>
      <div>
        <h1 className='text-light-blue text-4xl font-bold mb-8'>LEAVE YOUR MESSAGE</h1>
        <Form/>
      </div>
      </div>
    </div>
    </section>
  )
}

export default ContactForm
