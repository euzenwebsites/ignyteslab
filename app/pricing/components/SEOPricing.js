import React from 'react'
import Image from "next/image"

import PricingBox from '../../components/ui/PricingBox'

const SEOPricing = () => {
  return (
    <div className="flex flex-row max-sm:flex-col gap-4 justify-center relative ">
            <PricingBox
                package={"Pro"}
                price={"$600"}
                color={"#D9D9D9"}

                item1={"Prior Analysis"}
               item2={"Business Analysis"}
               item3={"Consumer Analysis"}
               item4={"Competitor Analysis"}
               item5={"Selected Keywords Targeting"}
               item6={"Pages Keyword Targeted"}
               item7={"Webpage Optimization"}
              
                
            />
            <PricingBox
                package={"PREMIUM"}
                price={"$900"}
               color={"#D9D9D9"}

               item1={"Prior Analysis"}
               item2={"Consumer Analysis"}
               item3={"Competitor Analysis"}
               item4={"30 Selected Keywords Targeting"}
               item5={"30 Pages Keyword Targeted"}
               item6={"Webpage Optimization"}
               item7={"Meta Tags Creation"}
               
           />
           <PricingBox
                package={"ENTERPRISE"}
                price={"$1200"}
               color={"#D9D9D9"}

               item1={"Prior Analysis"}
               item2={"Business Analysis"}
               item3={"Consumer Analysis"}
               item4={"Competitor Analysis"}
               item5={"70 Selected Keywords Targeting"}
               item6={"50 Pages Keyword Targeted"}
               item7={"Webpage Optimization"}
               
           />
    </div>
  )
}

export default SEOPricing
