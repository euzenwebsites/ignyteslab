"use client"
import { useState } from 'react';
import Modal from './Modal';
const CTA = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
    <Modal isOpen={isModalOpen} closeModal={closeModal} />
    
    <section>
        <div className='h-full  w-[100%] flex flex-col gap-6 items-center mt-16 mb-16 uppercase max-sm:text-center'>
                <h1 className='text-light-blue text-6xl max-sm:text-4xl font-semibold '>have a project?</h1>
                <h1 className='blue-heading text-white text-5xl max-sm:text-4xl font-semibold'>lets talk</h1>
                <button onClick={openModal} className='bg-light-blue uppercase p-6 text-white font-medium'>get started</button>
        </div>
   
    </section>
    </>
  )
}

export default CTA
