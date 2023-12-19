"use client"
import React from 'react'
import { useState } from 'react';
import Modal from './Modal';
const PricingBox = (props) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <><Modal isOpen={isModalOpen} closeModal={closeModal} />
    <div className='relative w-1/3 max-sm:w-[100%]'>
    <div className='bg-light-blue text-white uppercase pl-10 pr-10 pt-12 pb-20 font-semibold'>
      <div className='border-b-2 pb-4'>
            <h3 className='text-2xl '>{props.package}</h3>
            <h1 className='text-5xl text-white mt-4 '>{props.price}</h1>
      </div>
      <div className='text-xs leading-8 mt-6'>
      <ul className="overflow-y-scroll h-72 divide-y ">
                <li className='underline-offset-8'>{props.item1}</li>
                <li >{props.item2}</li>
                <li >{props.item3}</li>    
                <li >{props.item4}</li>
                <li >{props.item5}</li>
                <li >{props.item6}</li>
                <li >{props.item7}</li>
                <li >{props.item8}</li>
                <li >{props.item9}</li>
                <li >{props.item10}</li>
                <li >{props.item11}</li>
                <li >{props.item12}</li>
                <li >{props.item13}</li>
                <li >{props.item14}</li>
                <li >{props.item15}</li>
                <li >{props.item16}</li>
            </ul>
      </div>
     
    </div>
    <button className='bg-black px-12 py-6 uppercase absolute text-white left-[15%] top-[90%] font-semibold'
    onClick={openModal}>get started</button>
    </div>
    </>
  )
}

export default PricingBox
