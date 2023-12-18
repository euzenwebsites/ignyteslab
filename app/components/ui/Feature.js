import React from 'react'

const Feature = (props) => {
  return (
    <div className='border-2 border-blue-200 hover:border-blue-500 p-8'>
      <h1 className='text-5xl  font-bold mb-6 blue-heading'>{props.number}</h1>
      <h3 className='text-2xl font-bold text-light-blue mb-6'>{props.heading}</h3>
      <p className='text-gray text-base font-light hover:text-black'>{props.description}</p>
    </div>
  )
}

export default Feature
