"use client"
import React from 'react'
import Link from 'next/link'
import { gsap } from "gsap";
import { useLayoutEffect } from 'react';
import "./module.css"
const AnimatedButton = (props) => {
    useLayoutEffect(() => {
        gsap.fromTo(
          '.link-animation',
          { scale:1.8, duration: 2,  ease: 'ease', repeat: -1 },
          {
            scale:1,
            duration: 1,
            ease: 'ease',
            repeat: -1,
           
          }
        );
      }, []);
    
    
  return (
    <Link href={props.redirect} className='link-animation ani-btn '>
        <span className="wave"></span>
   <span className="text">{props.content}</span>
   </Link>
  )
//   className='link-animation rounded-lg px-10 py-4 bg-light-blue text-[#fff] font-bold'
}

export default AnimatedButton
