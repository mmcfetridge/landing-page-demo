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
import HeroLegal from "@/components/homes/home-1/HeroLegal";
import Process from "@/components/homes/home-1/Process";
import Services from "@/components/common/Services";
import Testimonials from "@/components/homes/home-1/Testimonials";
// Note: You might want to create a ServicesLegal.tsx as well!
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal TBI Case Review | Expert MRI Consultation",
  description: "Advanced neuro-imaging analysis and expert consultation for legal professionals.",
};

export default function LegalLandingPage() {
  return (
    <>
      <Topbar1 />
      <Header1 onepage />
      <HeroLegal /> 
      <div className="main-content">
        <About />
        <Benefits />
        <Services />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Faqs />
        <Blogs />
        <Awards />
        <Cta />
      </div>
      <Footer1 />
    </>
  );
}