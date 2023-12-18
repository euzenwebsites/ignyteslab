import React from 'react'
import Image from "next/image"

import PricingBox from '../../components/ui/PricingBox'

const VideoPricing = () => {
  return (
    
        <div >

        {/* whole div */}
        <div className="flex flex-row max-sm:flex-col gap-4 justify-center relative ">
                <PricingBox
                    package={"Pro"}
                    price={"$750"}
                    color={"#D9D9D9"}
               slogan={"Basic 2D Animation"}

                    item1={"2D animation"}
               item2={"30 second video animation"}
               item3={"Unlimited Revisions"}
               item4={"2 characters"}
               item5={" 2 objects"}
               item6={"2 scenic backgrounds"}
               item7={"Professional script"}
               item9={"Storyboard"}
               item10={"Voiceover"}
               item11={"Music & SFX"}
               item12={"4 weeks delivery"}
                    
                />
                <PricingBox
                    package={"Enterprise"}
                    price={"$2500"}
                   color={"#D9D9D9"}
               slogan={"Premium 2D animation"}

                   item1={"2D animation"}
               item2={"1-5 minute video animation"}
               item3={"unlimited revisions"}
               item4={"5 characters"}
               item5={"10 objects"}
               item6={"5 scenic backgrounds"}
               item7={"Professional script"}
               item9={"Storyboard"}
               item10={"Voiceover"}
               item11={"Music & SFX"}
               item12={"6-8 weeks delivery"}
                   
               />
               <PricingBox
                    package={"Premium"}
                    price={"$4000"}
                   color={"#D9D9D9"}
               slogan={"Ultimate 2D animation"}

                   item1={"2D animationn"}
               item2={"5-15 minute video animation"}
               item3={"Unlimited revisions "}
               item4={" 10 characters"}
               item5={"15 objects"}
               item6={"10 scenic backgrounds"}
               item7={"Professional scriptn"}
               item9={"Storyboard"}
               item10={"Voiceover"}
               item11={"Music & SFX"}
               item12={"10-12 weeks delivery"}
                   
               />
                
 
        </div>
        </div>
        
    
  )
}

export default VideoPricing
