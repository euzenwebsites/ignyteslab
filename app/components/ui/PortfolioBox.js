import React from 'react'
import Image from 'next/image'
import portImg1 from "../../../public/image/portimg1.jpg"
const PortfolioBox = (props) => {
  return (
    <div className='w-[100%]'>
      <Image src={props.portimg}/>
      <div className='flex flex-row max-sm:flex-col mt-4'>
        <div>
            <h1 className='font-bold  text-2xl'>{props.heading}</h1>
            <p className='text-gray text-lg font-light'>{props.description}</p>
        </div>
        <button className='uppercase bg-[#3087C8] max-sm:mt-8 pl-4 pr-4 h-10 text-white rounded-full hover:bg-[#012D56]'>{props.category}</button>
      </div>
    </div>
  )
}

export default PortfolioBox
