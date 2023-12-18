
import Image from "next/image"


import PricingBox from '../../components/ui/PricingBox'

const BrandingPricing = () => {
  return (
    
    <div >
    <div className="flex flex-row max-sm:flex-col gap-4 justify-center relative ">
    
            <PricingBox
                package={"Pro"}
                price={"$99"}
                color={"#D9D9D9"}
                item1={"2 Stationery Design Set"}
               item2={"FREE Fax Template"}
               item3={"Print Ready Formats"}
               item4={"UNLIMITED Revisions"}
               item5={"Satisfaction Guarantee"}
                
            />
            <PricingBox
                package={"PREMIUM"}
                price={"$199"}
               color={"#D9D9D9"}
               item1={"2 Stationery Design Set"}
               item2={"UNLIMITED Revisions"}
               item3={"Flyer Design"}
               item4={"Brochure Design (Bi-fold/Tri-fold)"}
               item5={"Satisfaction Guarantee"}
               
           />
           <PricingBox
                package={"ENTERPRISE"}
                price={"$399"}
               color={"#D9D9D9"}
               item1={"2 Stationery Design Set"}
               item2={"Packaging Design"}
               item3={"UNLIMITED Revisions"}
               item4={"T-Shirt Design"}
               item5={"T shirt Design"}
               item6={"Satisfaction Guarantee"}
               
           />
            
            </div>
    </div>
    
    

  )
}

export default BrandingPricing
