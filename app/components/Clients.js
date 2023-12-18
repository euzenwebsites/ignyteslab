import React from 'react'
import Testemonials from './ui/Testemonials'

const Clients = () => {
  return (
    <section className='h-full  w-[100%] flex justify-center pt-24 pb-20 relative'>
    <div className='w-[80%] flex flex-row max-sm:flex-col gap-8 relative'>
    <div className='w-[40%] max-sm:w-[100%] text-7xl max-sm:text-4xl font-bold max-sm:text-center'>
        <h1 className='text-[#3087C8]' >OUR CLIENT</h1>
        <h1 className='blue-heading text-[#fff] ml-20 max-sm:ml-0 mt-4'>REVIEWS</h1>
    </div>
    <div className='w-[60%] max-sm:w-[100%] '>
        <Testemonials/>
    </div>
    </div>
    </section>
  )
}

export default Clients
