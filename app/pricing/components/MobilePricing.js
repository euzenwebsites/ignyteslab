import React from 'react'
import Image from "next/image"

import PricingBox from '../../components/ui/PricingBox'

const MobilePricing = () => {
  return (
  
    <div >

    <div className="flex flex-row max-sm:flex-col gap-4 justify-center relative ">
            <PricingBox
                package={"Basic"}
                price={"$2560"}
                color={"#D9D9D9"}

                item1={"50% Upfront to get started with the work immediately"}
               item2={"No. of Features Up to 7"}
               item3={"Wireframing"}
               item4={"Intuitive UI UX (Custom App Design)"}
               item5={"Social Media Integration"}
               item6={"App Testing"}
               item7={"Publishing on App Store"}
               item9={"Paid bug support ($350/m)"}
               item10={"Native iOS OR Android app"}
                
            />
            <PricingBox
                package={"Standard"}
                price={"$4160"}
               color={"#D9D9D9"}

               item1={"50% Upfront to get started with the work immediately"}
               item2={"No. of Features Up to 10"}
               item3={"Wireframing"}
               item4={"Intuitive UI UX (Custom App Design)"}
               item5={"Social Media Integration"}
               item6={"App Testing"}
               item7={"Ads Network Integration"}
               item9={"Firebase Integration"}
               item10={"Publishing on App Store"}
               item11={"1 Month free bug support"}
               item12={"Native iOS OR Android app"}
               item13={"Messaging API Integration (Live Chat)"}
               item14={"Google Maps Integration"}
               
           />
           <PricingBox
                package={"Business"}
                price={"$10,000"}
               color={"#D9D9D9"}
               item1={"25% Upfront to get started with the work immediately"}
               item2={"No. of Features Up to 25"}
               item3={"Wireframing"}
               item4={"Ads Network Integration"}
               item5={"Firebase Integration"}
               item6={"App Store Optimization"}
               item7={"3 Month free bug support"}
               item9={"Native iOS OR Android app"}
               item10={"Cross-Platform (Hybrid) On Demand"}
               item11={"Regular App Updates Yearly 1 Update"}
               item12={"Audio/Video Streaming"}
               item13={"Payment Gateways Integration"}
               item14={"Shopping Cart"}
               
           />
            

    </div>
    </div>
    

  )
}

export default MobilePricing
