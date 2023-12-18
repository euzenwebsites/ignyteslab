import PricingBox from '../../components/ui/PricingBox'

import Image from "next/image"



const WebDesPricing = () => {
  return (
   
    <div >

    {/* whole div */}
    <div className="flex flex-row max-sm:flex-col gap-4 justify-center   relative ">
            <PricingBox
                package={"PRO"}
                price={"$300"}
                color={"#D9D9D9"}
               slogan={"Wordpress"}
               item1={"High End Design"}
               item2={"Custom UI/UX"}
               item3={"3 page Website"}
               item4={"Complete W3C Certified HTML"}
               item5={"Complete Deployment"}
               item6={"100% Ownership Rights"}
               
                
            />
            <PricingBox
                package={"PREMIUM"}
                price={"$450"}
               color={"#D9D9D9"}
               slogan={"Startup Website Package"}
               item1={"Wordpress"}
               item2={"Custom UI/UX"}
               item3={"5 page Website"}
               item4={"Complete W3C Certified HTML"}
               item5={"5 stock Images"}
               item6={"FREE Google Friendly Sitemap"}
               
           />
           <PricingBox
                package={"ENTERPRISE"}
                price={"$850"}
               color={"#D9D9D9"}
               slogan={"Professional Website Package"}
               item1={"High End Design"}
               item2={"Custom UI/UX"}
               item3={"10 Unique page Website"}
               item4={"CMS/ Pages Website"}
               item5={"5 banner Design"}
               item6={"FREE Google Friendly Sitemap"}
               item7={"Complete Deployment"}
               
           />
            

    </div>
    </div>
    

  )
}

export default WebDesPricing
