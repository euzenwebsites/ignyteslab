import PricingBox from '../../components/ui/PricingBox'

import Image from "next/image"

const WebPricing = () => {
  return (
   
    <div className="w-[100%] flex flex-col ">
    {/* whole div */}
    <div className="flex flex-row max-md:flex-col max-sm:flex-col max-md:gap-8 gap-4 justify-center  relative ">
            <PricingBox
                package={"PRO"}
                price={"$244"}
                color={"#D9D9D9"}
               slogan={"Basic Website"}

                item1={"1 Page Website Design"}
            
                item2={"HTML Based"}
             
                item3={"1 Banner Design"}

                item4={"Contact/Query Form"}
                
                item5={"3 Revisions"}
                
                item6={"Complete W3C Certified HTML"}
                
                item7={"Complete Deployment"}
                
                
            />
            <PricingBox
                package={"PREMIUM"}
                price={"$394"}
               color={"#D9D9D9"}
               slogan={"Wordpress"}

               item1={"3 Page Website Design"}
            
                item2={"HTML Based "}
             
                item3={"Hover Effects"}

                item4={"2 Banner Designs"}
                
                item5={"Sliding Banner"}
                
                item6={"2 Stock Photos (You can provide us more)"}
                
               
           />
           <PricingBox
                package={"ENTERPRISE"}
                price={"$819"}
               color={"#D9D9D9"}
               slogan={"Up to 5 Pages Website Design"}

               item1={"3 Stock Photos"}
            
               item2={"Content Management System"}
            
               item3={"5 Professional Email ID’s"}

               item4={"Unlimited Revisions"}
               
               item5={"Complete Source Files"}
               
               item6={"Dedicated Project Manager"}
               
               item7={"Ownership Rights"}
               
           />
            

    </div>
    </div>
    

  )
}

export default WebPricing
