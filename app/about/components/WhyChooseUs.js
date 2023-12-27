import Feature from '@/app/components/ui/Feature'
import React from 'react'

const WhyChooseUs = () => {
  return (
    <section className='h-full  w-[100%] flex justify-center mt-36 mb-36'>
    <div className='w-[80%] flex flex-col justify-center items-center relative '>
    <div className=' text-4xl sm:text-6xl font-bold pb-20 text-center'>
        <h1 className='text-light-blue' >WHY <span className='blue-heading '>CHOOSE US?</span></h1>
        <p className='text-gray text-lg font-light'>Invest in our knowledge and commitment to achieve success.</p>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8'>
        <Feature number="01." heading="Expertise" description="Vast expertise and a specific understanding of our industry."/>
        <Feature number="02." heading="Quality" description="Consistent delivery of high-quality services. Upholding constant standards."/>
        <Feature number="03." heading="Reliability" description="Trustworthy and dependable when it comes to keeping promises and deadlines."/>
        <Feature number="04." heading="Results-Oriented" description="A proven track record of meeting and surpassing customer goals."/>
        <Feature number="05." heading="Transparency" description="Clear and honest communication throughout services or projects."/>
        <Feature number="06." heading="Customer Service" description="Outstanding customer service and a commitment to client satisfaction."/>
    </div>
    </div>

    </section>
  )
}

export default WhyChooseUs
