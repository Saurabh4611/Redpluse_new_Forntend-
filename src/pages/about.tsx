import AboutTwo from "@/components/sections/about/aboutTwo"
import MarqueTwo from "@/components/sections/marques/marqueTwo"
import PartnersOne from "@/components/sections/partners/partnersOne"
import ProjectsTwo from "@/components/sections/projects/projectsTwo"
import Offer from "@/components/sections/offer"
import PageTitle from "@/components/sections/pageTitle"


const About = () => {
  return (
    <>
      <PageTitle title="About Us" currentPage="About Us"/>
      <AboutTwo/>
      <Offer/>
      <ProjectsTwo/>
      <MarqueTwo className="section-padding"/>
     
      <PartnersOne/>
    </>
  )
}

export default About