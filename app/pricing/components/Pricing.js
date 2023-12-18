"use client"
import PricingBox from '../../components/ui/PricingBox'
import Image from "next/image";
import WebDesPricing from './WebDesPricing';
import WebPricing from "./WebPricing";
import SMMPricing from "./SMMPricing";
import VideoPricing from "./VideoPricing";
import MobilePricing from "./MobilePricing";
import LogoPricing from "./LogoPricing";
import BrandingPricing from "./BrandingPricing";
import SEOPricing from "./SEOPricing";
import { useState } from "react";
import "../../globals.css"

const contentItems = {
  "Website Development": <WebPricing />,
  "Website Designing": <WebDesPricing />,
  "SEO": <SEOPricing />,
  "Mobile App Development": <MobilePricing />,
  "Logo Designing": <LogoPricing />,
  "Branding": <BrandingPricing />,
  "Video Animation": <VideoPricing />,
  "Social Media Marketing": <SMMPricing />,
};

const PricingTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState("Website Development"); 

  const handleSwitch = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="h-full relative max-h-full  flex justify-center text-white w-[100%] pt-28 mb-28">
      
<div className="w-[80%]">
      <div className='flex flex-col items-center gap-8 text-6xl max-sm:text-4xl font-bold pb-10 max-sm:text-center '>
       <h1 className='text-[#000]' >SPECIAL<span className='second-heading  pl-4'>PRICE & PLAN</span></h1>
      <p className='text-[#6A6A6A] text-lg font-light '>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus ullamcorper.</p>
    </div>

    <div className='flex flex-row max-sm:flex-col gap-8'>
        <div className='w-[20%] max-sm:w-full flex flex-col max-sm:flex-col gap-4 '>
          {Object.keys(contentItems).map((index) => (
            <button key={index} onClick={() => handleSwitch(index)} 
            className={`text-[#000] p-4 max-sm:p-2 bg-[#D9D9D9]   hover:bg-light-blue hover:text-[#fff] ${activeIndex === index ? 'active-btn2' : ''}`}>
            
    
              {index}
            </button>
          ))}
        </div>
        <div className=''>
        {contentItems[activeIndex]}
        </div>
    </div>
</div>
    </section>
  );
};

export default PricingTestimonials;
// import React from 'react'
// import PricingBox from '../../components/ui/PricingBox'

// const Pricing = () => {
//   return (
//     <section className='h-full  w-[100%] flex justify-center mt-36 mb-36'>
//     <div className='w-[80%] flex flex-col justify-center items-center relative '>

//     <div className='flex flex-col items-center gap-8 text-6xl font-bold pb-10 '>
//         <h1 className='text-[#000]' >SPECIAL<span className='second-heading  pl-4'>PRICE & PLAN</span></h1>
//         <p className='text-[#6A6A6A] text-lg font-light '>Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus ullamcorper.</p>
//     </div>
//       <div className='flex flex-row gap-20'>
//         <PricingBox/>
//         <PricingBox/>
//         <PricingBox/>
//       </div>
//     </div>
//     </section>
//   )
// }

// export default Pricing
