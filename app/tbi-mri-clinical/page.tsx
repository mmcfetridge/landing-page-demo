import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar1 from "@/components/headers/Topbar1";
import About from "@/components/homes/home-1/About";
import Awards from "@/components/common/Awards";
import Benefits from "@/components/homes/home-1/Benefits";
import Blogs from "@/components/common/Blogs";
import CaseStudies from "@/components/homes/home-1/CaseStudies";
import Cta from "@/components/common/Cta2";
import Faqs from "@/components/homes/home-1/Faqs";
import HeroClinical from "@/components/homes/home-1/HeroClinical";
import Process from "@/components/homes/home-1/Process";
import Services from "@/components/common/Services";
import Testimonials from "@/components/homes/home-1/Testimonials";
import Partners from "@/components/common/Partners";


export default function ClinicalLandingPage() {
  return (
    <>
      <Topbar1 />
      <Header1 onepage />
      <HeroClinical /> 
      <div className="main-content">
        <About />
        <Benefits />
        <Services />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Faqs />
        <Partners />
      </div>
      <Footer1 />
    </>
  );
}