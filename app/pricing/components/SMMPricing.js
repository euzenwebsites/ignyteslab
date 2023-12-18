
import Image from "next/image"

import PricingBox from '../../components/ui/PricingBox'

const SMMPricing = () => {
  return (
   
    <div >
    {/* ///////////////////////// */}

    {/* whole div */}
    <div className="flex flex-row max-sm:flex-col gap-4 justify-center relative ">
            <PricingBox
                package={"PRO"}
                price={"$700"}
                color={"#D9D9D9"}
                slogan={"Professional plan"}

                item1={"2 platforms of our choice"}
               item2={"3 post week"}
               item3={"business page optimization"}
               item4={"content creation"}
               item5={"community management"}
            
                
            />
            <PricingBox
                package={"PREMIUM"}
                price={"$1500"}
               color={"#D9D9D9"}
               slogan={"Business plan"}

               item1={"3 platforms of your choice"}
               item2={"5 posts per week"}
               item3={"community management"}
               item4={"business page optimization"}
               item5={"monthly progress report"}
               item6={"copy writing"}
               item7={"likes campaign"}
               
           />
           <PricingBox
                package={"ENTERPRISE"}
                price={"$2500"}
               color={"#D9D9D9"}
               slogan={"Ultimate plan"}

               item1={"4 platforms of your choice"}
               item2={"7 posts per week"}
               item3={"copywriting & visual design"}
               item4={"business page optimization"}
               item5={"business page optimization"}
               item6={"ad campaign management"}
               item7={"spam monitoring"}
               item9={"monthly progress report"}
               item10={"reputation management"}
               item11={"social account setup"}
               item12={"content creation"}
               item13={"social media hearing"}
               item14={"query and comments reply"}
               
           />
            

    </div>
    </div>
    

  )
}

export default SMMPricing
