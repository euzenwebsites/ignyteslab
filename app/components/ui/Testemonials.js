"use client"
import ceoImg1 from "../../../public/image/ceo1.png"
import ceoImg2 from "../../../public/image/ceo2.png"
import ceoImg3 from "../../../public/image/ceo3.png"
import Image from 'next/image';
import { Splide, SplideSlide,SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import TestemonialSingle from "./TestemonialSingle"
const Testemonials = () => {
  return (
    <>
      <Splide 
      className="my-carousel" aria-label="My Favorite Images"
      tag="section"
      hasTrack={ false }
      options={ {
        autoplay: true,
        arrows: false,
        rewind: true,
        pagination: false,
        isNavigation:false,
        
      } }>
        <SplideTrack>
  <SplideSlide>
                <TestemonialSingle 
                name="Rayan turner"
                designation = ""
                ceo ={ceoImg1}
                description="Ignytes Lab.Agency breadth of technical knowledge and resources is impressive."/>
  </SplideSlide>
  <SplideSlide>
                <TestemonialSingle 
                name="sharon walzack"
                designation = ""
                ceo ={ceoImg2}
                description="They were on top of everything. Every task was tracked, managed, and checked off once it was completed."/>
  </SplideSlide>
  <SplideSlide>
                <TestemonialSingle
                name="warner kelley"
                designation = ""
                ceo ={ceoImg3}
                description="They were very well-versed in the nuances of this emerging industry, which was important to us."/>
  </SplideSlide>
  </SplideTrack>
</Splide>    
            
        
     
    </>
  )
}

export default Testemonials
