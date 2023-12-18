import React from 'react'
import Image from 'next/image'
import ceoImg1 from "../../../public/image/ceo1.png"
import star from "../../../public/icon/star.gif"

const TestemonialSingle = (props) => {
  return (
    <div>
    <div className="mb-4 flex">
    <Image src={star} width={20}/>
    <Image src={star} width={20}/>
    <Image src={star} width={20}/>
    <Image src={star} width={20}/>
    <Image src={star} width={20}/>
    </div>
    
    <div className='flex flex-row  items-center gap-4 mb-4'>
        <Image src={props.ceo} alt={props.ceo} className="border-2 rounded-full" width={60}/>
    <div>
        <h3 className="font-bold text-base uppercase ">{props.name}</h3>
        <p className="font-light ">{props.designation}</p>
    </div>
    </div>
    <p className='text-[#6A6A6A] text-2xl font-normal'><span>"</span>{props.description}<span>"</span></p>
</div>
  )
}

export default TestemonialSingle
