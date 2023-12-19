import React from 'react'
import Image from 'next/image'

const ServiceBox = (props) => {
  return (
    <div className='grid grid-cols-6 max-sm:grid-cols-3  gap-4 border-b-2 border-light-blue text-[#6A6A6A] pb-8 pt-8'>
                <Image className='col-span-1' src={props.icon}/>
                <h1 className='text-3xl font-bold col-span-2'>{props.heading}</h1>
                <p className='col-span-3 text-lg font-normal italic '>{props.description}</p>
    </div>
  )
}

export default ServiceBox
