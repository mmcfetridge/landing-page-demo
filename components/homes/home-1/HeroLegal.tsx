"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

const slides = [
  {
    title: "Objective TBI Evidence<br />for Complex Litigation",
    subtitle: "Scientifically validated volumetric and DTI reporting.<br>Jury-ready visualizations that quantify traumatic brain injury.",
    buttonText: "Submit Case Review",
  },
  {
    title: "Expert Consultative<br>Analysis & Support",
    subtitle: "Comprehensive imaging review by industry-leading neuro-experts.<br>Expert witness testimony and detailed damage quantification.",
    buttonText: "Our Methodology",
  },
  {
    title: "Transforming Imaging<br>into Legal Proof",
    subtitle: "High-fidelity analysis of axonal injury and cortical atrophy.<br>The gold standard in objective neuro-radiological evidence.",
    buttonText: "Contact an Expert",
  },
];

export default function HeroLegal() {
  return (
    <div className="page-title-home img-1 style-absolute">
      <Swiper
        dir="ltr"
        className="swiper sw-auto style-absolute"
        modules={[EffectFade, Autoplay, Navigation]}
        autoplay={{ delay: 5000 }}
        speed={1000}
        effect="fade"
        navigation={{
          prevEl: ".snbp3",
          nextEl: ".snbn3",
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div className={`page-title-inner img-h1-${index + 1}`}>
              <div className="tf-container">
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-content">
                      <h1
                        className="tf-fade-top fade-item-1"
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />
                      <div
                        dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                        className="sub-title body-2 tf-fade-top fade-item-2"
                      ></div>
                      <Link
                        href="#contact"
                        className="tf-btn style-1 bg-white tf-fade-top fade-item-3"
                      >
                        <span>{slide.buttonText}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div role="button" className="tf-btn-arrow arrow-left sw-auto-next snbp3">
          <i className="icon-arrow-left" />
        </div>
        <div role="button" className="tf-btn-arrow arrow-right sw-auto-prev snbn3">
          <i className="icon-arrow-right1" />
        </div>
      </Swiper>
    </div>
  );
}