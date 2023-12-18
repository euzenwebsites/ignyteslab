import React from 'react'
import Image from 'next/image'
import Image1 from "../../../public/image/image1.svg"
import arrowIcon from "../../../public/icon/arrow.png"
const HeadingSwitcher1 = () => {
  return (
    <div className='ml-20 max-sm:ml-0 max-sm:p-20   relative'>

        <div className='text-6xl font-bold mb-2 ml-20 max-sm:ml-0'>
            <h1  >EMPOWER</h1>
            <Image src={Image1} alt='image' className='mt-4'/>
        </div>

        <div className='w-[50%] h-[50%] absolute top-[50%] max-sm:top-[100%] max-sm:left-[50%] max-sm:hidden  z-500'>
          <div className='bg-[#3087C8]  w-[40%] h-[20%] z-500 rounded-full relative '></div>
          <div className='bg-[#012D56]  w-[60px] h-[60px] z-600 rounded-full absolute left-[15%] bottom-[70%] flex justify-center items-center'>
            <Image src={arrowIcon}/>
          </div>
        </div>

        <div className='ml-72 max-sm:ml-0 w-[50%] max-sm:w-full'>
            <h1 className='text-8xl font-bold second-heading'>DESIGN</h1>
            <p className='text-[#6A6A6A] opacity-80 italic text-lg mt-8'>With the help of our apps, websites, and designs, discover countless growth prospects.</p>
        </div>

    </div>
  )
}

export default HeadingSwitcher1
