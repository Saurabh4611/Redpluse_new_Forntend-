
import MarqueTwo from "@/components/sections/marques/marqueTwo"
import PartnersOne from "@/components/sections/partners/partnersOne"

import Offer from "@/components/sections/offer"
import PageTitle from "@/components/sections/pageTitle"


const About = () => {
  return (
    <>
      <PageTitle title="About Us" currentPage="About Us"/>
      
      <Offer/>
     
      <MarqueTwo className="section-padding"/>
     
      <PartnersOne/>
    </>
  )
}

export default About