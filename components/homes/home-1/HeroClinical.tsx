"use client";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

interface SlideData {
  title: string;
  subtitle: string;
  buttonText: string;
  video: string;
}

const slides: SlideData[] = [
  {
    title: "Automated MRI DTI/FA Analysis<br />Reports for Clinical Excellence",
    subtitle: "Capture $200–$300 in CPT reimbursement per scan.<br>FDA-cleared neuro-quantification DTI/FA analysis, delivered in 48 hours.",
    buttonText: "FREE Information Package",
    video: "/assets/videos/clinical-1-bg.mp4",
  },
  {
    title: "Precision Diagnostics for<br>Radiologists and Neuroradiologists",
    subtitle: "Objective brain volume and DTI/FA analysis for superior patient care.<br>Seamlessly integrated into your existing imaging workflow.",
    buttonText: "FREE Information Package",
    // ENSURE THIS FILE EXISTS IN /public/assets/videos/
    video: "/assets/videos/clinical-2-bg.mp4" 
  }
];

export default function HeroClinical() {
  return (
    <div className="page-title-home style-absolute">
      <Swiper
        dir="ltr"
        className="swiper sw-auto style-absolute"
        modules={[EffectFade, Autoplay, Navigation]}
        // Slowed down for a premium medical feel
        autoplay={{ delay: 7900, disableOnInteraction: false }}
        speed={2500} 
        effect="fade"
        navigation={{ prevEl: ".snbp3", nextEl: ".snbn3" }}
        loop={false}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="swiper-slide" key={index}>
            <div 
              className="page-title-inner" 
              style={{ 
                position: 'relative', 
                minHeight: '1000px', 
                overflow: 'hidden',
                backgroundColor: 'black' 
              }}
            >
              
              {/* VIDEO LAYER - The 'key' prop ensures the video element reloads when the slide changes */}
              <video
                key={slide.video}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0
                }}
              >
                <source src={slide.video} type="video/mp4" />
              </video>

              {/* OVERLAY */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.4))",
                zIndex: 1
              }} />

              {/* CONTENT */}
              <div className="tf-container" style={{ position: 'relative', zIndex: 2 }}>
                <div className="row">
                  <div className="col-12">
                    <div className="page-title-content">
                      <h1
                        className="tf-fade-top fade-item-1 text-white"
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      />
                      <div
                        dangerouslySetInnerHTML={{ __html: slide.subtitle }}
                        className="sub-title body-2 tf-fade-top fade-item-2 text-white"
                        style={{ opacity: 0.9, marginBottom: '30px' }}
                      />
                      <Link href="/free-information-kit" className="tf-btn style-1 bg-white tf-fade-top fade-item-3">
                        <span>{slide.buttonText}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div role="button" className="tf-btn-arrow arrow-left snbp3"><i className="icon-arrow-left" /></div>
        <div role="button" className="tf-btn-arrow arrow-right snbn3"><i className="icon-arrow-right1" /></div>
      </Swiper>
    </div>
  );
}